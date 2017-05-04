import { Component, OnInit } from '@angular/core';
import { Notification } from '../shared/models/notification';
import { NotificationService } from '../shared/services/notification.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  notificationsLength;
  constructor(private service: NotificationService) {}
  ngOnInit() {
    this.notificationsLength = this.service.length;
  }
}
