import axios from 'axios';

const API = 'http://localhost:5000';

export const fetchRooms = () => async dispatch => {
  dispatch({ type: 'ROOMS_LOADING' });
  try {
    const res = await axios.get(`${API}/rooms`);
    dispatch({ type: 'ROOMS_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'ROOMS_ERROR', payload: err.message });
  }
};

export const fetchReservations = () => async dispatch => {
  dispatch({ type: 'RESERVATIONS_LOADING' });
  try {
    const res = await axios.get(`${API}/reservations`);
    dispatch({ type: 'RESERVATIONS_SUCCESS', payload: res.data });
  } catch (err) {
    dispatch({ type: 'RESERVATIONS_ERROR', payload: err.message });
  }
};

export const makeReservation = (reservation) => async dispatch => {
  const res = await axios.post(`${API}/reservations`, reservation);
  dispatch({ type: 'RESERVATION_ADDED', payload: res.data });
};

export const cancelReservation = (id) => async dispatch => {
  await axios.delete(`${API}/reservations/${id}`);
  dispatch({ type: 'RESERVATION_CANCELED', payload: id });
};

// Add updateReservation & userAuth logic similarly...
