import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import reducers from './rootReducer';

const enhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware),
);

const initsStore = (initialState: {} | undefined) => createStore(reducers, initialState, enhancer);

export default initsStore;
