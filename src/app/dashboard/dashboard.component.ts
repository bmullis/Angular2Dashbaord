import { Component, OnInit } from '@angular/core';
import { Notification } from '../shared/models/notification';
import { NotificationService } from '../shared/services/notification.service';
var Chartist = require('chartist');

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  notifications: Notification[];
  constructor(private service: NotificationService) {}
  data = {
      // A labels array that can contain any sort of values
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      // Our series array that contains series objects or in this case series data arrays
      series: [
        [5, 2, 4, 2, 0.5, 3]
      ]
    }
// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.

  ngOnInit() {
    this.service.getNotifications().then(notifications => this.notifications = notifications);
    new Chartist.Line('.ct-chart', this.data, { showArea: true } );
    new Chartist.Pie('.ct-chart-pie',
    {
      series: [{
          value: 20,
          className: 'pieSliceOne'
      },
      {
          value: 10,
          className: 'pieSliceTwo'
      },
      {
          value: 30,
          className: 'pieSliceThree'
      },
      {
          value: 40,
          className: 'pieSliceFour'
      }]
  },
  {
      donut: true,
      donutWidth: 60,
      donutSolid: true,
      startAngle: 270,
      showLabel: true
    });
  }
  closeNotification(notification) {
    notification.read = false;
    this.service.subtractNotification();
  }
}
