import { Component } from '@angular/core';

@Component({
  selector: 'fin-avatar',
  template: `
    <div class="avatar">
      <img src="assets/imgs/avatar-shakir.png" alt="" />
    </div>
  `,
  styles: [
    `
      .avatar {
        width: 52px;
        height: 52px;
        border-radius: 50%;
        transform: rotate(-45deg);
      }

      .avatar img {
        width: 100%;
      }
    `,
  ],
})
export class AvatarComponent {}
