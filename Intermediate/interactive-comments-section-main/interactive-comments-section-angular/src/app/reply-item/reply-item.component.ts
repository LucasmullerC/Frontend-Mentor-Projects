import { Component } from '@angular/core';

@Component({
  selector: 'app-reply-item',
  templateUrl: './reply-item.component.html',
  styleUrls: ['./reply-item.component.scss']
})
export class ReplyItemComponent {
  currentUser: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem("dataJson") || '{}')[0].image.png;
  }
}
