import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {CoreStoreModule} from './store/index';
import {SDKBrowserModule} from "./sdk/index";
import {NewsEffects} from "./effects/news.effects";
import {EventsEffects} from "./effects/events.effects";
import {Homeffects} from "./effects/home.effects";
import {CORE_PIPES} from "./pipes/index";


@NgModule({
  imports: [
    SDKBrowserModule.forRoot(),
    CoreStoreModule,
    EffectsModule.run(NewsEffects),
    EffectsModule.run(EventsEffects),
    EffectsModule.run(Homeffects)
  ],
  declarations: [
    ...CORE_PIPES
  ],
  exports: [
    CoreStoreModule,
    ...CORE_PIPES
  ],
  providers: [
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {

  }
}
