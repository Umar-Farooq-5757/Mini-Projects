import { FaGithub, FaLinkedin } from "react-icons/fa"

function Header() {

  return (
    <header className="flex justify-between items-center px-10 shadow-xs shadow-[#434343] py-3">
      <h1 className="font-bold text-3xl">FEN Editor</h1>
      <div className="flex justify-center items-center gap-6">
        <div><FaGithub className="size-5.5 opacity-75 hover:opacity-100"/></div>
        <div><FaLinkedin className="size-5.5 opacity-75 hover:opacity-100 hover:text-blue-400"/></div>
      </div>
    </header>
  )
}

export default Header
