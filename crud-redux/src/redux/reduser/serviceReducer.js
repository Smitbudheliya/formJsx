//2
import { ADD_SERVICE, DELETE_SERVICE, UPDATE_SERVICE } from '../action/serviceActions';

const initialState = [];

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SERVICE:
      return [...state, action.payload];
    case DELETE_SERVICE:
      return state.filter(service => service.id !== action.payload);
    case UPDATE_SERVICE:
      return state.map(service =>
        service.id === action.payload.id ? action.payload : service
      );
    default:
      return state;
  }
};

export default serviceReducer;
