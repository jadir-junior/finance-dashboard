import {
  Component,
  EventEmitter,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';

import { DropdownPanel } from './dropdown-panel';

@Component({
  selector: 'fin-dropdown',
  template: `
    <ng-template>
      <div (click)="closed.emit()" class="dropdown-content">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
  styles: [
    `
      .dropdown-content {
        width: 14rem;
        padding: 0.5rem;
        background-color: white;
        border-radius: 6px;
        box-shadow: 0 10px 20px rgba(64, 64, 64, 0.15);
      }
    `,
  ],
})
export class DropdownComponent implements DropdownPanel {
  @ViewChild(TemplateRef) templateRef!: TemplateRef<any>;
  @Output() closed = new EventEmitter<void>();
}
