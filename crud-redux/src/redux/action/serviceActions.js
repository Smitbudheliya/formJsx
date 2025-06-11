// 1
export const ADD_SERVICE = 'ADD_SERVICE';
export const DELETE_SERVICE = 'DELETE_SERVICE';
export const UPDATE_SERVICE = 'UPDATE_SERVICE';

export const addService = (service) => ({
  type: ADD_SERVICE,
  payload: service,
});

export const deleteService = (id) => ({
  type: DELETE_SERVICE,
  payload: id,
});

export const updateService = (service) => ({
  type: UPDATE_SERVICE,
  payload: service,
});
