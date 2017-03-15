import { NgModule } from '@angular/core';
import {SimpleListComponent, BodyContentComponent} from "./simple-list.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";


@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [
    SimpleListComponent,
    BodyContentComponent
  ],
  declarations: [
    SimpleListComponent,
    BodyContentComponent
  ],
  providers: [],
})
export class SimpleListModule { }
