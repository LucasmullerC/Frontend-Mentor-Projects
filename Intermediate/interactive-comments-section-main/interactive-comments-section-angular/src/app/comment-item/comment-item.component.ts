import { Component, Input } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent {
  @Input() comment: any;

  currentUser: any[] = [];

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments()
    .subscribe((data: any[]) => {
      this.currentUser = Object.values(data)[0].username;
    });
  }

  replyBoxes: { [commentId: number]: boolean } = {};

  toggleReplyBox(commentId: number) {
    this.replyBoxes[commentId] = !this.replyBoxes[commentId];
  }
}
