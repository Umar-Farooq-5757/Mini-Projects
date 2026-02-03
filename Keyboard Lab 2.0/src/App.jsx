import { useEffect, useRef, useState } from "react";
import "./App.css";
import CustomCursor from "./components/ui/CustomCursor";
import Header from "./components/Header";
import { useAppContext } from "./contexts/AppContext";
import { createClickPlayer } from "./utils/clickSynth";
import Keyboard from "./components/Keyboard";
import Settings from "./modals/Settings";
import { KeyboardIcon } from "lucide-react";
import Result from "./modals/Result";

function App() {
  const { targetText } = useAppContext();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);
  const handleStart = () => {
    setIsActive(true);
  };

  const calculateStats = () => {
    const timeElapsedInMinutes = (60 - timeLeft) / 60;

    if (timeElapsedInMinutes === 0) return { wpm: 0, cpm: 0 };

    const correctChars = inputValue.length;
    const cpm = Math.floor(correctChars / timeElapsedInMinutes);
    const wpm = Math.floor(cpm / 5);

    return { wpm, cpm };
  };

  const RenderText = () => {
    return targetText.split("").map((char, idx) => {
      let coloredClass = "";
      if (idx < inputValue.length) {
        coloredClass =
          char === inputValue[idx] ? "text-green-500" : "text-red-500";
      }
      return (
        <span
          className={`${coloredClass} transition-all tracking-tighter border-2 border-[#eee] ${idx == inputValue.length && "border-l-purple-600"}`}
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
    inputRef.current.focus();
    clickRef.current = createClickPlayer();
    return () => clickRef.current?.dispose();
  }, []);
  const handleKeyDown = (e) => {
    const printable = e.key.length === 1;
    if (!isActive && e.target.value.length === 1) {
      setIsActive(true);
    }
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
          <div className="font-mono relative">
            <p className="text-2xl text-gray-600 leading-10">{RenderText()}</p>
            <button
              onClick={() => inputRef.current.focus()}
              className="bg-purple-500 absolute right-0 -bottom-5 text-white font-semibold flex justify-center items-center gap-2 py-1 px-3 rounded-md shadow-2xl"
            >
              <KeyboardIcon />
              <span>Start Typing</span>
            </button>
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
        <Result />
      </div>
    </>
  );
}

export default App;
