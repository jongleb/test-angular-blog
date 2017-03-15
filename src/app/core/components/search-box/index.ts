import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {SearchBoxComponent} from "./search-box.component";


@NgModule({
  imports: [BrowserModule, FormsModule],
  exports: [SearchBoxComponent],
  declarations: [SearchBoxComponent],
  providers: [],
})
export class SearchBoxModule { }
