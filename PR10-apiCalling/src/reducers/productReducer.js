const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PRODUCTS_REQUEST':
      return { ...state, loading: true };
    case 'PRODUCTS_SUCCESS':
      return { loading: false, data: action.payload, error: null };
    case 'PRODUCTS_FAIL':
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};
