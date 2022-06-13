import { Component, Input } from '@angular/core';

import { IBill } from 'src/app/services/bills/bills.service';

@Component({
  selector: 'fin-bill-item',
  template: `
    <fin-item>
      <fin-icon [icon]="bill.icon" [backgroundColor]="bill.color"></fin-icon>
      <div class="wrapper-description-and-status">
        <div class="description">{{ bill.description }}</div>
        <div class="status" *ngIf="bill.status">
          {{ bill.status | titlecase }}
        </div>
      </div>
      <div
        end
        class="money"
        [ngStyle]="{
          'color': bill.modality === 'DEBIT' ? '#FF4267' : '#3629B7'
        }"
      >
        <span>{{ bill.modality === 'DEBIT' ? '+' : '-' }}</span>
        <span><span>$</span>{{ bill.value }}</span>
      </div>
    </fin-item>
  `,
  styles: [
    `
      .wrapper-description-and-status {
        display: flex;
        flex-direction: column;
        margin-bottom: auto;
        margin-left: 8px;
      }

      .description {
        font-size: 16px;
        color: #343434;
      }

      .status {
        font-size: 12px;
        color: #989898;
      }

      .money {
        font-size: 16px;
        font-family: 'Tomorrow';
        display: flex;
        margin-bottom: auto;
      }
    `,
  ],
})
export class BillItemComponent {
  @Input() bill!: IBill;
}
