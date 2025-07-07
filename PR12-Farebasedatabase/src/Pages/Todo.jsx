// ViewTODO.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, fetchTodos, deleteTodo } from '../Redux/Action/todoAction';


function Todo() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const { todos, loading } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask('');
      alert("Task added successfully!");
    }
  };

  return (
    <div align="center" style={{ background: "#1a1a1a", color: "white", minHeight: "100vh", padding: "2rem" }}>
      <h2 className='mb-5' style={{ color: "#00ffcc" }}>🔥 My TODO List</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{
            padding: "0.5rem",
            width: "250px",
            borderRadius: "5px",
            border: "none",
            marginRight: "10px",
            background: "#333",
            color: "white"
          }}
        />
        <input
          type="submit"
          value="Add Task"
          style={{
            padding: "0.5rem 1rem",
            background: "#00ffcc",
            color: "black",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        />
      </form>

      <h3 className='my-5' style={{ color: "#00ffcc" }}>📝 Tasks</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table style={{ width: "100%", background: "#222", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#444" }}>
              <th style={{ padding: "10px", border: "1px solid #555" }}>#</th>
              <th style={{ padding: "10px", border: "1px solid #555" }}>Task</th>
              <th style={{ padding: "10px", border: "1px solid #555" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td style={{ padding: "10px", border: "1px solid #333" }}>{index + 1}</td>
                <td style={{ padding: "10px", border: "1px solid #333" }}>{todo.task}</td>
                <td style={{ padding: "10px", border: "1px solid #333" }}>
                  <button
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    style={{
                      background: "#ff4d4d",
                      border: "none",
                      color: "white",
                      padding: "5px 10px",
                      borderRadius: "4px",
                      cursor: "pointer"
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Todo;
