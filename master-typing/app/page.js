"use client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [targetText, setTargetText] = useState("This is some text for demo.");
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleClick = () => {
    inputRef.current.focus();
  };

  const RenderText = () => {
    return targetText.split("").map((char, idx) => {
      let coloredClass = "";
      if (idx < inputValue.length) {
        if (char == inputValue[idx]) {
          coloredClass = "bg-green-600";
        } else {
          coloredClass = "bg-red-600";
        }
      } else if (idx == inputValue.length) {
        coloredClass = "bg-orange-600";
      }
      return (
        <span className={coloredClass} key={idx}>{char}</span>
      )
    });
  };
  return (
    <div>
      <div className="font-mono text-4xl">{RenderText()}</div>
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
