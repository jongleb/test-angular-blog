import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {CoreStoreModule} from './store/index';
import {SDKBrowserModule} from "./sdk/index";
import {NewsEffects} from "./effects/news.effects";
import {EventsEffects} from "./effects/events.effects";


@NgModule({
  imports: [
    SDKBrowserModule.forRoot(),
    CoreStoreModule,
    EffectsModule.run(NewsEffects),
    EffectsModule.run(EventsEffects)
  ],
  declarations: [
  ],
  exports: [
    CoreStoreModule
  ],
  providers: [
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {

  }
}
