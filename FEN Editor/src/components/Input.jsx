function Input({ FEN, setFEN, board, setBoard }) {
  const fenToBoard = (fen) => {
    const extractedPosition = fen.split(" ")[0];
    const ranks = extractedPosition.split("/");

    const newBoard = ranks.map((rank) => {
      let boardRow = [];
      for(const char of rank){
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

  return (
    <section className="mx-auto w-[95vw] sm:w-[80vw] md:w-[65vw] lg:w-[50vw]">
      <h2 className="font-semibold text-xl">FEN</h2>
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
