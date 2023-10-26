import { Component } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-reply-item',
  templateUrl: './reply-item.component.html',
  styleUrls: ['./reply-item.component.scss']
})
export class ReplyItemComponent {
  currentUser: any[] = [];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments()
    .subscribe((data: any[]) => {
      this.currentUser = Object.values(data)[0].image.png;
    });
  }
}
