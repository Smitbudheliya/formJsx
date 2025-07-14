import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { hotelReducer } from './reducers/hotelReducer';

const rootReducer = combineReducers({
  hotel: hotelReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
