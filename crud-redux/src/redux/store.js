//3
import { createStore, combineReducers } from 'redux';
import serviceReducer from './reduser/serviceReducer';

const rootReducer = combineReducers({
  services: serviceReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
