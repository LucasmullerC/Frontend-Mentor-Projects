import { Component, Input } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-delete-comment',
  templateUrl: './delete-comment.component.html',
  styleUrls: ['./delete-comment.component.scss']
})
export class DeleteCommentComponent {
  @Input() comment: any;
  isComponentVisible: boolean = true; 

  constructor(private commentService: CommentService) { }

  cancelDelete() {
    this.isComponentVisible = false;
  }

  deleteComment(){
    this.commentService.DeleteCommentComponent(this.comment);
    window.location.reload();
  }
}
