import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SchaduleModule } from './schedule/schedule.module';

@NgModule({
  imports: [BrowserModule, FormsModule, SchaduleModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
