import React from "react";
import { useAppContext } from "../contexts/AppContext";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const Result = ({ wpm, cpm }) => {
  const { isResultModalOpen, setIsResultModalOpen,countingMode } = useAppContext();
  return createPortal(
    <div
      onClick={() => setIsResultModalOpen(false)}
      className={`fixed top-0 left-0 right-0 bottom-0 ${!isResultModalOpen && "hidden"} bg-black/40 flex items-center justify-center`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-1/2 h-2/3 rounded-md shadow-sm px-6 py-5"
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-semibold text-xl">Test Result</h2>
          <button onClick={() => setIsResultModalOpen(false)}>
            <X className="size-5 text-gray-600" />
          </button>
        </div>
        {countingMode == 'wpm'? <div>WPM: {wpm}</div>:<div>CPM: {cpm}</div> }
      </div>
    </div>,
    document.querySelector("#portal"),
  );
};

export default Result;
