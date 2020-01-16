import { Actions } from './actionTypes'
import { IInitialState } from './interface'

export const initialState: IInitialState = {
  value: 0
}

interface IAction {
  type: string
}

const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case Actions.INCREASE:
      return { value: state.value + 1 }
    case Actions.DECREASE:
      return { value: state.value - 1 }
    default:
      return state
  }
}

export default reducer
