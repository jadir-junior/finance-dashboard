import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

export interface IBill {
  date: Date;
  type: 'WATER' | 'SALARY' | 'ELECTRIC' | 'TRANSFER' | 'INTERNET';
  description: string;
  status: 'UNSUCCESSFULLY' | 'SUCCESSFULLY' | null;
  modality: 'DEBIT' | 'CREDIT';
  value: number;
}

const bills: IBill[] = [
  {
    date: new Date(),
    type: 'WATER',
    description: 'Water Bill',
    status: 'UNSUCCESSFULLY',
    modality: 'DEBIT',
    value: 280,
  },
  {
    date: new Date(),
    type: 'SALARY',
    description: 'Income: Salary Oct',
    status: null,
    modality: 'CREDIT',
    value: 1200,
  },
  {
    date: new Date(),
    type: 'ELECTRIC',
    description: 'Electric Bill',
    status: 'SUCCESSFULLY',
    modality: 'DEBIT',
    value: 480,
  },
  {
    date: new Date(),
    type: 'TRANSFER',
    description: 'Income: Jane transfers',
    status: null,
    modality: 'CREDIT',
    value: 500,
  },
  {
    date: new Date(),
    type: 'INTERNET',
    description: 'Internet Bill',
    status: 'SUCCESSFULLY',
    modality: 'DEBIT',
    value: 100,
  },
];

@Injectable({
  providedIn: 'root',
})
export class BillsService {
  bills$: Observable<IBill[]> = this.getBills();

  getBills(): Observable<IBill[]> {
    return of(bills);
  }
}
