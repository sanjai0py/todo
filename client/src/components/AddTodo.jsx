import React from "react";

const AddTodo = () => {
  return (
    <form className="form">
      <div>
        <label htmlFor="input">new item</label>
        <input id="input" type="text"></input>
      </div>
      <button>add new task</button>
    </form>
  );
};

export default AddTodo;
