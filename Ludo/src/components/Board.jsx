import React from "react";
import { boxes } from "../utils/data.js";
const Board = () => {
  // console.log(boxes);
  return (
    <section>
      {boxes.map((colorSection, idx) => {
        return (
          <div key={idx} className="max-w-86">
            {/* home */}
            <div className="size-86 bg-green-500"></div>
            {/* rows */}
            <div className="grid grid-cols-6">
              {colorSection.map((box, idx) => {
                return (
                  <div
                    key={idx}
                    className="box size-14 bg-gray-300 border"
                  ></div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Board;
