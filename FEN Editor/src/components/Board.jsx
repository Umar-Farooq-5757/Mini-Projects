import { useState } from "react";
import pieces from "../utils/pieces";

function Board({ FEN, setFEN, board, setBoard }) {
  const colors = [
    ["w", "b", "w", "b", "w", "b", "w", "b"],
    ["b", "w", "b", "w", "b", "w", "b", "w"],
    ["w", "b", "w", "b", "w", "b", "w", "b"],
    ["b", "w", "b", "w", "b", "w", "b", "w"],
    ["w", "b", "w", "b", "w", "b", "w", "b"],
    ["b", "w", "b", "w", "b", "w", "b", "w"],
    ["w", "b", "w", "b", "w", "b", "w", "b"],
    ["b", "w", "b", "w", "b", "w", "b", "w"],
  ];
  return (
    <section className="flex justify-center items-center mt-8 mb-6">
      <div className="w-[95vw] sm:w-[80vw] md:w-[65vw] lg:w-[50vw] aspect-square">
        {board.map((rank, idx) => {
          return (
            <div className="flex" key={idx}>
              {rank.map((square, i) => {
                return (
                  <div
                    style={{
                      backgroundColor:
                        colors[idx][i] == "w" ? "#f8f8f8" : "#616162",
                    }}
                    className="w-1/8 bg-[#666] aspect-square flex items-center justify-center"
                    key={i}>
                    {square!='0' && (
                      <img src={pieces.find(p=>p.symbol==square).png} alt={square} />
                    )}
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
