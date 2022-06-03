import { AsideBarComponent } from './aside-bar/aside-bar.component';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { LogoComponent } from './logo/logo.component';
import { NgModule } from '@angular/core';
import { AsideGroupMenuComponent } from './aside-group-menu/aside-group-menu.component';
import { FabButtonComponent } from './fab-button/fab-button.component';

@NgModule({
  declarations: [AsideBarComponent, LogoComponent, AsideGroupMenuComponent, FabButtonComponent],
  imports: [CommonModule, IconsModule],
  exports: [AsideBarComponent, LogoComponent],
})
export class ComponentsModule {}
