import { SET_TODOS, SET_LOADING } from '../Action/types';
const initialState = {
  todos: [],
  loading: false
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
  
    case SET_LOADING:
      return { ...state, loading: action.payload };

    case SET_TODOS:
      return { ...state, todos: action.payload, loading: false };

    default:
      return state;
  }
};
