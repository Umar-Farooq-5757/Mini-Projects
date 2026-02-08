import { RefreshCcw } from "lucide-react";
import React from "react";

const ToolBar = ({
  setInputValue,
  setIsActive,
  timeLeft,
  setTimeLeft,
  inputRef,
}) => {
  return (
    <div className="bg-white py-2 px-8 shadow-sm rounded-md flex justify-between items-center">
      <div className="time-buttons flex items-center gap-8 text-gray-600">
        <button
          className={`${timeLeft == 15 && "text-purple-500 font-bold"}`}
          onClick={() => {
            setTimeLeft(15);
            localStorage.setItem("timeLeft", 15);
          }}
        >
          15s
        </button>
        <button
        className={`${timeLeft == 30 && "text-purple-500 font-bold"}`}
          onClick={() => {
            setTimeLeft(30);
            localStorage.setItem("timeLeft", 30);
          }}
        >
          30s
        </button>
        <button
        className={`${timeLeft == 45 && "text-purple-500 font-bold"}`}
          onClick={() => {
            setTimeLeft(45);
            localStorage.setItem("timeLeft", 45);
          }}
        >
          45s
        </button>
        <button
        className={`${timeLeft == 60 && "text-purple-500 font-bold"}`}
          onClick={() => {
            setTimeLeft(59);
            localStorage.setItem("timeLeft", 59);
          }}
        >
          60s
        </button>
      </div>
      <button
        onClick={() => {
          setInputValue("");
          setIsActive(false);
          setTimeLeft(timeLeft);
          inputRef.current.focus();
        }}
        title="restart test"
      >
        <RefreshCcw className="size-5 text-gray-600 hover:text-black" />
      </button>
    </div>
  );
};

export default ToolBar;
