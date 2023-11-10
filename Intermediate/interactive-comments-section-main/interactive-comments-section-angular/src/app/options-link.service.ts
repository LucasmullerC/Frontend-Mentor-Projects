import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class OptionsLinkService {
  editBox: { [commentId: number]: boolean } = {};
  replyBoxes: { [commentId: number]: boolean } = {};

  public editBoxSubject = new Subject<{ [commentId: number]: boolean }>();
  public replyBoxesSubject= new Subject<{ [commentId: number]: boolean }>();

  constructor() { }

  toggleReplyBox(commentId: number) {
    this.replyBoxes[commentId] = !this.replyBoxes[commentId];
    this.replyBoxesSubject.next(this.replyBoxes);
  }

  toggleEditBox(comment: any) {
    this.editBox[comment.id] = !this.editBox[comment.id];
    this.editBoxSubject.next(this.editBox);
  }
}
