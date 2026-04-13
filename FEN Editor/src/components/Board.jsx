import { useState } from "react";
import pieces from "../utils/pieces";

function Board() {
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
  console.log(pieces.find(piece=>piece.symbol=='r'))
  return (
    <div className="mx-auto">
      {board.map((rank, idx) => {
        return (
          <div className="flex" key={idx}>
            {rank.map((square, i) => {
              return (
                <div
                  className="size-20 bg-[#666] border border-[#555] flex items-center justify-center"
                  key={i}>
                  {square == 'r' && <div className="size-9">{pieces.find(piece=>piece.symbol=='r').svg}</div>}
                  {square == 'R' && <div className="size-9">{pieces.find(piece=>piece.symbol=='R').svg}</div>}
                  {square == 'b' && <div className="size-9">{pieces.find(piece=>piece.symbol=='b').svg}</div>}
                  {square == 'B' && <div className="size-9">{pieces.find(piece=>piece.symbol=='B').svg}</div>}
                  {square == 'n' && <div className="size-9">{pieces.find(piece=>piece.symbol=='n').svg}</div>}
                  {square == 'N' && <div className="size-9">{pieces.find(piece=>piece.symbol=='N').svg}</div>}
                  {square == 'q' && <div className="size-9">{pieces.find(piece=>piece.symbol=='q').svg}</div>}
                  {square == 'Q' && <div className="size-9">{pieces.find(piece=>piece.symbol=='Q').svg}</div>}
                  {square == 'k' && <div className="size-9">{pieces.find(piece=>piece.symbol=='k').svg}</div>}
                  {square == 'K' && <div className="size-9">{pieces.find(piece=>piece.symbol=='K').svg}</div>}
                  {square == 'p' && <div className="size-9">{pieces.find(piece=>piece.symbol=='p').svg}</div>}
                  {square == 'P' && <div className="size-9">{pieces.find(piece=>piece.symbol=='P').svg}</div>}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Board;
