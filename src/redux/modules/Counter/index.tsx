import * as React from 'react';
import { connect } from 'react-redux';
import { Action as BasicAction, ActionCreator, AnyAction, bindActionCreators, Dispatch } from 'redux';
import { decrease } from './actions';
import { Actions as CounterActions } from './actionTypes';
import { IState } from './interface';

interface IProps {
  value: number;
  decreaseAction?: () => ActionCreator<BasicAction<CounterActions.DECREASE>>;
}

const CounterContainer = (props: IProps) => {
  console.log('props', props);
  return (
    <div>
      {/* <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button> */}
      <div>{props.value}</div>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
  console.log('state', state);
  return ({
    value: state.counter.value,
  });
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  decreaseAction: bindActionCreators(decrease, dispatch),
  // increaseAction: bindActionCreators(increase, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer);
