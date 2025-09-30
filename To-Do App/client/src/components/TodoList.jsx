import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <section className="flex items-center justify-center flex-col">
      <h2 className="font-semibold text-xl">Your Todos: </h2>
      <div className="todos bg-[#faf9f6] min-h-[20rem] w-1/2 mt-2 rounded-md p-3">
        <TodoItem text={'Todo text here'}/>
      </div>
    </section>
  );
};

export default TodoList;
