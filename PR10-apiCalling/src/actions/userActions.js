export const fetchUsers = () => {
  return async (dispatch) => {
    dispatch({ type: 'USERS_REQUEST' });

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      dispatch({ type: 'USERS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'USERS_FAIL', payload: error.message });
    }
  };
};
