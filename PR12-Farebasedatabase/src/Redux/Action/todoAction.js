// todoAction.js
import { getDatabase, ref, push, get, remove } from 'firebase/database';
import { SET_TODOS, SET_LOADING } from './types';
import { app } from '../../Firebase';

// Add new TODO
export const addTodo = (task) => {
  return async (dispatch) => {
    const db = getDatabase(app);
    const todoRef = ref(db, 'todos');
    await push(todoRef, { task });
    dispatch(fetchTodos());
  };
};

// Fetch all TODOs
export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADING, payload: true });

    const db = getDatabase(app);
    const todoRef = ref(db, 'todos');
    const snapshot = await get(todoRef);
    const data = snapshot.val();

    // convert Firebase object into array with ids
    const todos = data ? Object.entries(data).map(([id, value]) => ({ id, ...value })) : [];

    dispatch({ type: SET_TODOS, payload: todos });
  };
};

// ✅ Delete TODO by id
export const deleteTodo = (id) => {
  return async (dispatch) => {
    const db = getDatabase(app);
    const todoRef = ref(db, `todos/${id}`);
    await remove(todoRef);
    dispatch(fetchTodos()); // refresh after delete
  };
};
