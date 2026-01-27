import { useEffect, useRef, useState } from "react";
import "./App.css";
import CustomCursor from "./components/ui/CustomCursor";
import clickSfx from "/click1.mp3";
import Header from "./components/Header";
import { useAppContext } from "./contexts/AppContext";
import useClickSound from "./hooks/useClickSound";

function App() {
  const { targetText } = useAppContext();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const { play: playClickSound } = useClickSound(clickSfx);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const RenderText = () => {
    return targetText.split("").map((char, idx) => {
      let coloredClass = "";
      if (idx < inputValue.length) {
        coloredClass = char === inputValue[idx] ? "text-green-500" : "text-red-500";
      }
      return (
        <span className={coloredClass} key={idx}>
          {char}
        </span>
      );
    });
  };

  const handleKeyDown = (e) => {
    const isPrintable = e.key.length === 1;
    const allowedControls = ["Backspace", "Enter", "Tab"];
    if (isPrintable || allowedControls.includes(e.key)) {
      playClickSound();
    }
  };

  return (
    <>
      <div className="bg-[#eee] min-h-screen">
        <CustomCursor />
        <Header />
        <section>
          <div className="font-mono">{RenderText()}</div>
        </section>
        <input
          className="opacity-0 fixed inset-0"
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
        />
      </div>
    </>
  );
}

export default App;
