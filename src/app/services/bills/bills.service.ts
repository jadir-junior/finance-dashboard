import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

export interface IBill {
  date: Date;
  type: 'WATER' | 'SALARY' | 'ELECTRIC' | 'TRANSFER' | 'INTERNET';
  description: string;
  status: 'UNSUCCESSFULLY' | 'SUCCESSFULLY' | null;
  modality: 'DEBIT' | 'CREDIT';
  value: number;
  color: string;
  icon: string;
}

const bills: IBill[] = [
  {
    date: new Date(),
    type: 'WATER',
    description: 'Water Bill',
    status: 'UNSUCCESSFULLY',
    modality: 'DEBIT',
    value: 280,
    color: '#3629B7',
    icon: 'water_drop',
  },
  {
    date: new Date(),
    type: 'SALARY',
    description: 'Income: Salary Oct',
    status: null,
    modality: 'CREDIT',
    value: 1200,
    color: '#FF4267',
    icon: 'credit_card',
  },
  {
    date: new Date(),
    type: 'ELECTRIC',
    description: 'Electric Bill',
    status: 'SUCCESSFULLY',
    modality: 'DEBIT',
    value: 480,
    color: '#0890FE',
    icon: 'power',
  },
  {
    date: new Date(),
    type: 'TRANSFER',
    description: 'Income: Jane transfers',
    status: null,
    modality: 'CREDIT',
    value: 500,
    color: '#FFAF2A',
    icon: 'payments',
  },
  {
    date: new Date(),
    type: 'INTERNET',
    description: 'Internet Bill',
    status: 'SUCCESSFULLY',
    modality: 'DEBIT',
    value: 100,
    color: '#52D5BA',
    icon: 'wifi',
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
