import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import axios from "axios";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("/api/todo/all")
      .then((res) => {
        setTodos(res.data.todos);
        console.log("Data:", res.data.todos);
        console.log("Status:", res.status);
      })
      .catch((err) => {
        console.error("There was an error!", err);
      });
  }, []);

  return (
    <section className="flex items-center justify-center flex-col">
      <h2 className="font-semibold text-xl">Your Todos: </h2>
      <div className="todos bg-[#faf9f6] border border-gray-200 shadow-xs min-h-[20rem] w-1/2 mt-2 rounded-md p-3">
        {todos.map((todo) => {
          return <TodoItem key={todo.task_id} text={todo.text} isCompleted={todo.isCompleted} />;
        })}
      </div>
    </section>
  );
};

export default TodoList;
