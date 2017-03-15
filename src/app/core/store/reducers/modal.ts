import * as modal from '../actions/modal.action';


export interface ModalState {
  data: any;
  type: string;
  showed: boolean;
}

const initialState: ModalState = {
  data: null,
  type: null,
  showed: false
};

export function modalReducer(state = initialState, action): ModalState {
  console.log(action.payload);
  if (action.type === modal.ActionTypes.TOOGLE){
    return Object.assign({}, state, action.payload)
  }
  return state;
}

