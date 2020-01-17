import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk'

import reducers from './rootReducer'

export default function configureStore() {
  const composeEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

  const store = createStore(
    reducers,
    composeEnhancer
  );

  return store;
}
