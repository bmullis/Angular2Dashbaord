import { Injectable } from '@angular/core';
import { Notification } from '../models/notification';

const notificationsPromise: Promise<Notification[]> = Promise.resolve([
  {
    alert: 'Heads Up!',
    message: 'This alert needs your attention, but its not super important.',
    read: true
  }
]);

@Injectable()
export class NotificationService {
  length = 4;
  // get all users
  getNotifications() {
    return notificationsPromise;
  }
  subtractNotification() {
      this.length--;
  }

}
