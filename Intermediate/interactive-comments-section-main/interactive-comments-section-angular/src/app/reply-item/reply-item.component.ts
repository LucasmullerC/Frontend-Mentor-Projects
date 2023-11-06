import { Component, Input } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-reply-item',
  templateUrl: './reply-item.component.html',
  styleUrls: ['./reply-item.component.scss']
})
export class ReplyItemComponent {
  currentUser: any[] = [];
  userImage: any;
  textareaContent: string = '';

  constructor(private commentService: CommentService) { }

  @Input() type: String = 'REPLY';

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem("dataJson") || '{}');

    if(this.currentUser[0] == null){
      window.location.reload();
    }
    else{
      this.userImage = this.currentUser[0].image.png;
    }


  }

  makeComment() {
    const currentDataJson = JSON.parse(localStorage.getItem("dataJson") || '{}');

    const newComment = {
      id: currentDataJson[1].length + 1,
      content: this.textareaContent,
      createdAt: 'Now',
      score: 0,
      user: {
        image: {
          png: this.userImage,
          webp: this.currentUser[0].image.webp
        },
        username: currentDataJson[0].username
      },
      replies: []
    };

    this.commentService.sendComment(newComment);
    this.textareaContent = '';

    window.location.reload();
  }
}
