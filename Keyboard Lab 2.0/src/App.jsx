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
  const { targetText, setIsResultModalOpen } = useAppContext();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const [timeLeft, setTimeLeft] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [cpm, setCpm] = useState(0);
  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0 && inputValue.length < targetText.length) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setIsActive(false);
      const { wpm, cpm } = calculateStats();
      setWpm(wpm);
      setCpm(cpm);
      if (timeLeft === 0 || inputValue.length == targetText.length) {
        setIsResultModalOpen(true);
      }
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const calculateStats = () => {
    const timeElapsedInMinutes = (10 - timeLeft) / 10;

    if (timeElapsedInMinutes === 0) return { wpm: 0, cpm: 0 };

    const typedChars = inputValue.length;
    const cpm = Math.floor(typedChars / timeElapsedInMinutes);
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
    setIsActive(true);
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
            {timeLeft}
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
        <Result wpm={wpm} cpm={cpm}/>
      </div>
    </>
  );
}

export default App;
