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
 
  const colors = [
    ["b", "w", "b", "w", "b", "w", "b", "w"],
    ["w", "b", "w", "b", "w", "b", "w", "b"],
    ["b", "w", "b", "w", "b", "w", "b", "w"],
    ["w", "b", "w", "b", "w", "b", "w", "b"],
    ["b", "w", "b", "w", "b", "w", "b", "w"],
    ["w", "b", "w", "b", "w", "b", "w", "b"],
    ["b", "w", "b", "w", "b", "w", "b", "w"],
    ["w", "b", "w", "b", "w", "b", "w", "b"],
  ];
  return (
    <section className="flex justify-center items-center  my-8 size-">
      <div className="size-[99vw] sm:size-[80vw] md:size-[65vw] lg:size-[50vw] aspect-square">
      {board.map((rank, idx) => {
        return (
          <div className="flex" key={idx}>
            {rank.map((square, i) => {
              return (
                <div
                style={{backgroundColor:colors[idx][i]=='w'?'#f8f8f8':'#616162'}}
                  className="size-1/8 bg-[#666] aspect-square border border-[#555] flex items-center justify-center"
                  key={i}>
                  {square == 'r' && <img src={pieces.find(piece=>piece.symbol=='r').png}/>}
                  {square == 'R' && <img src={pieces.find(piece=>piece.symbol=='R').png}/>}
                  {square == 'b' && <img src={pieces.find(piece=>piece.symbol=='b').png}/>}
                  {square == 'B' && <img src={pieces.find(piece=>piece.symbol=='B').png}/>}
                  {square == 'n' && <img src={pieces.find(piece=>piece.symbol=='n').png}/>}
                  {square == 'N' && <img src={pieces.find(piece=>piece.symbol=='N').png}/>}
                  {square == 'p' && <img src={pieces.find(piece=>piece.symbol=='p').png}/>}
                  {square == 'P' && <img src={pieces.find(piece=>piece.symbol=='P').png}/>}
                  {square == 'q' && <img src={pieces.find(piece=>piece.symbol=='q').png}/>}
                  {square == 'Q' && <img src={pieces.find(piece=>piece.symbol=='Q').png}/>}
                  {square == 'k' && <img src={pieces.find(piece=>piece.symbol=='k').png}/>}
                  {square == 'K' && <img src={pieces.find(piece=>piece.symbol=='K').png}/>}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
    </section>
  );
}

export default Board;
