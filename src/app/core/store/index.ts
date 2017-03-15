import { createSelector } from 'reselect';

import {ActionReducer, StoreModule} from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

import { environment } from '../../../environments/environment';


import { storeFreeze } from 'ngrx-store-freeze';

import {NgModule} from '@angular/core';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import * as fromEntities from './reducers/entities';

import {mapCollectionToArrayKeys} from '../utils/reducer-util';

export interface State {
  entities: fromEntities.EntitiesState
}

const reducers = {
  entities: fromEntities.entitiesReducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (environment.production) {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}

@NgModule({
  imports: [
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  declarations: [],
  exports: [],
  providers: []
})
export class CoreStoreModule {}

export const getState = (state: State) => state;
export const getEntitiesState = (state: State) => state.entities;

