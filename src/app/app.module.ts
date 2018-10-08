import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { ProducerComponent } from './producer/producer.component';
@NgModule({
  declarations: [
    AppComponent,
    UpgradeComponent,
    ProducerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
