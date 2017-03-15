import { NgModule } from '@angular/core';

import {routing} from './news.routing';
import {NewsComponent} from "./news.component";


@NgModule({
  imports: [
    routing
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
