import { useReducer, useState } from "react";

const initialState = [];
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: state.length + 1, name: action.payload }];
    default:
      return state;
  }
}

const Todos = () => {
  const [todo, dispatch] = useReducer(reducer, initialState);
  const handleChange = (e) => {
    if (e.key === "Enter") {
      dispatch({ type: "ADD_TASK", payload: e.target.value });
    }
  };
  return (
    <div>
      <h3> Task List {todo.length} </h3>
      <label htmlFor="task">Enter Task</label>
      <input type="text" id="task" onKeyDown={(e) => handleChange(e)} />
      <ul>
        {todo.map((todos) => (
          <li key={todos.id}> {todos.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
