import { handleActions } from 'redux-actions';
import { Actions } from './actionTypes';
import { IInitialState } from './interface';

export const initialState: IInitialState = {
  value: 0,
};

const reducers = {
  [Actions.INCREASE]: (state: IInitialState) => ({
    ...state,
    value: state.value + 1,
  }),
  [Actions.DECREASE]: (state: IInitialState) => ({
    ...state,
    value: state.value - 1,
  }),
};

const reducer = handleActions(reducers, initialState);

export default reducer;
