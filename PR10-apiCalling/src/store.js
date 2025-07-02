import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/userReducer.js';
import { productReducer } from './reducers/productReducer.js';

const rootReducer = combineReducers({
  users: userReducer,
  products: productReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
