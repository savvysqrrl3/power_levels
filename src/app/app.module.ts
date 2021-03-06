import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PowerComponent } from './power/power.component';
import { IndividualPowerComponent } from './power/individual-power/individual-power.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerComponent,
    IndividualPowerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
