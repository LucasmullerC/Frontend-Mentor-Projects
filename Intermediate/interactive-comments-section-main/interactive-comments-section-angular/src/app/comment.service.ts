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
    if(comment.replyingTo == null){
      const dataIndex = this.dataJson[1].findIndex((data: any) => data.id === comment.id);
      if (dataIndex !== -1) {
        this.dataJson[1][dataIndex] = comment;
      }
    }
    else{
      this.dataJson[1].forEach((data: any) => {
    
        const replyIndex = data.replies.findIndex((reply: any) => reply.id === comment.id);
        if (replyIndex !== -1) {
          data.replies[replyIndex] = comment;
        }
      });
    }

    localStorage.setItem('dataJson', JSON.stringify(Object.values(this.dataJson)));
  }

  sendComment(newComment: any,comment: any, type: boolean){
    if(type == true){
      this.dataJson[1].forEach((data: any) => {
    
        const replyIndex = data.replies.findIndex((reply: any) => reply.id === comment.id);
        if (replyIndex !== -1) {
          data.replies.push(newComment);
        }
        else{
          if (data.id === comment.id) {
            data.replies.push(newComment);
          }
        }
      });
    }
    else{
      this.dataJson[1].push(newComment);
    }
    localStorage.setItem('dataJson', JSON.stringify(Object.values(this.dataJson)));
  }

  DeleteCommentComponent(comment:any){
  if(comment.replyingTo == null){
    this.dataJson[1] = this.dataJson[1].filter((data: any) => data.id !== comment.id)
  }
  else{
    this.dataJson[1].forEach((data: any) => {
  
      data.replies = data.replies.filter((reply: any) => reply.id !== comment.id);
    });
  }
  
  localStorage.setItem('dataJson', JSON.stringify(this.dataJson));
  }
}
