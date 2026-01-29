import { SlidersHorizontal } from "lucide-react";
import React from "react";
import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  const { setAreSettingsOpen } = useAppContext();
  return (
    <header className="bg-white py-3 px-28 flex items-center justify-between shadow-sm">
      <h1>Keyboard Lab</h1>
      <button
        className="cursor-pointer"
        onClick={() => setAreSettingsOpen(true)}
      >
        <SlidersHorizontal />
      </button>
    </header>
  );
};

export default Header;
