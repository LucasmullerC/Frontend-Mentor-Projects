import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { ReplyItemComponent } from './reply-item/reply-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentItemComponent,
    ReplyItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
