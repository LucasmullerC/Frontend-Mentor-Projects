import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private jsonUrl = './assets/data.json';

  dataJson: any[] = [];
  currentUser: any[] = [];
  comments: any[] = [];

  constructor(private http: HttpClient) { }

  getComments(): Observable<any[]> { 
    if(localStorage.getItem("dataJson")){
      this.dataJson = JSON.parse(localStorage.getItem("dataJson") || '{}');
      return of(this.dataJson);
    }
    else{
      return this.http.get<any[]>(this.jsonUrl).pipe(
        map((data: any[]) => {
          localStorage.setItem('dataJson', JSON.stringify(Object.values(data)));
          this.dataJson = Object.values(data);
          return Object.values(data);
        }),
        catchError((error: any) => {
          console.error('Error trying to catch Json', error);
          return of([]);
        })
      );
    }
  }

  EditComment(comment: any) {
    for(let data of this.dataJson[1]){
      for(let reply of data.replies){
        if(comment.id == reply.id){
          reply = comment;
          break;
        }
      }
      if(comment.id == data.id){
          data = comment;
          break;
      }
    }
    localStorage.setItem('dataJson', JSON.stringify(Object.values(this.dataJson)));
  }
}
