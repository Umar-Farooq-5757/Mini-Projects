import React from "react";
import { FaGithub } from "react-icons/fa6";
import { PiClipboardText } from "react-icons/pi";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-32 py-3 shadow1 bg-[#fbfcf8]">
      <div className="flex justify-center items-center gap-2">
        <PiClipboardText className="size-7 text-green-600"/>
        <h1 className="font-semibold text-2xl">TO-DO App</h1>
      </div>
      <a
        href="https://github.com/umar-farooq-5757/mini-projects"
        target="_blank"
      >
        <FaGithub className="size-6" />
      </a>
    </header>
  );
};

export default Header;
