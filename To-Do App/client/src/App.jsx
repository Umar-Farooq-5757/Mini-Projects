import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import axios from "axios";

function App() {
  const [todoValue, setTodoValue] = useState("");
  const [mode, setMode] = useState("creating");
  const editTodo = (id, checkBoxValue) => {
    axios
      .put(`/api/todo/edit/${id}`, {
        text: todoValue,
        isCompleted: checkBoxValue,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <Header />
      <main>
        <Input
          editTodo={editTodo}
          mode={mode}
          setMode={setMode}
          todoValue={todoValue}
          setTodoValue={setTodoValue}
        />
        <TodoList
          editTodo={editTodo}
          todoValue={todoValue}
          setTodoValue={setTodoValue}
          setMode={setMode}
        />
      </main>
    </>
  );
}

export default App;
