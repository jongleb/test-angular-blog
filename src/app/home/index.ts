import { NgModule } from '@angular/core';

import {routing} from './home.routing';
import {HomeComponent} from "./home.component";


@NgModule({
  imports: [
    routing
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule { }
