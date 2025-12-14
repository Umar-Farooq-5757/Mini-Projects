import { UserInfo } from "./modals/UserInfo";

export default function Header() {
    
  return (
    <header className="border-b-2 h-14 bg-white flex justify-between items-center px-10 py-5">
      <h1>keyboard lab</h1>
      <UserInfo/>
    </header>
  )
}
