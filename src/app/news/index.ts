import { NgModule } from '@angular/core';

import {routing} from './news.routing';
import {NewsComponent} from "./news.component";
import {SimpleListModule} from "../core/components/simple-list/index";
import {BrowserModule} from "@angular/platform-browser";
import {SearchBoxModule} from "../core/components/search-box/index";
import {CoreModule} from "../core/index";

import {ModalModule} from "ngx-modal";

@NgModule({
  imports: [
    routing,
    CoreModule,
    BrowserModule,
    SearchBoxModule,
    ModalModule,
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
