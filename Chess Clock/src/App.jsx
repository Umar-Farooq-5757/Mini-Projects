import { useEffect, useRef, useState } from "react";
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
function App() {
  const [isPaused, setIsPaused] = useState(true);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [areSettingsOpen, setAreSettingsOpen] = useState(true);
  const [turn, setTurn] = useState('player1');

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
        type: 'noise', 
        pitch: 1500, 
        decay: 0.05 
      });
    }
  };
  return (
    <main ref={screenRef} className="flex min-h-screen flex-col select-none">
      {/* Player 1 time */}
      <div onClick={()=>{setTurn('player2');if(turn=='player1'){handleClick()}}} className={`${turn=='player1'?'bg-teal-500':'bg-[#555]'} grow text-white font-semibold text-9xl text flex justify-center items-center`}>
        2:57
      </div>
      {/* Controls */}
      <div className="bg-[#333] text-white py-2 px-2 flex items-center justify-around">
        <div onClick={() => setIsPaused(!isPaused)}>
          {isPaused ? (
            <Play className="size-5" />
          ) : (
            <Pause className="size-5" />
          )}
        </div>
        <div>
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
      <div onClick={()=>{setTurn('player1');if(turn=='player2'){handleClick()}}} className={`${turn=='player2'?'bg-teal-500':'bg-[#555]'} grow text-white font-semibold text-9xl text flex justify-center items-center`}>
        2:57
      </div>
      <Settings
        areSettingsOpen={areSettingsOpen}
        setAreSettingsOpen={setAreSettingsOpen}
      />
    </main>
  );
}

export default App;
