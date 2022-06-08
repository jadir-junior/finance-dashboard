import { AsideBarComponent } from './aside-bar/aside-bar.component';
import { AsideGroupMenuComponent } from './aside-group-menu/aside-group-menu.component';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { AvatarCircleComponent } from './avatar-circle/avatar-circle.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { CommonModule } from '@angular/common';
import { FabButtonComponent } from './fab-button/fab-button.component';
import { IconIdentifierComponent } from './icon-identifier/icon-identifier.component';
import { IconsModule } from '../icons/icons.module';
import { ItemComponent } from './item/item.component';
import { LabelComponent } from './label/label.component';
import { ListComponent } from './list/list.component';
import { LogoComponent } from './logo/logo.component';
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { TimeagoModule } from 'ngx-timeago';
import { UserMinimalInfosComponent } from './user-minimal-infos/user-minimal-infos.component';
import { ListHeaderComponent } from './list/list-header.component';

@NgModule({
  declarations: [
    AsideBarComponent,
    LogoComponent,
    AsideGroupMenuComponent,
    FabButtonComponent,
    AsideMenuComponent,
    UserMinimalInfosComponent,
    AvatarComponent,
    ListComponent,
    ItemComponent,
    IconIdentifierComponent,
    LabelComponent,
    BarChartComponent,
    AvatarCircleComponent,
    ListHeaderComponent,
  ],
  imports: [CommonModule, IconsModule, NgChartsModule, TimeagoModule],
  exports: [AsideBarComponent, AsideMenuComponent],
})
export class ComponentsModule {}
