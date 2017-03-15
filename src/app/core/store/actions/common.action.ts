import { Action } from '@ngrx/store';
import {type} from '../../utils/ngrx-action.util';

export const ActionTypes = {
   TO_INITIAL: type('[Common] Update Filter And Fetch')
};

export class ToInitialAction implements Action {
  type = ActionTypes.TO_INITIAL;
}

export type Actions = ToInitialAction;
