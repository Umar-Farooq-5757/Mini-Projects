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
  const [theme, setTheme] = useState("theme-light");
  const [isSettingsOpen, setIsSettingsOpen] = useState(true)
  const [targetText, setTargetText] = useState(
    "Challenge yourself with this engaging paragraph designed to accurately measure your typing speed and accuracy. Focus on speed without sacrificing precision; every correctly typed word contributes to your final score. Track your progress, identify your weaknesses, and watch your typing skills improve with every attempt.!"
  );
 
  
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "theme-light";
    setTheme(storedTheme);
  }, []);
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const contextValue = useMemo(
    () => ({
      theme,
      targetText,
      setTargetText,
      isSettingsOpen,
      setIsSettingsOpen
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
