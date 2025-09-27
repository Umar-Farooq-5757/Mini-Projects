import React, { useState } from "react";

const RangeSlider = ({ min = 0, max = 50, defaultValue,value, setValue }) => {
  
  return (
    <div className="w-42 sm:w-52">
      <div className="flex justify-between items-center">
        <p className="text-black">Gap</p>
        <span className="text-black">{value} px</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="range range-info mt-2"
      />
    </div>
  );
};

export default RangeSlider;
