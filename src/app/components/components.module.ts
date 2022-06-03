import { AsideBarComponent } from './aside-bar/aside-bar.component';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AsideBarComponent, LogoComponent],
  imports: [CommonModule],
  exports: [AsideBarComponent, LogoComponent],
})
export class ComponentsModule {}
