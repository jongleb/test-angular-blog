import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {Observable} from 'rxjs';


import { normalize } from 'normalizr';
import {issuesSchema, repositoriesSchema} from '../constants/schemas';
import {State} from '../store';

@Injectable()
export class NewsEffects {
  constructor(
    private actions$: Actions,
    private store: Store<State>,
  ) {}


}
