import { Component, Input } from '@angular/core';

import { IUser } from 'src/app/services/users/users.service';

interface IMenuItem {
  icon: string;
  color: string;
  label: string;
}
@Component({
  selector: 'fin-aside-menu',
  templateUrl: './aside-menu.component.html',
  styles: [
    `
      :host {
        width: 316px;
        background-color: #f6f7fc;
        padding: 46px 32px;
      }
    `,
  ],
})
export class AsideMenuComponent {
  menuItems: IMenuItem[] = [
    {
      icon: 'adjust',
      color: '#FC6B21',
      label: 'Goals',
    },
    {
      icon: 'calendar_today',
      color: '#5531FB',
      label: 'Monthly Plan',
    },
    {
      icon: 'settings',
      color: '#1FB9FC',
      label: 'Settings',
    },
  ];

  @Input() user!: IUser | null;
}
