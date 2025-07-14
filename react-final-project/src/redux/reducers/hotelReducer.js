const initialState = {
  rooms: [],
  reservations: [],
  loading: false,
  error: null,
  user: JSON.parse(localStorage.getItem('user')) || null
};

export const hotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ROOMS_LOADING':
    case 'RESERVATIONS_LOADING':
      return { ...state, loading: true };

    case 'ROOMS_SUCCESS':
      return { ...state, loading: false, rooms: action.payload };

    case 'RESERVATIONS_SUCCESS':
      return { ...state, loading: false, reservations: action.payload };

    case 'ROOMS_ERROR':
    case 'RESERVATIONS_ERROR':
      return { ...state, loading: false, error: action.payload };

    case 'RESERVATION_ADDED':
      return { ...state, reservations: [...state.reservations, action.payload] };

    case 'RESERVATION_CANCELED':
      return {
        ...state,
        reservations: state.reservations.filter(r => r.id !== action.payload)
      };

    default:
      return state;
  }
};
