import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  navBarItems = [
    {
      id: 'home',
      name: 'Home',
      icon: 'fa-house-chimney'
    },
    {
      id: 'network',
      name: 'My Network',
      icon: 'fa-user-group'
    },
    {
      id: 'jobs',
      name: 'Jobs',
      icon: 'fa-suitcase'
    },
    {
      id: 'messaging',
      name: 'Messaging',
      icon: 'fa-comment'
    },
    {
      id: 'notification',
      name: 'Notification',
      icon: 'fa-bell'
    },
    {
      id: 'user',
      name: 'Me',
      icon: 'fa-user'
    }
  ];
  selectedMenuItem = 'home';

}
