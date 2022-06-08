import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

export interface IUser {
  name: string;
  createdAt: Date;
  photo: string;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  user$ = this.getMe();

  getMe(): Observable<IUser> {
    return of({
      name: 'AR Shakir',
      createdAt: new Date(),
      photo: 'assets/imgs/avatar-shakir.png',
    });
  }
}
