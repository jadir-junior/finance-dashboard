import { Component, Input } from '@angular/core';

@Component({
  selector: 'fin-fab-button',
  template: `
    <button
      [ngClass]="{
        'primary': color === 'primary',
        'default': color === 'default',
        'round': shape === 'round',
        'chat': shape === 'chat',
        'size-small': size === 'small',
        'size-default': size === 'default',
        'size-large': size === 'large'
      }"
    >
      <span class="material-icons-outlined">{{ icon }}</span>
    </button>
  `,
  styles: [
    `
      @mixin theme($theme, $color, $alphaBoxShadow, $alphaBackground: 0.9) {
        color: $color;
        box-shadow: 0px 16px 20px -6px rgba($theme, $alphaBoxShadow);
        background-color: $theme;

        &:hover {
          background-color: rgba($theme, $alphaBackground);
        }
      }

      button {
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
      }

      .default {
        @include theme($theme: #fefeff, $color: black, $alphaBoxShadow: 0.2);
      }

      .primary {
        @include theme($theme: #623ce7, $color: white, $alphaBoxShadow: 0.47);
      }

      .round {
        border-radius: 16px;
      }

      .chat {
        border-radius: 0 16px 16px 16px;
      }

      .size-small {
        padding: 12px;
      }

      .size-default {
        padding: 16px;
      }

      .size-large {
        padding: 20px;
      }
    `,
  ],
})
export class FabButtonComponent {
  @Input() icon!: string;
  @Input() color: 'default' | 'primary' = 'default';
  @Input() shape: 'round' | 'chat' = 'round';
  @Input() size: 'small' | 'default' | 'large' = 'default';
}
