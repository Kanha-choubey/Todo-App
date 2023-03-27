import Form from "./Form";
import ListGroup from "./ListGroup";

function Container({ todo, saveTodo, deleteTodo, edit, updateTodo, editTodo }) {
  return (
    <div className="container mx-6">
      <div className="row">
        <Form saveTodo={saveTodo} updateTodo={updateTodo} editTodo={editTodo} />
      </div>

      <ListGroup todo={todo} deleteTodo={deleteTodo} edit={edit} />
    </div>
  );
}

export default Container;
