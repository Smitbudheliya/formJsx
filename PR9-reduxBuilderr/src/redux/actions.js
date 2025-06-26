export const addNote = (note) => ({
  type: 'ADD_NOTE',
  payload: note,
});

export const setSearch = (text) => ({
  type: 'SET_SEARCH',
  payload: text,
});
