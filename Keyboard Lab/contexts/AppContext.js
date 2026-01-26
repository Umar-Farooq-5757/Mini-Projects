"use client";

import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [isSettingsOpen, setIsSettingsOpen] = useState(true);
  const [targetText, setTargetText] = useState(
    "Challenge yourself with this engaging paragraph designed to accurately measure your typing speed and accuracy. Focus on speed without sacrificing precision; every correctly typed word contributes to your final score. Track your progress, identify your weaknesses, and watch your typing skills improve with every attempt.!"
  );

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
  }, []);
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // SETTINGS
  // Typing Engine
  const [countingMode, setCountingMode] = useState("wpm");
  const [backspaceBehavior, setBackspaceBehavior] = useState("Correct Errors");
  const [quickReset, setQuickReset] = useState(false);
  const [caretStyle, setCaretStyle] = useState("Block");
  const [caretAnimation, setCaretAnimation] = useState("Solid");
  // Content & Modes
  const [punctuationAndNumbers, setPunctuationAndNumbers] = useState(false);
  const [quoteMode, setQuoteMode] = useState(false);
  const [programmingSyntaxMode, setProgrammingSyntaxMode] = useState(false);
  const [blindMode, setBlindMode] = useState(false);
  const [suddenDeathMode, setSuddenDeathMode] = useState(false);
  const [zenMode, setZenMode] = useState(false);
  // Customization (The Feel)
  const [font, setFont] = useState("monospace");
  const [soundEffects, setSoundEffects] = useState(true);
  const [highlightNextKey, setHighlightNextKey] = useState(true);

  const contextValue = useMemo(
    () => ({
      theme,
      changeTheme,
      targetText,
      setTargetText,
      isSettingsOpen,
      setIsSettingsOpen,
      countingMode,
      setCountingMode,
      backspaceBehavior,
      setBackspaceBehavior,
      quickReset,
      setQuickReset,
      caretStyle,
      setCaretStyle,
      caretAnimation,
      setCaretAnimation,
      punctuationAndNumbers,
      setPunctuationAndNumbers,
      quoteMode,
      setQuoteMode,
      programmingSyntaxMode,
      setProgrammingSyntaxMode,
      blindMode,
      setBlindMode,
      suddenDeathMode,
      setSuddenDeathMode,
      zenMode,
      setZenMode,
      font,
      setFont,
      soundEffects,
      setSoundEffects,
      highlightNextKey,
      setHighlightNextKey,
    }),
    [theme, targetText, setTargetText]
  );
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  return context;
}
