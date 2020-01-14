import { combineReducers } from 'redux';
import counter from '../redux/modules/Counter/reducer';

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
