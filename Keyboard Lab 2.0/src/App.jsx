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
import ToolBar from "./components/ToolBar";
import { useTimer } from "react-timer-hook";

function App() {
  const { targetText, setIsResultModalOpen } = useAppContext();
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const [timeLeft, setTimeLeft] = useState(Number(localStorage.getItem('timeLeft'))||30);
  const [isActive, setIsActive] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [cpm, setCpm] = useState(0);
  const { seconds, minutes, isRunning, start, pause, restart } = useTimer({
    expiryTimestamp: new Date(),
    autoStart: false,
    onExpire: async () => {
      const timeInMinutes = timeLeft / 60;
      const calculatedCpm = inputValue.length / timeInMinutes;

      const calculatedWpm = calculatedCpm / 5;
      setCpm(Math.round(calculatedCpm));
      setWpm(Math.round(calculatedWpm));
      if(isActive){setIsResultModalOpen(true);}
    },
  });

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

    if (!isActive) {
      setIsActive(true);

      const time = new Date();
      time.setSeconds(time.getSeconds() + timeLeft);

      restart(time);
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
            <ToolBar
              setInputValue={setInputValue}
              setIsActive={setIsActive}
              timeLeft={timeLeft}
              setTimeLeft={setTimeLeft}
              inpurRef = {inputRef}
            />
            <div
              className={`font-bold text-6xl text-purple-400 font-sans my-2 ${!isActive && "opacity-0"}`}
            >
              {seconds}
            </div>
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
        <Result wpm={wpm} cpm={cpm} />
      </div>
    </>
  );
}

export default App;
