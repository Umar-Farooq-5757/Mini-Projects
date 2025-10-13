import TodoItem from "./TodoItem";
import { useAppContext } from "../../context/AppContext";

const TodoList = () => {
  const {todos} = useAppContext()
  return (
    <section className="flex items-center justify-center flex-col">
      <h2 className="font-semibold text-xl">Your Todos: </h2>
      <div className="todos bg-[#faf9f6] transition-all border border-gray-200 shadow-xs min-h-[20rem] w-1/2 mt-2 rounded-md p-3">
        {todos.length == 0 && <p>No todos to show...</p>}
        {todos.length !== 0 &&
          todos.map((todo) => {
            return (
              <TodoItem
                key={todo.task_id}
                taskId={todo.task_id}
                text={todo.text}
                isCompleted={todo.isCompleted}
              />
            );
          })}
      </div>
    </section>
  );
};

export default TodoList;
