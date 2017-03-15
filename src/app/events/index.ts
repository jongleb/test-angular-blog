import { NgModule } from '@angular/core';

import {routing} from './events.routing';
import {EventsComponent} from "./events.component";


@NgModule({
  imports: [
    routing
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
