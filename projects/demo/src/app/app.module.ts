import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NgxLongClickModule} from 'ngx-long-click';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxLongClickModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
