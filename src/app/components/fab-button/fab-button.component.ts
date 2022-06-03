import { Component } from '@angular/core';

@Component({
  selector: 'fin-fab-button',
  template: ` <button></button> `,
  styles: [
    `
      button {
        padding: 24px;
        border: none;
        background-color: #623ce7;
        color: white;
        border-radius: 0 16px 16px 16px;
        box-shadow: 0px 16px 20px -6px rgba(98, 60, 231, 0.47);
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;

        &:hover {
          background-color: rgba(98, 60, 231, 0.9);
        }
      }
    `,
  ],
})
export class FabButtonComponent {}
