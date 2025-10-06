import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import axios from "axios";

const TodoList = ({ todoValue, setTodoValue, setMode, editTodo }) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("/api/todo/all")
      .then((res) => {
        setTodos(res.data.todos);
        console.log("Data:", res.data);
      })
      .catch((err) => {
        console.error("There was an error!", err);
      });
  }, []);

  return (
    <section className="flex items-center justify-center flex-col">
      <h2 className="font-semibold text-xl">Your Todos: </h2>
      <div className="todos bg-[#faf9f6] border border-gray-200 shadow-xs min-h-[20rem] w-1/2 mt-2 rounded-md p-3">
        {todos.length == 0 && <p>No todos to show...</p>}
        {todos.length !== 0 &&
          todos.map((todo) => {
            return (
              <TodoItem
                key={todo.task_id}
                taskId={todo.task_id}
                text={todo.text}
                isCompleted={todo.isCompleted}
                todoValue={todoValue}
                setTodoValue={setTodoValue}
                setMode={setMode}
                editTodo={editTodo}
              />
            );
          })}
      </div>
    </section>
  );
};

export default TodoList;
