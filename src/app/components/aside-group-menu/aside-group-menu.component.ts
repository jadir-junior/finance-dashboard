import { Component } from '@angular/core';

@Component({
  selector: 'fin-aside-group-menu',
  template: `
    <div>
      <fin-icon-box></fin-icon-box>
    </div>
    <div><fin-icon-star></fin-icon-star></div>
    <div><fin-icon-calendar></fin-icon-calendar></div>
    <div><fin-icon-list></fin-icon-list></div>
    <div><fin-icon-inventory></fin-icon-inventory></div>
    <div><fin-icon-trash></fin-icon-trash></div>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        flex-direction: column;
      }

      :host > div {
        margin: 16px;
        display: flex;
        justify-content: center;
      }
    `,
  ],
})
export class AsideGroupMenuComponent {}
