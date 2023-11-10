import { Component,Input} from '@angular/core';
import { OptionsLinkService } from '../options-link.service';


@Component({
  selector: 'app-options-comment',
  templateUrl: './options-comment.component.html',
  styleUrls: ['./options-comment.component.scss']
})
export class OptionsCommentComponent {
  @Input() comment: any;
  @Input() currentUser: any;

  deleteBoxes: { [commentId: number]: boolean } = {};

  constructor(private OptionsService: OptionsLinkService) { 
  }

  toggleDeleteBox(commentId: number) {
    this.deleteBoxes[commentId] = !this.deleteBoxes[commentId];
  }

  setEditbox(comment: any){
    this.OptionsService.toggleEditBox(comment);
  }
  
  setReplybox(commentId: number){
    this.OptionsService.toggleReplyBox(commentId);
  }
  
}
