import { NgModule } from '@angular/core';

import {routing} from './news.routing';
import {NewsComponent} from "./news.component";
import {SimpleListModule} from "../core/components/simple-list/index";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  imports: [
    routing,
    BrowserModule,
    SimpleListModule
  ],
  declarations: [
    NewsComponent
  ],
  exports: [
    NewsComponent
  ],
  providers: []
})
export class NewsModule { }
