import React, { useEffect, useState } from "react";

function Form({ saveTodo, updateTodo, editTodo }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTodo.isEdit) {
      updateTodo(editTodo.todo.id, text);
    } else {
      saveTodo(text);
    }
    setText("");
  };
  useEffect(() => {
    setText(editTodo.todo.text);
  }, [editTodo]);
  return (
    <form className="col s12" onSubmit={handleSubmit}>
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Enter Tasks"
            value={text}
            id="icon_prefix2"
            className="materialize-textarea"
            required
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
        <button
          id="save-btn"
          className="btn waves-effect waves-light"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default Form;
