import { handleActions } from 'redux-actions'

import { Actions } from './actionTypes'

import { IInitialState } from './interface'

const initialState: IInitialState = {
  value: 0
}

const reducers = {
  [Actions.INCREASE]: (state = initialState) => ({
    ...state,
    value: state.value + 1
  }),
  [Actions.DECREASE]: (state = initialState) => ({
    ...state,
    value: state.value - 1
  })
}

const reducer = handleActions(reducers, initialState)

export default reducer
