import { Component, Input } from '@angular/core';

@Component({
  selector: 'fin-label',
  template: `
    <p
      [ngClass]="{
        'size-small': size === 'small',
        'size-default': size === 'default',
        'size-large': size === 'large',
        'color-default': color === 'default',
        'color-gray': color === 'gray'
      }"
    >
      <ng-content></ng-content>
    </p>
  `,
  styles: [
    `
      .size-small {
        font-size: 12px;
      }

      .size-default {
        font-size: 16px;
      }

      .size-large {
        font-size: 20px;
      }

      .color-default {
        color: black;
      }

      .color-gray {
        color: #555;
      }
    `,
  ],
})
export class LabelComponent {
  @Input() size: 'small' | 'default' | 'large' = 'default';
  @Input() color: 'default' | 'gray' = 'default';
}
