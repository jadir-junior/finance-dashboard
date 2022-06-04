import { Component, Input } from '@angular/core';

import { hexToRgba } from 'src/app/utils/hex-to-rgba/hex-to-rgba';

@Component({
  selector: 'fin-icon-identifier',
  template: `<div
    class="wrapper"
    [ngStyle]="{
      'background-color': backgroundColor,
      'color': color
    }"
  >
    <span *ngIf="icon" class="material-icons-outlined">{{ icon }}</span>
  </div>`,
  styles: [
    `
      .wrapper {
        width: 52px;
        height: 52px;
        background-color: #ddd;
        color: #aaa;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export class IconIdentifierComponent {
  @Input() icon!: string;
  @Input() color!: string;

  get backgroundColor(): string {
    return hexToRgba(this.color, '0.2');
  }
}
