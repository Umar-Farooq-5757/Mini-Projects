import axios from "axios";
import { Pencil, Trash } from "lucide-react";
import React, { useState } from "react";

const TodoItem = ({
  text = "default text",
  isCompleted,
  taskId,
  todoValue,
  setTodoValue,
  setMode,
  editTodo
}) => {
  const [checkBoxValue, setCheckBoxValue] = useState(isCompleted);

  const deleteTodo = (id) => {
    axios({
      method: "delete",
      url: `/api/todo/delete/${id}`,
    })
      .then((res) => {
        console.log(`User deleted. Status: ${res.status}`);
      })
      .catch((err) => {
        console.error("Deletion failed:", err);
      });
  };

  

  return (
    <div className="todo-item my-3 flex justify-between items-center bg-white shadow3 py-2 px-4 rounded-md">
      <label className="flex gap-3 items-center cursor-pointer relative">
        <input
          onChange={(e) => setCheckBoxValue(!checkBoxValue)}
          type="checkbox"
          className="hidden peer"
          checked={checkBoxValue}
        />
        <span className="w-5 h-5 border border-slate-400 rounded relative flex items-center justify-center peer-checked:border-green-500"></span>
        <svg
          className="absolute hidden peer-checked:inline left-1 top-1/2 transform -translate-y-1/2"
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m10.092.952-.005-.006-.006-.005A.45.45 0 0 0 9.43.939L4.162 6.23 1.585 3.636a.45.45 0 0 0-.652 0 .47.47 0 0 0 0 .657l.002.002L3.58 6.958a.8.8 0 0 0 .567.242.78.78 0 0 0 .567-.242l5.333-5.356a.474.474 0 0 0 .044-.65Zm-5.86 5.349V6.3Z"
            fill="#00c951"
            stroke="#00c951"
            strokeWidth=".4"
          />
        </svg>
        <span
          className={`${
            checkBoxValue ? "line-through" : ""
          } text-gray-700 select-none`}
        >
          {text}
        </span>
      </label>
      {/* Action buttons */}
      <div className="flex items-center justify-center gap-4">
        <button onClick={() =>{ editTodo(taskId,isCompleted);setMode('editing'); setTodoValue(text);}} className="group cursor-pointer hover:bg-blue-100 rounded-full p-[6px] transition-all">
          <Pencil className="group-hover:text-blue-500 size-4" />
        </button>
        <button
          onClick={() => deleteTodo(taskId)}
          className="group cursor-pointer hover:bg-red-100 rounded-full p-[6px] transition-all"
        >
          <Trash className="group-hover:text-red-500 size-4" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
