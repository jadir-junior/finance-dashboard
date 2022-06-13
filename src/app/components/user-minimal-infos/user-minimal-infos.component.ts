import { Component, Input } from '@angular/core';

@Component({
  selector: 'fin-user-minimal-infos',
  template: `
    <div style="display: flex; align-items: center">
      <fin-avatar-circle>
        <fin-avatar [name]="name" [photo]="photo"></fin-avatar>
      </fin-avatar-circle>

      <div style="margin-left: 24px">
        <h2 style="font-weight: 500; font-size: 20px">{{ name }}</h2>
        <p style="font-size: 14px; color: #aaa">
          Joined <span>{{ createdAt | timeago }}</span>
        </p>
      </div>
    </div>
  `,
})
export class UserMinimalInfosComponent {
  @Input() name!: string;
  @Input() createdAt!: Date;
  @Input() photo!: string;
}
