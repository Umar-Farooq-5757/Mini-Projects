import { SlidersHorizontal } from "lucide-react";
import { FaSquareGithub } from "react-icons/fa6";
import React from "react";
import { useAppContext } from "../contexts/AppContext";

const Header = () => {
  const { setAreSettingsOpen } = useAppContext();
  return (
    <header className="bg-white py-3 px-28 flex items-center justify-between shadow-sm">
      <h1>Keyboard Lab</h1>
      <div className="flex items-center justify-center gap-6">
        <button
          className="cursor-pointer"
          onClick={() => setAreSettingsOpen(true)}
        >
          <SlidersHorizontal className="size-6" />
        </button>
        <a
          href="https://github.com/Umar-Farooq-5757/Mini-Projects/tree/main/Keyboard%20Lab%202.0"
          target="_blank"
        >
          {" "}
          <button className="cursor-pointer text-gray-800">
            <FaSquareGithub className="size-6" />
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
