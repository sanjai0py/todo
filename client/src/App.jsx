import React, { useState } from "react";
import AddTodo from "./components/AddTodo.jsx";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todo, setTodo] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodo(() => {
      return [
        ...todo,
        { id: crypto.randomUUID(), value: newItem, checked: false },
      ];
    });

    setNewItem(" ");
  }

  function handleChecked(id, checked) {
    // change the state of the todos
    setTodo((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked };
        }
        return todo;
      });
    });
  }

  function handleDelete(id) {
    return setTodo((currentTodos) =>
      currentTodos.filter((todo) => todo.id != id)
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">New Item</label>
        <input
          id="input"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
        />
        <button>Add</button>
      </form>

      <h1>Todo list</h1>
      {/* Rendering TODOs */}
      <ul>
        {todo.length === 0 ? "Todos are empty" : ""}
        {todo.map((vals) => {
          return (
            <li key={vals.id}>
              <label>
                <input
                  onChange={(e) => handleChecked(vals.id, e.target.checked)}
                  checked={vals.checked}
                  type="checkbox"
                ></input>
                {vals.value}
              </label>
              <button onClick={() => handleDelete(vals.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
