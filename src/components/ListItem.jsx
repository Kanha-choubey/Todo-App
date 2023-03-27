import React from "react";

function ListItem({ todos, deleteTodo, edit }) {
  return (
    <>
      <li className="collection-item">
        {todos.text}
        <div>
          <button
            id="del-btn"
            className="update btn waves-effect waves-light red darken-3"
            onClick={() => edit(todos)}
          >
            Update
          </button>
          <button
            id="del-btn ml-5"
            className="btn waves-effect waves-light red darken-3"
            onClick={() => deleteTodo(todos.id)}
          >
            X
          </button>
        </div>
      </li>
    </>
  );
}

export default ListItem;
