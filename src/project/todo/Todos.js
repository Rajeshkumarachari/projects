import { useReducer, useState } from "react";
import "./Todos.css";

const initialState = [];
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: state.length + 1, name: action.payload }];
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
}
function init(initialState) {
  const data = [...initialState, { id: 1, name: "React JS" }];
  return data;
}

const Todos = () => {
  const [todo, dispatch] = useReducer(reducer, initialState, init);
  const handleChange = (e) => {
    if (e.key === "Enter") {
      dispatch({ type: "ADD_TASK", payload: e.target.value });
    }
  };
  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };
  return (
    <div>
      <h3> Task List {todo.length} </h3>
      <label htmlFor="task">Enter Task</label>
      <input type="text" id="task" onKeyDown={(e) => handleChange(e)} />
      <ul>
        {todo.map((todos) => (
          <li key={todos.id}>
            {todos.name}
            <button onClick={() => deleteTask(todos.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
