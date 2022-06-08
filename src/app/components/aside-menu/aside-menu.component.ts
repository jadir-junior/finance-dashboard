import { Component, Input } from '@angular/core';

import { IUser } from 'src/app/services/users/users.service';

@Component({
  selector: 'fin-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
})
export class AsideMenuComponent {
  @Input() user!: IUser | null;
}
