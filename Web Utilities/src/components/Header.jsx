import React from "react";
import { FaGithub } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="bg-[#fbfcf8] select-none shadow-md px-20 py-2 flex justify-between items-center">
      <h1 className="inline-block animate-pulse text-3xl font-bold bg-gradient-to-r from-[#00d2f3] to-[#2a82ff] bg-clip-text text-transparent">
        Web Utilities
      </h1>
      <a
        href="https://github.com/umar-farooq-5757/mini-projects"
        target="_blank"
        className="cursor-pointer"
      >
        <FaGithub className="size-7 invert" />
      </a>
    </header>
  );
};

export default Header;
