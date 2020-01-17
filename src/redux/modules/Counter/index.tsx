import React from 'react'
import { connect } from 'react-redux'
import { Action as BasicAction, AnyAction, bindActionCreators, Dispatch } from 'redux'

import { decrease, increase } from './actions'

import { Actions } from './actionTypes'

import { ICounterState } from './interface'

interface IProps {
  decreaseAction: () => BasicAction<Actions.DECREASE>
  increaseAction: () => BasicAction<Actions.INCREASE>
  value: number
}

const CounterContainer = (props: IProps) => (
  <div>
    <button onClick={props.decreaseAction}>Decrement</button>
    <button onClick={props.increaseAction}>Increment</button>
    <div>{props.value}</div>
  </div>
)

const mapStateToProps = (state: ICounterState) => ({
  value: state.counter.value
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  decreaseAction: bindActionCreators(decrease, dispatch),
  increaseAction: bindActionCreators(increase, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
