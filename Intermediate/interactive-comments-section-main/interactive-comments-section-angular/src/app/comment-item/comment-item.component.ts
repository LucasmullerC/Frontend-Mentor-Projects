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
  editBox: { [commentId: number]: boolean } = {};
  replyBoxes: { [commentId: number]: boolean } = {};

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getComments()
    .subscribe((data: any[]) => {
      this.currentUser = Object.values(data)[0].username;
    });
  }

  toggleReplyBox(commentId: number) {
    this.replyBoxes[commentId] = !this.replyBoxes[commentId];
  }

  toggleEditBox(commentId: number) {
    this.editBox[commentId] = !this.editBox[commentId];
  }
}
