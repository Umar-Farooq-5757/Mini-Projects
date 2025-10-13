import axios from "axios";
import { Plus, SquarePen } from "lucide-react";
import { useAppContext } from "../../context/AppContext";

const Input = () => {
  const {
    todoValue,
    setTodoValue,
    mode,
    setMode,
    editTodo,
    postTodo,
    getAllTodos,
  } = useAppContext();

  return (
    <div className="my-5 flex justify-center items-center gap-5 pt-8">
      <input
        className="outline outline-gray-400 md:w-[30rem] pl-2 py-1 rounded-md"
        type="text"
        placeholder="Add a todo ..."
        name=""
        id=""
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button
        onClick={() => {
          mode == "creating" ? postTodo() : editTodo();
          setMode("creating");
        }}
        className="border border-gray-200 text-sm  transition-all active:scale-95 shadow2 flex justify-center items-center gap-1 rounded-md px-3 py-1 cursor-pointer"
      >
        {mode == "creating" ? (
          <>
            <Plus className="size-5" /> Add
          </>
        ) : (
          <>
            <SquarePen className="size-5" /> Edit
          </>
        )}
      </button>
    </div>
  );
};

export default Input;
