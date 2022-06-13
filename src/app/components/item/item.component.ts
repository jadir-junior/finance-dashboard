import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'fin-item',
  template: `
    <div class="wrapper-item">
      <div class="wrapper-start">
        <ng-content select="[start]"></ng-content>
        <ng-content></ng-content>
      </div>
      <div class="wrapper-end">
        <ng-content select="[end]"></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      .wrapper-item {
        display: flex;
        margin: 16px 0;
      }

      .wrapper-start {
        display: flex;
        align-items: center;
      }

      .wrapper-end {
        display: flex;
        align-items: center;
        margin-left: auto;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class ItemComponent {}
