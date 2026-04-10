import { Check, X } from "lucide-react";
import { useState } from "react";

function Settings({
  areSettingsOpen,
  setAreSettingsOpen,
  selectedTheme,
  setSelectedTheme,
  setInitialTime,
  setIncrement,
  reloadTimers,
}) {
  const themeColors = [
    {
      name: "teal",
      value: "#00bba7",
    },
    {
      name: "cyan",
      value: "#00b8db",
    },
    {
      name: "pink",
      value: "#f6339a",
    },
    {
      name: "rose",
      value: "#ff637e",
    },
    {
      name: "orange",
      value: "#ff6900",
    },
    {
      name: "green",
      value: "#00a63e",
    },
  ];
  const timeControls = [
    {
      type: "bullet",
      text: "1 + 0",
      initialTime: 1 * 60 * 1000,
      increment: 0,
    },
    {
      type: "bullet",
      text: "1 + 1",
      initialTime: 1 * 60 * 1000,
      increment: 1000,
    },
    {
      type: "bullet",
      text: "2 + 1",
      initialTime: 2 * 60 * 1000,
      increment: 1000,
    },
    {
      type: "blitz",
      text: "3 + 0",
      initialTime: 3 * 60 * 1000,
      increment: 0,
    },
    {
      type: "blitz",
      text: "3 + 2",
      initialTime: 3 * 60 * 1000,
      increment: 2000,
    },
    {
      type: "blitz",
      text: "5 + 3",
      initialTime: 5 * 60 * 1000,
      increment: 3000,
    },
    {
      type: "rapid",
      text: "10 + 0",
      initialTime: 10 * 60 * 1000,
      increment: 0,
    },
    {
      type: "rapid",
      text: "15 + 10",
      initialTime: 15 * 60 * 1000,
      increment: 10 * 1000,
    },
    {
      type: "classical",
      text: "30 + 20",
      initialTime: 30 * 60 * 1000,
      increment: 20 * 1000,
    },
  ];
  const [initialMin, setInitialMin] = useState(0);
  const [initialSec, setInitialSec] = useState(0);
  const [incrementMin, setIncrementMin] = useState(0);
  const [incrementSec, setIncrementSec] = useState(0);

  const handleApplyCustom = () => {
    const customInitial = (parseInt(initialMin) * 60 + parseInt(initialSec)) * 1000;
  const customInc = (parseInt(incrementMin) * 60 + parseInt(incrementSec)) * 1000;

  if (customInitial > 0) {
    setInitialTime(customInitial);
    setIncrement(customInc);
    reloadTimers(customInitial);
    setAreSettingsOpen(false);
  }
  };
  return (
    <div
      onClick={() => setAreSettingsOpen(false)}
      className={`${!areSettingsOpen && "hidden"} absolute inset-0 flex justify-center items-center bg-black/20`}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#333333] h-3/4 w-9/10 rounded-sm shadow-md text-white px-5 py-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl">Settings</h2>
          <button onClick={() => setAreSettingsOpen(false)}>
            <X />
          </button>
        </div>
        <div className="bg-black/25 h-0.5 w-full mt-2 mb-3"></div>
        {/* Theme */}
        <div>
          <h3 className="text-lg font-semibold">Theme</h3>
          <div className="flex justify-between items-center my-3">
            {themeColors.map((color) => {
              return (
                <div
                  onClick={() => setSelectedTheme(color.value)}
                  key={color.value}
                  style={{ backgroundColor: color.value }}
                  className="size-9.5 rounded-full flex items-center justify-center">
                  {selectedTheme == color.value && <Check />}
                </div>
              );
            })}
          </div>
        </div>
        {/* Time Controls */}
        <div>
          <h3 className="text-lg font-semibold">Time Controls</h3>
          <div className="grid grid-cols-3 gap-2 items-center justify-center my-3">
            {timeControls.map((control) => {
              return (
                <div
                  onClick={() => {
                    setInitialTime(control.initialTime);
                    setIncrement(control.increment);
                    reloadTimers(control.initialTime);
                    setAreSettingsOpen(false);
                  }}
                  key={control.text}
                  className="bg-[#3d3d3d] rounded-sm flex flex-col items-center py-1.5 cursor-pointer">
                  <div className="text-lg">{control.text}</div>
                  <div className="capitalize text-sm">{control.type}</div>
                </div>
              );
            })}
          </div>
          {/* Custom time control */}
          <div>
            <h3 className="text-lg font-semibold">Custom Time Control</h3>
            <div className="my-2 flex gap-4 items-center">
              {/* Initial time */}
              <div className="flex flex-col gap-2 items-center w-1/2">
                <p>Initial Time</p>
                <div className="flex gap-1 justify-center items-center">
                  <input
                    className="bg-[#3d3d3d] w-1/4 text-center rounded-sm outline-none"
                    value={initialMin}
                    onChange={(e) =>setInitialMin(e.target.value)}
                    type="number"
                    placeholder="00"
                  />
                  <span>:</span>
                  <input
                    className="bg-[#3d3d3d] w-1/4 text-center rounded-sm outline-none"
                    value={initialSec}
                    onChange={(e) => setInitialSec(e.target.value)}
                    type="number"
                    placeholder="00"
                  />
                </div>
              </div>
              {/* Increment */}
              <div className="flex flex-col gap-2 items-center w-1/2">
                <p>Increment</p>
                <div className="flex gap-1 justify-center items-center">
                  <input
                    className="bg-[#3d3d3d] w-1/4 text-center rounded-sm outline-none"
                    value={incrementMin}
                     onChange={(e) => setIncrementMin(e.target.value)}
                    type="number"
                    placeholder="00"
                  />
                  <span>:</span>
                  <input
                    className="bg-[#3d3d3d] w-1/4 text-center rounded-sm outline-none"
                    value={incrementSec}
                     onChange={(e) => setIncrementSec(e.target.value)}
                    type="number"
                    placeholder="00"
                  />
                </div>
              </div>
            </div>
            <button onClick={handleApplyCustom} disabled={initialMin == 0 && initialSec == 0}
              className={`w-full bg-white text-black rounded-md my-3 py-1.5 ${initialMin == 0 && initialSec == 0 && incrementMin == 0 && incrementSec == 0 && "opacity-50"}`}>
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
