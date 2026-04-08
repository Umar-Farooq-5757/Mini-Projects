import { useState, useSyncExternalStore } from "react";
import "./App.css";
import {
  Pause,
  Play,
  RotateCw,
  SlidersHorizontal,
  Volume2,
  VolumeOff,
} from "lucide-react";
import Settings from "./components/Settings";
function App() {
  const [isPaused, setIsPaused] = useState(true);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [areSettingsOpen, setAreSettingsOpen] = useState(true);
  return (
    <main className="flex min-h-screen flex-col select-none">
      {/* Player 1 time */}
      <div className="bg-teal-500 grow text-white font-semibold text-9xl text flex justify-center items-center">
        2:57
      </div>
      {/* Controls */}
      <div className="bg-black/80 text-white py-2 px-2 flex items-center justify-around">
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
      </div>
      {/* Player 2 time */}
      <div className="bg-teal-500 grow text-white font-semibold text-9xl text flex justify-center items-center">
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
