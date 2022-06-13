import { Component } from '@angular/core';

@Component({
  selector: 'fin-list',
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        margin: 24px;
      }
    `,
  ],
})
export class ListComponent {}
