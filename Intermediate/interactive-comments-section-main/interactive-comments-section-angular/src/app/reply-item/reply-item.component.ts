import { Component, Input } from '@angular/core';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-reply-item',
  templateUrl: './reply-item.component.html',
  styleUrls: ['./reply-item.component.scss']
})
export class ReplyItemComponent {
  @Input() comment: any;
  @Input() reply: boolean = false;

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

  checkType(){
    if(this.reply === true){
      this.addReply();
    }
    else{
      this.makeComment();
    }
  }

  makeComment() {
    const currentDataJson = JSON.parse(localStorage.getItem("dataJson") || '{}');
    const totalComments = currentDataJson[1].reduce((total: number, comment: { replies: string | any[]; }) => total + 1 + comment.replies.length, 0);

    const newComment = {
      id: totalComments + 1,
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

    this.commentService.sendComment(newComment,{},this.reply);
    this.textareaContent = '';

    window.location.reload();
  }

  addReply() {
    const currentDataJson = JSON.parse(localStorage.getItem("dataJson") || '{}');
    const totalComments = currentDataJson[1].reduce((total: number, comment: { replies: string | any[]; }) => total + 1 + comment.replies.length, 0);
    const newReply = {
      id: totalComments + 1,
      content: this.textareaContent,
      createdAt: 'Now',
      score: 0,
      replyingTo: this.comment.user.username,
      user: {
        image: {
          png: this.userImage,
          webp: this.currentUser[0].image.webp
        },
        username: currentDataJson[0].username
      }
    };
  
    this.commentService.sendComment(newReply,this.comment,this.reply);
    this.textareaContent = '';

    window.location.reload();
  }
  
}


