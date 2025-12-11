"use client";
import { useAppContext } from "@/contexts/AppContext";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [targetText, setTargetText] = useState("This is some text for demo.");
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleClick = () => {
    inputRef.current.focus();
  };
  const u = useAppContext()
  console.log(u)
  const RenderText = () => {
    return targetText.split("").map((char, idx) => {
      let coloredClass = "";
      if (idx < inputValue.length) {
        if (char == inputValue[idx]) {
          coloredClass = "text-green-400";
        } else {
          coloredClass = "text-red-400";
        }
      }
      return (
        <span
          className={`${coloredClass} ${
            idx == inputValue.length ? "border-orange-500" : "border-white"
          } transition-all  border-b-4`}
          key={idx}
        >
          {char}
        </span>
      );
    });
  };


  return (
    <div>
      <div className="font-mono text-4xl m-52 transition-all duration-200">
        {RenderText()}
      </div>
      <input
        ref={inputRef}
        type="text"
        className="opacity-0 absolute inset-0 cursor-default"
        onClick={handleClick}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      />
    </div>
  );
}
