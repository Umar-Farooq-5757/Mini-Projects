import axios from "axios";
import { Plus, SquarePen } from "lucide-react";

const Input = ({ todoValue, setTodoValue, mode, setMode ,editTodo}) => {
  const postTodo = () => {
    axios
      .post("/api/todo/create", { text: todoValue })
      .then((res) => {
        console.log("Secure POST successful:", res);
        setTodoValue("");
      })
      .catch((err) => {
        console.error("Secure POST failed:", err);
      });
  };
  

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
          setMode("creating");
          mode == "creating" ? postTodo : editTodo;
        }}
        className="border border-gray-200 transition-all active:scale-95 shadow2 flex justify-center items-center rounded-md px-3 py-1 cursor-pointer"
      >
        {mode == "creating" ? (
          <>
            <Plus /> Add
          </>
        ) : (
          <>
            <SquarePen /> Edit
          </>
        )}
      </button>
    </div>
  );
};

export default Input;
