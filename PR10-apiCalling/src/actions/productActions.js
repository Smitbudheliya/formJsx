import axios from 'axios';

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch({ type: 'PRODUCTS_REQUEST' });

    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      dispatch({ type: 'PRODUCTS_SUCCESS', payload: res.data });
    } catch (error) {
      dispatch({ type: 'PRODUCTS_FAIL', payload: error.message });
    }
  };
};
