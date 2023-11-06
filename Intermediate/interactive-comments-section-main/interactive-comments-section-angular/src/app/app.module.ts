import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { ReplyItemComponent } from './reply-item/reply-item.component';
import { DeleteCommentComponent } from './delete-comment/delete-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentItemComponent,
    ReplyItemComponent,
    DeleteCommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
