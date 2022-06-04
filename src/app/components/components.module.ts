import { AsideBarComponent } from './aside-bar/aside-bar.component';
import { AsideGroupMenuComponent } from './aside-group-menu/aside-group-menu.component';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { CommonModule } from '@angular/common';
import { FabButtonComponent } from './fab-button/fab-button.component';
import { IconsModule } from '../icons/icons.module';
import { LogoComponent } from './logo/logo.component';
import { NgModule } from '@angular/core';
import { UserMinimalInfosComponent } from './user-minimal-infos/user-minimal-infos.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { IconIdentifierComponent } from './icon-identifier/icon-identifier.component';
import { LabelComponent } from './label/label.component';

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
  ],
  imports: [CommonModule, IconsModule],
  exports: [AsideBarComponent, AsideMenuComponent],
})
export class ComponentsModule {}
