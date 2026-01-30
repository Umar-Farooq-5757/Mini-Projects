import { useEffect, useRef, useState } from "react";
import "./App.css";
import CustomCursor from "./components/ui/CustomCursor";
import Header from "./components/Header";
import { useAppContext } from "./contexts/AppContext";
import { createClickPlayer } from "./utils/clickSynth";
import Keyboard from "./components/Keyboard";
import Settings from "./modals/Settings";

function App() {
  const { targetText } = useAppContext();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      inputRef.current?.focus();
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const RenderText = () => {
    return targetText.split("").map((char, idx) => {
      let coloredClass = "";
      if (idx < inputValue.length) {
        coloredClass =
          char === inputValue[idx] ? "text-green-500" : "text-red-500";
      }
      return (
        <span
          className={`${coloredClass} tracking-tighter border-2 border-[#eee] ${idx == inputValue.length && "border-l-purple-600"}`}
          key={idx}
        >
          {char}
        </span>
      );
    });
  };

  // Playing click sound
  const clickRef = useRef(null);
  useEffect(() => {
    clickRef.current = createClickPlayer();
    return () => clickRef.current?.dispose();
  }, []);
  const handleKeyDown = (e) => {
    const printable = e.key.length === 1;
    if (printable || ["Backspace", "Enter"].includes(e.key)) {
      clickRef.current.play({
        volume: 0.14,
        type: "blend",
        pitch: 1400,
        decay: 0.015,
      });
    }
  };

  return (
    <>
      <div className="bg-[#eee] min-h-screen">
        <Header />
        <section className="px-32 py-12">
          <div className="font-mono">
            <p className="text-2xl text-gray-600 leading-10">{RenderText()}</p>
          </div>
          <Keyboard />
        </section>
        <input
          className="opacity-0 fixed inset-0 -z-50"
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          type="text"
        />
        <CustomCursor />
        <Settings />
      </div>
    </>
  );
}

export default App;
