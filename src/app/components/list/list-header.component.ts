import { Component } from '@angular/core';

@Component({
  selector: 'fin-list-header',
  template: `
    <div class="wrapper-list-header"><ng-content></ng-content></div>
  `,
  styles: [
    `
      .wrapper-list-header {
        font-size: 12px;
        color: #979797;
        margin: 8px 0;
      }
    `,
  ],
})
export class ListHeaderComponent {}
