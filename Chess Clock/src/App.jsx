import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import {
  Maximize,
  Minimize,
  Pause,
  Play,
  RotateCw,
  SlidersHorizontal,
  Volume2,
  VolumeOff,
} from "lucide-react";
import Settings from "./components/Settings";
import { createClickPlayer } from "./utils/clickSynth";
import { useTimer } from "react-use-precision-timer";

function App() {
  const [isPaused, setIsPaused] = useState(true);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [areSettingsOpen, setAreSettingsOpen] = useState(false);
  const [turn, setTurn] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("#00bba7");

  const [isFullscreen, setIsFullscreen] = useState(false);
  const screenRef = useRef(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (screenRef.current.requestFullscreen) {
        screenRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  /**
   * Playing click sound
   */
  const playerRef = useRef(null);
  useEffect(() => {
    playerRef.current = createClickPlayer();
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, []);
  const handleClick = () => {
    if (playerRef.current) {
      playerRef.current.play({
        type: "noise",
        pitch: 1500,
        decay: 0.05,
      });
    }
  };

  /**
   * Handling Time
   */
  const [initialTime, setInitialTime] = useState(5 * 60 * 1000); // in milliseconds
  const [increment, setIncrement] = useState(3*1000); // in milliseconds
  const tickRate = 100;
  const [time1, setTime1] = useState(initialTime);
  const [time2, setTime2] = useState(initialTime);
  // Timer for white
  const timer1 = useTimer(
    { delay: tickRate },
    useCallback(() => {
      setTime1((prev) => Math.max(0, prev - tickRate));
    }, []),
  );
  // Timer for black
  const timer2 = useTimer(
    { delay: tickRate },
    useCallback(() => {
      setTime2((prev) => Math.max(0, prev - tickRate));
    }, []),
  );
  const handleToggleTurn = (clickedPlayer) => {
    if (turn === "") {
      setTurn("white");
      setIsPaused(false);
      timer1.start();
      return;
    }

    if (isPaused || clickedPlayer !== turn) return;

    if (turn === "white") {
      timer1.stop();
      setTime1((prev) => prev + increment);
      setTurn("black");
      timer2.start();
    } else {
      timer2.stop();
      setTime2((prev) => prev + increment);
      setTurn("white");
      timer1.start();
    }

    if (isSoundEnabled) handleClick();
  };
  const togglePause = () => {
    if (turn === "") return;

    if (!isPaused) {
      timer1.pause();
      timer2.pause();
    } else {
      if (turn === "white") timer1.resume();
      if (turn === "black") timer2.resume();
    }
    setIsPaused(!isPaused);
  };
  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  const reloadTimers = (newTime) => {
  const timeToSet = newTime !== undefined ? newTime : initialTime;
  
  timer1.pause();
  timer2.pause();
  timer1.stop();
  timer2.stop();
  
  setTime1(timeToSet);
  setTime2(timeToSet);
  setTurn("");
  setIsPaused(true);
};
  return (
    <main
      ref={screenRef}
      className="flex min-h-screen flex-col select-none max-w-120 mx-auto relative">
      {/* Player 1 time */}
      <div
        onClick={() => {
          handleToggleTurn("white");
        }}
        style={{ backgroundColor: turn == "white" ? selectedTheme : "#555" }}
        className={`grow text-white font-semibold text-9xl text flex justify-center items-center`}>
        <p className="rotate-180">{formatTime(time1)}</p>
      </div>
      {/* Controls */}
      <div className="bg-[#333] text-white py-2 px-2 flex items-center justify-around">
        <div onClick={togglePause}>
          {isPaused ? (
            <Play className="size-5" />
          ) : (
            <Pause className="size-5" />
          )}
        </div>
        <div onClick={()=>reloadTimers(initialTime)}>
          <RotateCw className="size-5" />
        </div>
        <div onClick={() => setAreSettingsOpen(!areSettingsOpen)}>
          <SlidersHorizontal className="size-5" />
        </div>
        <div onClick={() => setIsSoundEnabled(!isSoundEnabled)}>
          {isSoundEnabled ? (
            <Volume2 className="size-5" />
          ) : (
            <VolumeOff className="size-5" />
          )}
        </div>
        <div>
          <button onClick={toggleFullscreen}>
            {isFullscreen ? (
              <Minimize className="size-5" />
            ) : (
              <Maximize className="size-5" />
            )}
          </button>
        </div>
      </div>
      {/* Player 2 time */}
      <div
        onClick={() => {
          handleToggleTurn("black");
        }}
        style={{ backgroundColor: turn == "black" ? selectedTheme : "#555" }}
        className={`grow text-white font-semibold text-9xl text flex justify-center items-center`}>
        <p>{formatTime(time2)}</p>
      </div>
      <Settings
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
        areSettingsOpen={areSettingsOpen}
        setAreSettingsOpen={setAreSettingsOpen}
        setInitialTime={setInitialTime}
        setIncrement={setIncrement}
        reloadTimers={reloadTimers}
      />
    </main>
  );
}

export default App;
