import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NewsModule} from "./news/index";
import {HomeModule} from "./home/index";
import {RouterModule} from "@angular/router";
import {CoreModule} from "./core/index";
import {APP_CORE_MODULES} from "./core/components/index";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NewsModule,
    HomeModule,
    CoreModule,
    RouterModule.forRoot([]),
    ...APP_CORE_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
