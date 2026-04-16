import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  const [FEN, setFEN] = useState(
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
  );
  const [board, setBoard] = useState([
    ["r", "n", "b", "q", "k", "b", "n", "r"],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ]);
  return (
    <main className="bg-[#16171d] text-white min-h-screen">
      <Header />
      <Board FEN={FEN} setFEN={setFEN} board={board} setBoard={setBoard} />
      <Input FEN={FEN} setFEN={setFEN} board={board} setBoard={setBoard} />
    </main>
  );
}

export default App;
