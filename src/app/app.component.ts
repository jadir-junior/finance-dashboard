import { Component } from '@angular/core';
import { UsersService } from './services/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  user$ = this.usersService.user$;

  constructor(private usersService: UsersService) {}
}
