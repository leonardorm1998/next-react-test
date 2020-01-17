import { Action as BasicAction } from 'redux'

import { Actions } from './actionTypes'

export const increase = (): BasicAction<Actions.INCREASE> => ({
  type: Actions.INCREASE
})

export const decrease = (): BasicAction<Actions.DECREASE> => ({
  type: Actions.DECREASE
})
