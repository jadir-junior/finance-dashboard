import { Component, Input } from '@angular/core';

@Component({
  selector: 'fin-icon-button',
  template: `
    <button>
      <span
        class="material-icons-outlined"
        [ngStyle]="{ 'font-size': iconWidth + 'px' }"
      >
        {{ icon }}
      </span>
    </button>
  `,
  styles: [
    `
      button {
        border: none;
        background-color: transparent;
        cursor: pointer;

        &:hover {
          color: rgba(0, 0, 0, 0.8);
        }
      }
    `,
  ],
})
export class IconButtonComponent {
  @Input() icon!: string;
  @Input() iconWidth: number = 24;
}
