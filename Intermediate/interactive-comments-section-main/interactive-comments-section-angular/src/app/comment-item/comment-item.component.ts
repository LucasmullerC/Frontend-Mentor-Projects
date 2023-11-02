import { Component, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem("dataJson") || '{}')[0].username;
  }

  toggleReplyBox(commentId: number) {
    this.replyBoxes[commentId] = !this.replyBoxes[commentId];
  }

  toggleEditBox(commentId: number) {
    this.editBox[commentId] = !this.editBox[commentId];
  }
}
