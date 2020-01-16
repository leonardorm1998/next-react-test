import * as React from 'react'
import { connect } from 'react-redux'
import { AnyAction, bindActionCreators, Dispatch } from 'redux'

import { decrease, increase } from './actions'

import { IState } from './interface'

type IProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

const CounterContainer = (props: IProps) => (
  <div>
    <button onClick={props.decreaseAction}>Decrement</button>
    <button onClick={props.increaseAction}>Increment</button>
    <div>{props.value}</div>
  </div>
)

const mapStateToProps = (state: IState) => ({
  value: state.counter.value
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  decreaseAction: bindActionCreators(decrease, dispatch),
  increaseAction: bindActionCreators(increase, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
