import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [developer, setDeveloper] = useState("Umar Farooq");
  const [areSettingsOpen, setAreSettingsOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [targetText, setTargetText] = useState(
    "Challenge yourself with this engaging paragraph designed to accurately measure your typing speed and accuracy. Focus on speed without sacrificing precision; every correctly typed word contributes to your final score. Track your progress, identify your weaknesses, and watch your typing skills improve with every attempt.",
  );

  const [countingMode, setCountingMode] = useState("wpm");
  const [backspaceBehavior, setBackspaceBehavior] = useState("correct-errors");
  const [quickReset, setQuickReset] = useState(true);
  const [caretStyle, setCaretStyle] = useState("line");
  const [punctuationAndNumbers, setPunctuationAndNumbers] = useState(false);
  const [quoteMode, setQuoteMode] = useState(false);
  const [programmingSyntaxMode, setProgrammingSyntaxMode] = useState(false);
  const [blindMode, setBlindMode] = useState(false);
  const [suddenDeathMode, setSuddenDeathMode] = useState(false);
  const [zenMode, setZenMode] = useState(false);
  const [theme, setTheme] = useState("light");
  const [font, setFont] = useState("monospace");
  const [soundEffects, setSoundEffects] = useState(true);
  const [highlightNextKey, setHighlightNextKey] = useState(true);
  const value = {
    developer,
    targetText,
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
    isResultModalOpen,
    setIsResultModalOpen,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
