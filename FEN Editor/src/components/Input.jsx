import { useState } from "react";

function Input({ FEN, setFEN, board, setBoard }) {
  const [error, setError] = useState("");
  const fenToBoard = (fen) => {
    if (!isValidFEN(fen)) {
      setError("Invalid FEN");
      return;
    } else {
      setError("");
    }
    const extractedPosition = fen.split(" ")[0];
    const ranks = extractedPosition.split("/");

    const newBoard = ranks.map((rank) => {
      let boardRow = [];
      for (const char of rank) {
        if (isNaN(char)) {
          boardRow.push(char);
        } else {
          const emptySquares = parseInt(char);
          for (let i = 0; i < emptySquares; i++) {
            boardRow.push("0");
          }
        }
      }
      return boardRow;
    });
    setBoard(newBoard);
  };
  function isValidFEN(fen) {
    const tokens = fen.split(/\s+/);
    if (tokens.length !== 6) return false;

    const [
      piecePlacement,
      sideToMove,
      castling,
      enPassant,
      halfMove,
      fullMove,
    ] = tokens;

    const ranks = piecePlacement.split("/");
    if (ranks.length !== 8) return false;

    const rankRegex = /^([pnbrqkPNBRQK1-8]+)$/;
    for (let rank of ranks) {
      if (!rankRegex.test(rank)) return false;

      let count = 0;
      for (let char of rank) {
        if (isNaN(char)) {
          count += 1;
        } else {
          count += parseInt(char);
        }
      }
      if (count !== 8) return false;
    }
    if (!/^(w|b)$/.test(sideToMove)) return false;

    if (!/^(-|[KQkq]{1,4})$/.test(castling)) return false;

    if (!/^(-|[a-h][36])$/.test(enPassant)) return false;

    if (isNaN(halfMove) || isNaN(fullMove) || halfMove < 0 || fullMove < 0)
      return false;

    return true;
  }
  return (
    <section className="mx-auto w-[95vw] sm:w-[80vw] md:w-[65vw] lg:w-[50vw]">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-xl">FEN</h2>
        <div className="text-red-400 font-mono">{error}</div>
      </div>
      <div className="bg-[#222] my-2 py-1.5 px-2 rounded-sm">
        <input
          className="outline-none w-full"
          type="text"
          value={FEN}
          onChange={(e) => setFEN(e.target.value)}
          placeholder={FEN}
          spellCheck="false"
        />
      </div>
      <button
        onClick={() => fenToBoard(FEN)}
        className="bg-white text-black rounded-sm px-5 py-1 my-1 font-semibold hover:opacity-75 transition-all">
        Apply Changes
      </button>
    </section>
  );
}

export default Input;
