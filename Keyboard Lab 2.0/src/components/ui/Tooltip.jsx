import { Info } from "lucide-react";
import React from "react";

const Tooltip = ({text}) => {
  return (
    <button className="group relative inline-flex items-center justify-center bg-gray-500 rounded-full text-sm font-medium text-white group  ">
      <span className="relative transition-all ease-in duration-75 px-1.5 flex items-center justify-center rounded-md group-hover:bg-opacity-0 text-[10px] ">
        {/* <Info className=="size-4"/> */}
        i
      </span>
      <div className="hidden group-hover:block">
        <div className="group absolute -top-12 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2">
          <div className="rounded-sm bg-black py-1 px-2">
            <p className="whitespace-nowrap">{text}</p>
          </div>
          <div className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-black"></div>
        </div>
      </div>
    </button>
  );
};

export default Tooltip;
