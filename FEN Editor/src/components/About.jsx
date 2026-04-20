import { IoClose } from "react-icons/io5";

function About({ isAboutOpen, setIsAboutOpen }) {
  return (
    <section
      onClick={() => setIsAboutOpen(false)}
      className={`${!isAboutOpen && "hidden"} bg-black/25 fixed inset-0 flex items-center justify-center`}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="px-5 py-4 rounded-md bg-[#333] shadow-md h-3/4 w-9/10 overflow-y-auto about">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl">About</h2>
          <button onClick={() => setIsAboutOpen(false)}>
            <IoClose className="size-7" />
          </button>
        </div>
        <div className="bg-black/25 h-0.5 w-full mt-2 mb-3"></div>
        {/* What is FEN */}
        <h1 className="font-semibold text-lg">What is FEN?</h1>
        <p className="text-[15px]">
          FEN (Forsyth-Edwards Notation) is a way of representing exact position
          in a chess game. It tells you exactly what the board looks like at a
          single moment in time. In just one line of text, FEN captures
          everything needed to resume a game perfectly
        </p>
        <div className="bg-black/25 h-0.5 w-full my-4"></div>
        {/* How it works? */}
        <h1 className="font-semibold text-lg">How it works?</h1>
        <p className="text-[15px]">
          A FEN string is divided into six sections, separated by spaces.
        </p>
        <div>
          <p className="font-semibold mt-3">1. Piece Placement</p>
          <p>The board is scanned rank by rank (from top to bottom).</p>
          <ul className="list-disc list-inside">
            <li>
              Uppercase letters are White pieces (e.g., R for Rook, N for
              Knight).
            </li>
            <li>
              Lowercase letters are Black pieces (e.g., q for queen, p for
              pawn).
            </li>
            <li>
              Numbers represent empty squares (e.g., 4 means four empty spots in
              a row).
            </li>
            <li>Slashes (/) separate the rows.</li>
          </ul>
          <p className="font-semibold mt-3">2. Active Color</p>
          <p>A simple w or b to indicate whose turn it is to move.</p>
          <p className="font-semibold mt-3">3. Castling Rights</p>
          <p>
            Shows if players can still castle (e.g., KQkq means both sides have
            all options available).
          </p>
          <p className="font-semibold mt-3">4. En Passant Target</p>
          <p>
            If a pawn just jumped two squares, this records the square behind it
            where it could be captured.
          </p>
          <p className="font-semibold mt-3">5. Halfmove Clock</p>
          <p>
            Tracks the number of moves since the last pawn move or capture (used
            for the 50-move draw rule).
          </p>
          <p className="font-semibold mt-3">6. Fullmove Number</p>
          <p>
            The number of the full turn (starting at 1 and incrementing after
            Black moves).
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
