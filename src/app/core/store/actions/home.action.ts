import { Action } from '@ngrx/store';
import {type} from '../../utils/ngrx-action.util';


export const ActionTypes = {
  FETCH_ALL_DATA: type('[Home] Fetch All Data For Home')
};

export class FetchAllDataAction implements Action {
  type = ActionTypes.FETCH_ALL_DATA;
}
