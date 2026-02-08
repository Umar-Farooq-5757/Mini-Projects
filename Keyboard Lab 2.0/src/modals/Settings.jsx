import React, { useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import Checkbox from "../components/ui/Checkbox";
import Tooltip from "../components/ui/Tooltip";
const Settings = () => {
  const {
    areSettingsOpen,
    setAreSettingsOpen,
    countingMode,
    setCountingMode,
    backspaceBehavior,
    setBackspaceBehavior,
    caretStyle,
    setCaretStyle,
    punctuationAndNumbers,
    setPunctuationAndNumbers,
    quoteMode,
    setQuoteMode,
    quickReset,
    setQuickReset,
    programmingSyntaxMode,
    setProgrammingSyntaxMode,
    blindMode,
    setBlindMode,
    suddenDeathMode,
    setSuddenDeathMode,
    zenMode,
    setZenMode,
    theme,
    setTheme,
    font,
    setFont,
    soundEffects,
    setSoundEffects,
    highlightNextKey,
    setHighlightNextKey,
  } = useAppContext();
  const [selectedTab, setSelectedTab] = useState("Typing Engine");
  return createPortal(
    <div
      onClick={() => setAreSettingsOpen(false)}
      className={`fixed top-0 left-0 right-0 bottom-0 ${!areSettingsOpen && "hidden"} bg-black/40 flex items-center justify-center`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-1/2 h-2/3 rounded-md shadow-sm px-6 py-5"
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-semibold text-xl">Settings</h2>
          <button onClick={() => setAreSettingsOpen(false)}>
            <X className="size-5 text-gray-600" />
          </button>
        </div>
        <section className="flex h-122 gap-3">
          {/* TABS */}
          <div className="">
            <div
              onClick={() => setSelectedTab("Typing Engine")}
              className={`${selectedTab == "Typing Engine" && "bg-gray-200 rounded-md"} my-2 py-1 px-2`}
            >
              Typing Engine
            </div>
            <div
              onClick={() => setSelectedTab("Content & Modes")}
              className={`${selectedTab == "Content & Modes" && "bg-gray-200 rounded-md"} my-2 py-1 px-2`}
            >
              Content & Modes
            </div>
            <div
              onClick={() => setSelectedTab("Customization")}
              className={`${selectedTab == "Customization" && "bg-gray-200 rounded-md"} my-2 py-1 px-2`}
            >
              Customization
            </div>
          </div>
          <div className="bg-gray-100 grow border border-gray-200 shadow-xs rounded-md px-3 py-2">
            {selectedTab === "Typing Engine" && (
              <div className="flex flex-col gap-4">
                {/* Counting Mode */}
                <div className="flex justify-between items-center">
                  <p>Counting Mode</p>
                  <select
                    className="bg-white border border-gray-300 shadow-xs rounded-sm px-2 py-0.5 outline-none"
                    value={countingMode}
                    onChange={(e) => {
                      setCountingMode(e.target.value);
                      localStorage.setItem("countingMode", e.target.value);
                    }}
                  >
                    <option value="" hidden>
                      Mode
                    </option>
                    <option value="wpm">WPM</option>
                    <option value="cpm">CPM</option>
                  </select>
                </div>
                {/* Backspace Behavior */}
                <div className="flex justify-between items-center">
                  <p>Backspace Behavior</p>
                  <select
                    className="bg-white border border-gray-300 shadow-xs rounded-sm px-2 py-0.5 outline-none"
                    value={backspaceBehavior}
                    onChange={(e) => setBackspaceBehavior(e.target.value)}
                  >
                    <option value="" hidden>
                      Backspace Behavior
                    </option>
                    <option value="correct-errors">Correct Errors</option>
                    <option value="keep-going">Keep Going</option>
                  </select>
                </div>
                {/* Quick Reset */}
                <div className="flex justify-between items-center">
                  <p className="flex gap-2 items-center">
                    Quick Reset{" "}
                    <Tooltip text={"Press Esc to quickly restart"} />
                  </p>
                  <Checkbox
                    id={1}
                    value={quickReset}
                    setValue={setQuickReset}
                  />
                </div>
                {/* Caret Style */}
                <div className="flex justify-between items-center">
                  <p>Caret Style</p>
                  <select
                    className="bg-white border border-gray-300 shadow-xs rounded-sm px-2 py-0.5 outline-none"
                    value={caretStyle}
                    onChange={(e) => setCaretStyle(e.target.value)}
                  >
                    <option value="" hidden>
                      Caret Style
                    </option>
                    <option value="line">Line</option>
                    <option value="block">Block</option>
                    <option value="underline">Underline</option>
                  </select>
                </div>
              </div>
            )}
            {selectedTab === "Content & Modes" && (
              <div className="flex flex-col gap-4">
                {/* Punctuation & Numbers */}
                <div className="flex justify-between items-center">
                  <p className="flex gap-2 items-center">
                    Punctuation & Numbers
                    <Tooltip
                      text={"Include punctuation marks and numbers in text"}
                    />
                  </p>
                  <Checkbox
                    id={2}
                    value={punctuationAndNumbers}
                    setValue={setPunctuationAndNumbers}
                  />
                </div>
                {/* Quote Mode */}
                <div className="flex justify-between items-center">
                  <p className="flex gap-2 items-center">
                    Quote Mode
                    <Tooltip text={"Type quotes of famous personalities"} />
                  </p>
                  <Checkbox id={3} value={quoteMode} setValue={setQuoteMode} />
                </div>
                {/* Programming Syntax Mode */}
                <div className="flex justify-between items-center">
                  <p className="flex gap-2 items-center">
                    Programming Syntax Mode
                    <Tooltip
                      text={"Practice typing syntax of programming languages"}
                    />
                  </p>
                  <Checkbox
                    id={4}
                    value={programmingSyntaxMode}
                    setValue={setProgrammingSyntaxMode}
                  />
                </div>
                {/* Blind Mode */}
                <div className="flex justify-between items-center">
                  <p className="flex gap-2 items-center">
                    Blind Mode
                    <Tooltip text={"Previous text disappears as you type"} />
                  </p>
                  <Checkbox id={5} value={blindMode} setValue={setBlindMode} />
                </div>
                {/* Sudden Death Mode */}
                <div className="flex justify-between items-center">
                  <p className="flex gap-2 items-center">
                    Sudden Death Mode
                    <Tooltip
                      text={
                        "Test ends immediately upon making a single mistake"
                      }
                    />
                  </p>
                  <Checkbox
                    id={6}
                    value={suddenDeathMode}
                    setValue={setSuddenDeathMode}
                  />
                </div>
                {/* Zen Mode */}
                <div className="flex justify-between items-center">
                  <p className="flex gap-2 items-center">
                    Zen Mode
                    <Tooltip
                      text={
                        "UI-free experience that removes all timers and stats"
                      }
                    />
                  </p>
                  <Checkbox id={7} value={zenMode} setValue={setZenMode} />
                </div>
              </div>
            )}
            {selectedTab === "Customization" && (
              <div className="flex flex-col gap-4">
                {/* Theme */}
                <div className="flex justify-between items-center">
                  <p>Theme</p>
                  <select
                    className="bg-white border border-gray-300 shadow-xs rounded-sm px-2 py-0.5 outline-none"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                  >
                    <option value="" hidden>
                      Theme
                    </option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                </div>
                {/* Font */}
                <div className="flex justify-between items-center">
                  <p>Font</p>
                  <select
                    className="bg-white border border-gray-300 shadow-xs rounded-sm px-2 py-0.5 outline-none"
                    value={font}
                    onChange={(e) => setFont(e.target.value)}
                  >
                    <option value="" hidden>
                      Font
                    </option>
                    <option value="monospace">Monospace</option>
                    <option value="fira-code">Fira Code</option>
                  </select>
                </div>
                {/* Sound Effects */}
                <div className="flex justify-between items-center">
                  <p className="flex gap-2 items-center">Sound Effects</p>
                  <Checkbox
                    id={8}
                    value={soundEffects}
                    setValue={setSoundEffects}
                  />
                </div>
                {/* Highlight Next Key */}
                <div className="flex justify-between items-center">
                  <p className="flex gap-2 items-center">Highlight Next Key</p>
                  <Checkbox
                    id={9}
                    value={highlightNextKey}
                    setValue={setHighlightNextKey}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>,
    document.querySelector("#portal"),
  );
};

export default Settings;
