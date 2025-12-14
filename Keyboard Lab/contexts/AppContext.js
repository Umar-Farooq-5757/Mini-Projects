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
  const [user, setUser] = useState("Umar");
  const [theme, setTheme] = useState("theme-light");
  const [info, setInfo] = useState({});

  const [targetText, setTargetText] = useState(
    "Challenge yourself with this engaging paragraph designed to accurately measure your typing speed and accuracy. Focus on speed without sacrificing precision; every correctly typed word contributes to your final score. Track your progress, identify your weaknesses, and watch your typing skills improve with every attempt.!"
  );
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        setInfo(JSON.parse(localStorage.getItem("userinfo")) || {});
      } catch (e) {
        console.error("Could not parse user info from localStorage", e);
      }
    }
  }, []);
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
      user,
      theme,
      targetText,
      setTargetText,
      info,
      setInfo,
    }),
    [user, theme]
  );
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  return context;
}
