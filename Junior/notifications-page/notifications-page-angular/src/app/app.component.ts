import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'notifications-page-angular';

  notifications: any[] = [];
  numNotifications: number = 0;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.getNotifications()
      .subscribe((data: any[]) => {
        this.notifications = data;

        this.numNotifications = this.notifications.filter(notification => notification.viewed === 'notViewed').length;
      });
  }
}
