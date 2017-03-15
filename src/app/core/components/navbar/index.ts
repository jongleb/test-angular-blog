import { NgModule } from '@angular/core';
import {NavbarComponent} from "./navbar.component";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  imports: [RouterModule, BrowserModule],
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
  providers: [],
})
export class NavbarModule { }
