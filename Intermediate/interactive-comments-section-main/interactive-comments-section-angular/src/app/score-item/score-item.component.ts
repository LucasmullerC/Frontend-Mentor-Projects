import { Component,Input } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-score-item',
  templateUrl: './score-item.component.html',
  styleUrls: ['./score-item.component.scss']
})
export class ScoreItemComponent {
  @Input() comment: any;

  constructor(private commentService: CommentService) { }

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
