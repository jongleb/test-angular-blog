import { Action } from '@ngrx/store';
import {type} from '../../utils/ngrx-action.util';

export const ActionTypes = {
  TOOGLE: type('[Modal] Update Filter And Fetch'),
};

export class ToogleModalAction implements Action {
  type = ActionTypes.TOOGLE;
  constructor(public payload: {data?: any; type: string, showed: boolean}){}
}

export type Actions = ToogleModalAction;
