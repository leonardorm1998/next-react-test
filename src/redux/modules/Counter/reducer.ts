import { IInitialState } from './interface';

export const initialState: IInitialState = {
  value: 0,
};

interface IAction {
  type: string;
}

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case 'COUNTER_INCREASE':
      return { count: state.value + 1 };
    case 'COUNTER_DECREASE':
      return { count: state.value - 1 };
    default:
      return state;
  }
};

export default reducer;
