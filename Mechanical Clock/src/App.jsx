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
      <Slider st={0} end={2} selected={Number(currentTime[0])} />
      <Slider st={0} end={9} selected={Number(currentTime[1])} />
      {/* Minutes (MM) */}
      <Slider st={0} end={5} selected={Number(currentTime[2])} />
      <Slider st={0} end={9} selected={Number(currentTime[3])} />
      {/* Seconds (SS) */}
      <Slider st={0} end={5} selected={Number(currentTime[4])} />
      <Slider st={0} end={9} selected={Number(currentTime[5])} />
      <p className="fixed bottom-1 left-6 bg-[#ccc]">
        Made with ❤️ by <a href="https://github.com/umar-farooq-5757" target="_blank" className="font-semibold text-blue-600 underline">Umar Farooq</a>
      </p>
    </main>
  );
}

export default App;
