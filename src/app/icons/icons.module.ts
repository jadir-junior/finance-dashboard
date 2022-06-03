import { BoxComponent } from './box/box.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { StarComponent } from './star/star.component';
import { TrashComponent } from './trash/trash.component';

@NgModule({
  declarations: [
    BoxComponent,
    StarComponent,
    CalendarComponent,
    InventoryComponent,
    TrashComponent,
    ListComponent,
  ],
  imports: [CommonModule],
  exports: [
    BoxComponent,
    StarComponent,
    CalendarComponent,
    InventoryComponent,
    TrashComponent,
    ListComponent,
  ],
})
export class IconsModule {}
