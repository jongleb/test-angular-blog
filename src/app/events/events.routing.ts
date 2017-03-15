import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import {EventsComponent} from "./events.component";



export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'events', component: EventsComponent }
]);
