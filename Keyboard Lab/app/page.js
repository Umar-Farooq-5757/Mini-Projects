"use client";
import Keyboard from "@/components/Keyboard";
import { useAppContext } from "@/contexts/AppContext";
import { useCallback, useEffect, useRef, useState } from "react";
import useClickSound from "../hooks/useClickSound.js";

export default function Home() {
  const { targetText } = useAppContext();
  const [inputValue, setInputValue] = useState("");
  const [currentKeyToPress, setCurrentKeyToPress] = useState(
    targetText[inputValue.length]
  );
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const handleClick = () => {
    inputRef.current.focus();
  };
  const playClickSound = useClickSound();
  const handleKeyDown = useCallback(
    (event) => {
      // We only want a sound for actual *typing* keys, not utility keys like Shift, Ctrl, F5, etc.
      // The key.length check is a simple heuristic to filter them out.
      if (
        event.key.length === 1 ||
        event.key === "Backspace" ||
        event.key === " "
      ) {
        playClickSound();
      }
    },
    [playClickSound]
  );
  const RenderText = () => {
    return targetText.split("").map((char, idx) => {
      let coloredClass = "";
      if (idx < inputValue.length) {
        if (char == inputValue[idx]) {
          coloredClass = "text-green-500";
        } else {
          coloredClass = "text-red-500";
        }
      }
      return (
        <span
          className={`${coloredClass} ${
            idx == inputValue.length ? "border-orange-500" : "border-[#f2f4f7]"
          } transition-all border-l-2`}
          key={idx}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <div className="py-8 px-20 bg-[#f2f4f7] min-h-[calc(100vh-3rem)]">
      <div className="font-mono text-xl">
        <div className="my-3 border-b-2 pb-3">{RenderText()}</div>
        <div>
          <Keyboard currentKeyToPress={currentKeyToPress} />
        </div>
      </div>
      <input
        ref={inputRef}
        type="text"
        className="opacity-0 absolute inset-0 cursor-default"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setCurrentKeyToPress(targetText[e.target.value.length]);
        }}
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
      />
    </div>
  );
}
