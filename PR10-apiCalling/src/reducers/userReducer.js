const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USERS_REQUEST':
      return { ...state, loading: true };
    case 'USERS_SUCCESS':
      return { loading: false, data: action.payload, error: null };
    case 'USERS_FAIL':
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};
