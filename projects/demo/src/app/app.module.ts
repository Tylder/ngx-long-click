import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TestLibModule} from 'test-lib123123';
// import {NgxLongClickModule} from 'ngx-long-click';
// import {NgxLongClickModule} from '../../../ngx-long-click/src/lib/ngx-long-click.module';
// import {NgxLongClickModule} from 'ngx-long-click';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestLibModule,
    // NgxLongClickModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
