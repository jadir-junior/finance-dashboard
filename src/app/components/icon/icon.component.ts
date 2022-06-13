import { Component, Input } from '@angular/core';

@Component({
  selector: 'fin-icon',
  template: `
    <div
      class="wrapper-icon"
      [ngStyle]="{
        'background-color': backgroundColor,
        'color': backgroundColor === 'white' ? 'black' : 'white'
      }"
    >
      <span class="material-icons-outlined">{{ icon }}</span>
    </div>
  `,
  styles: [
    `
      .wrapper-icon {
        padding: 8px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
})
export class IconComponent {
  @Input() icon!: string;
  @Input() backgroundColor = 'white';
}
