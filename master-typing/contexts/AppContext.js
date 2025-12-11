"use client";

import React, { createContext, useContext, useState, useMemo, useEffect } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState("Umar");
  const [theme, setTheme] = useState('theme-light');
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'theme-light';
    setTheme(storedTheme);
  }, []);
  const changeTheme = (newTheme)=>{
    setTheme(newTheme)
    localStorage.setItem('theme',newTheme)
  }
  const contextValue = useMemo(
    () => ({
      user,
      theme,
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
