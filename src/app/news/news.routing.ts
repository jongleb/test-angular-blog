import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NewsComponent} from "./news.component";



export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'news', component: NewsComponent }
]);
