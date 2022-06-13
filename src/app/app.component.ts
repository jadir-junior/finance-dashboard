import { BillsService } from './services/bills/bills.service';
import { Component } from '@angular/core';
import { UsersService } from './services/users/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  user$ = this.usersService.user$;
  bills$ = this.billsService.bills$;

  constructor(
    private usersService: UsersService,
    private billsService: BillsService
  ) {}
}
