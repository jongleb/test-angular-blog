import { NgModule } from '@angular/core';
import {MastheadComponent} from "./masthead.component";
import {NavbarModule} from "../navbar/index";


@NgModule({
  imports: [NavbarModule],
  exports: [MastheadComponent],
  declarations: [MastheadComponent],
  providers: [],
})
export class MastheadModule { }
