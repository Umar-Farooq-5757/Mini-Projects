import { useEffect, useState } from "react";
import "./App.css";
import Slider from "./components/Slider";

function App() {
  const getCurrentTimeHHMMSS = () => {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    // Helper function to ensure two digits (e.g., 9 -> "09")
    const padToTwoDigits = (num) => String(num).padStart(2, "0");

    const HH = padToTwoDigits(hours);
    const MM = padToTwoDigits(minutes);
    const SS = padToTwoDigits(seconds);

    return `${HH}${MM}${SS}`;
  };
  useEffect(() => {
    setCurrentTime(getCurrentTimeHHMMSS());
    const timerId = setInterval(() => {
      setCurrentTime(getCurrentTimeHHMMSS());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  const [currentTime, setCurrentTime] = useState(getCurrentTimeHHMMSS());

  return (
    <main className="min-h-screen bg-black/20 p-5 overflow-hidden flex justify-center items-start gap-3 sm:gap-12">
      {/* Hours (HH) */}
      <div
        className={`bg-[#818181] transition-all slider flex flex-col gap-0 w-fit h-fit p-0.5 sm:p-2 rounded-md`}
        style={{ transform: `translateY(calc(43vh - ${transform}px))` }}>
        {l.map((el) => {
          return (
            <div
              key={el}
              className={`${
                selected == el &&
                "rounded-full bg-white/20 backdrop-blur-sm shadow-lg border-white/30 scale-105 sm:scale-110"
              } text-center py-1 px-3 transition-all border border-[#818181] font-mono text-white font-semibold text-lg sm:text-2xl`}>
              {el}
            </div>
          );
        })}
      </div>
      <div
        className={`bg-[#818181] transition-all slider flex flex-col gap-0 w-fit h-fit p-0.5 sm:p-2 rounded-md`}
        style={{ transform: `translateY(calc(43vh - ${transform}px))` }}>
        {l.map((el) => {
          return (
            <div
              key={el}
              className={`${
                selected == el &&
                "rounded-full bg-white/20 backdrop-blur-sm shadow-lg border-white/30 scale-105 sm:scale-110"
              } text-center py-1 px-3 transition-all border border-[#818181] font-mono text-white font-semibold text-lg sm:text-2xl`}>
              {el}
            </div>
          );
        })}
      </div>
      {/* Minutes (MM) */}
      <div
        className={`bg-[#818181] transition-all slider flex flex-col gap-0 w-fit h-fit p-0.5 sm:p-2 rounded-md`}
        style={{ transform: `translateY(calc(43vh - ${transform}px))` }}>
        {l.map((el) => {
          return (
            <div
              key={el}
              className={`${
                selected == el &&
                "rounded-full bg-white/20 backdrop-blur-sm shadow-lg border-white/30 scale-105 sm:scale-110"
              } text-center py-1 px-3 transition-all border border-[#818181] font-mono text-white font-semibold text-lg sm:text-2xl`}>
              {el}
            </div>
          );
        })}
      </div>
      <div
        className={`bg-[#818181] transition-all slider flex flex-col gap-0 w-fit h-fit p-0.5 sm:p-2 rounded-md`}
        style={{ transform: `translateY(calc(43vh - ${transform}px))` }}>
        {l.map((el) => {
          return (
            <div
              key={el}
              className={`${
                selected == el &&
                "rounded-full bg-white/20 backdrop-blur-sm shadow-lg border-white/30 scale-105 sm:scale-110"
              } text-center py-1 px-3 transition-all border border-[#818181] font-mono text-white font-semibold text-lg sm:text-2xl`}>
              {el}
            </div>
          );
        })}
      </div>
      {/* Seconds (SS) */}
      <div
        className={`bg-[#818181] transition-all slider flex flex-col gap-0 w-fit h-fit p-0.5 sm:p-2 rounded-md`}
        style={{ transform: `translateY(calc(43vh - ${transform}px))` }}>
        {l.map((el) => {
          return (
            <div
              key={el}
              className={`${
                selected == el &&
                "rounded-full bg-white/20 backdrop-blur-sm shadow-lg border-white/30 scale-105 sm:scale-110"
              } text-center py-1 px-3 transition-all border border-[#818181] font-mono text-white font-semibold text-lg sm:text-2xl`}>
              {el}
            </div>
          );
        })}
      </div>
      <div
        className={`bg-[#818181] transition-all slider flex flex-col gap-0 w-fit h-fit p-0.5 sm:p-2 rounded-md`}
        style={{ transform: `translateY(calc(43vh - ${transform}px))` }}>
        {l.map((el) => {
          return (
            <div
              key={el}
              className={`${
                selected == el &&
                "rounded-full bg-white/20 backdrop-blur-sm shadow-lg border-white/30 scale-105 sm:scale-110"
              } text-center py-1 px-3 transition-all border border-[#818181] font-mono text-white font-semibold text-lg sm:text-2xl`}>
              {el}
            </div>
          );
        })}
      </div>
      <p className="fixed bottom-1 left-6 bg-[#ccc]">
        Made with ❤️ by{" "}
        <a
          href="https://github.com/umar-farooq-5757"
          target="_blank"
          className="font-semibold text-blue-600 underline">
          Umar Farooq
        </a>
      </p>
    </main>
  );
}

export default App;
