const initialState = {
  notesList: [],
  search: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        notesList: [...state.notesList, action.payload],
      };
    case 'SET_SEARCH':
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
