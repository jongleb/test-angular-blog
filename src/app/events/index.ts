import { NgModule } from '@angular/core';

import {routing} from './events.routing';
import {EventsComponent} from "./events.component";
import {BrowserModule} from "@angular/platform-browser";
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

@NgModule({
  imports: [
    routing,
    BrowserModule,
    InfiniteScrollModule
  ],
  declarations: [
    EventsComponent
  ],
  exports: [
    EventsComponent
  ],
  providers: []
})
export class EventsModule { }
