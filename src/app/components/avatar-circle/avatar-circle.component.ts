import { Component } from '@angular/core';

@Component({
  selector: 'fin-avatar-circle',
  template: `
    <div class="box-shadow-circle">
      <div class="wrapper-circle">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      .box-shadow-circle {
        box-shadow: 0px 16px 20px -6px rgba(252, 107, 33, 0.47);
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }

      .wrapper-circle {
        width: 60px;
        height: 60px;
        border: 6px solid #fc6b21;
        display: flex;
        border-left-color: transparent;
        transform: rotate(45deg);
        justify-content: center;
        align-items: center;
        border-radius: 50%;
      }
    `,
  ],
})
export class AvatarCircleComponent {}
