import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reply-item',
  templateUrl: './reply-item.component.html',
  styleUrls: ['./reply-item.component.scss']
})
export class ReplyItemComponent {
  currentUser: any[] = [];

  constructor() { }

  @Input() type: String = 'REPLY';

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem("dataJson") || '{}')[0].image.png;
  }
}
