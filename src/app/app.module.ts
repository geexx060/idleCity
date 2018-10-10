import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { ProducerComponent } from './producer/producer.component';
import { SaveLoadComponent } from './save-load/save-load.component';

@NgModule({
  declarations: [
    AppComponent,
    UpgradeComponent,
    ProducerComponent,
    SaveLoadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProducerComponent,
    SaveLoadComponent,
    UpgradeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
