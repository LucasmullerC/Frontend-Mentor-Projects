import { Component, Input } from '@angular/core';
import { CommentService } from '../comment.service';
import { OptionsLinkService } from '../options-link.service';
import { Subscription } from 'rxjs/internal/Subscription';

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
  subscription: Subscription = new Subscription;

  constructor(private commentService: CommentService, private OptionsService: OptionsLinkService) { 
  }

  ngOnInit(): void {
    this.dataJson = JSON.parse(localStorage.getItem("dataJson") || '{}');
    this.currentUser = this.dataJson[0].username;

    //Listening to editbox visibility change
    this.subscription = this.OptionsService.editBoxSubject.subscribe((editBox: { [commentId: number]: boolean }) => {
      this.editedContent = (this.comment.replyingTo != null ? ('@' + this.comment.replyingTo) : '') + ' ' + this.comment.content;
      this.editBox[this.comment.id] = editBox[this.comment.id];
   });

   //Listening to replybox visibility change
   this.subscription = this.OptionsService.replyBoxesSubject.subscribe((replyBoxes: { [commentId: number]: boolean }) => {
    this.replyBoxes[this.comment.id] = replyBoxes[this.comment.id];
   });
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
}
