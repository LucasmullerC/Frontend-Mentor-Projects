import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'interactive-comments-section-angular';

  dataJson: any[] = [];
  currentUser: any[] = [];
  comments: any[] = [];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    if(localStorage.getItem("dataJson")==undefined){
      this.commentService.getComments()
      .subscribe((data: any[]) => {
        this.comments = Object.values(data)[1];
        localStorage.setItem("dataJson", JSON.stringify(Object.values(data)));
        this.currentUser = Object.values(data)[0];
      });
    }
    else{
      this.dataJson = JSON.parse(localStorage.getItem("dataJson") || '{}');
      this.comments = this.dataJson[1];
      this.currentUser = this.dataJson[0];
    }
  }
}
