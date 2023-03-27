import { useState } from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState([]);
  const [editTodo, setEditTodo] = useState({
    todo: {},
    isEdit: false,
  });
  const saveTodo = (text) => {
    const newTodo = {
      text: text,
      id: uuidv4(),
    };
    setTodo([...todo, newTodo]);
  };
  const deleteTodo = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };
  const edit = (todos) => {
    setEditTodo({
      todo: todos,
      isEdit: true,
    });
  };
  const updateTodo = (id, text) => {
    setTodo(
      todo.map((item) => (item.id === id ? { ...item, text: text } : item))
    );
    setEditTodo({
      todo: {},
      isEdit: false,
    });
  };

  return (
    <div className="App">
      <Navbar />
      <Container
        todo={todo}
        saveTodo={saveTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        editTodo={editTodo}
        edit={edit}
      />
    </div>
  );
}

export default App;
