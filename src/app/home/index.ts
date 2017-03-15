import { NgModule } from '@angular/core';

import {routing} from './home.routing';
import {HomeComponent} from "./home.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [
    routing,
    BrowserModule,
    CommonModule
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
