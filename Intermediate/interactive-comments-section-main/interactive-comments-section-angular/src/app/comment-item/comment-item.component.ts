import { Component, Input } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent {
  @Input() comment: any;

  dataJson: any[] = [];
  currentUser: any[] = [];
  editedContent: string = ''; 
  mention: string = '';
  
  editBox: { [commentId: number]: boolean } = {};
  replyBoxes: { [commentId: number]: boolean } = {};
  deleteBoxes: { [commentId: number]: boolean } = {};

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.dataJson = JSON.parse(localStorage.getItem("dataJson") || '{}');
    this.currentUser = this.dataJson[0].username;
  }

  toggleReplyBox(commentId: number) {
    this.replyBoxes[commentId] = !this.replyBoxes[commentId];
  }

  
  toggleDeleteBox(commentId: number) {
    this.deleteBoxes[commentId] = !this.deleteBoxes[commentId];
  }

  toggleEditBox(comment: any) {
    this.editedContent = (comment.replyingTo != null ? ('@' + comment.replyingTo) : '') + ' ' + comment.content;
    this.editBox[comment.id] = !this.editBox[comment.id];
  }

  updateCommentContent(comment: any) {
    this.mention = this.editedContent.substring(0, this.editedContent.indexOf(' '));
    if(this.mention.charAt(0) == '@'){
      this.mention = this.mention.replace(/^./, "");
      comment.replyingTo = this.mention;
      comment.content = this.editedContent.substring(this.editedContent.indexOf(' ') + 1);
    }
    else{
      comment.content = this.editedContent;
      comment.replyingTo = null;
    }
    this.commentService.EditComment(comment);

    this.toggleEditBox(comment);
  }

  updateScore(comment: any, action: boolean){
    if(action == true){
      comment.score = comment.score + 1;
    }
    else{
      comment.score = comment.score - 1;
    }
    this.commentService.EditComment(comment);
  }
}
