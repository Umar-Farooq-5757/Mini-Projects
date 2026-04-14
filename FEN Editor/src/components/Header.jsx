import { FaGithub, FaLinkedin } from "react-icons/fa"

function Header() {

  return (
    <header className="flex justify-between items-center px-3.5 sm:px-10 shadow-xs shadow-[#434343] py-3">
      <h1 className="font-bold text-3xl">FEN Editor</h1>
      <div className="flex justify-center items-center gap-6">
        <a className="cursor-default" href="https://www.github.com/Umar-Farooq-5757/Mini-Projects/tree/main/FEN%20Editor" target="_blank"><FaGithub className="size-5.5 opacity-75 hover:opacity-100"/></a>
        <a className="cursor-default" href="https://www.linkedin.com/in/umarfarooq57" target="_blank"><FaLinkedin className="size-5.5 opacity-75 hover:opacity-100 hover:text-blue-400"/></a>
      </div>
    </header>
  )
}

export default Header
