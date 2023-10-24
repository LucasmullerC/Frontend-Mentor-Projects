import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'interactive-comments-section-angular';

  currentUser: any[] = [];
  comments: any[] = [];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments()
    .subscribe((data: any[]) => {
      this.comments = Object.values(data)[1];
      this.currentUser = Object.values(data)[0];
    });
  }
}
