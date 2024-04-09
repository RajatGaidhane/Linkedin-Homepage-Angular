import { Component } from '@angular/core';

@Component({
  selector: 'app-left-pane',
  templateUrl: './left-pane.component.html',
  styleUrls: ['./left-pane.component.scss']
})
export class LeftPaneComponent {
  profileData = [
    {
      title: 'Profile viewers',
      count: 73
    },
    {
      title: 'Connections',
      count: 149
    }
  ];
  recentToggle = false;
}
