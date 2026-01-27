import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [developer, setDeveloper] = useState("Umar Farooq");
  const [targetText, setTargetText] = useState(
    "Challenge yourself with this engaging paragraph designed to accurately measure your typing speed and accuracy. Focus on speed without sacrificing precision; every correctly typed word contributes to your final score. Track your progress, identify your weaknesses, and watch your typing skills improve with every attempt.!",
  );
  const value = {
    developer,targetText
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
