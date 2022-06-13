import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from './components/components.module';
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { TimeagoModule } from 'ngx-timeago';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    NgChartsModule,
    TimeagoModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
