import { Component } from '@angular/core';

@Component({
  selector: 'fin-list',
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        margin: 24px;
      }

      fin-item {
        margin: 16px 0;
      }
    `,
  ],
})
export class ListComponent {}
