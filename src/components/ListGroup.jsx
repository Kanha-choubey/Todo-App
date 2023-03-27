import React from "react";
import ListItem from "./ListItem";

function ListGroup({ todo, deleteTodo, edit }) {
  // console.log(todo);
  return (
    <ul className="collection">
      {todo.map((todos, i) => (
        <ListItem
          key={todos.id}
          todos={todos}
          deleteTodo={deleteTodo}
          edit={edit}
        />
      ))}
    </ul>
  );
}

export default ListGroup;
