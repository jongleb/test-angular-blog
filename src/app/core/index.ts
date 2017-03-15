import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {CoreStoreModule} from './store/index';


@NgModule({
  imports: [
    CoreStoreModule,
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
