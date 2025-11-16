import "./App.css";
import Piece from "./components/Piece";

function App() {
  const board = [
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
    <div>
      <div className="w-[704px] h-[704px] relative mx-auto mt-10 border border-black/30 rounded-sm overflow-hidden">
        {
        board.map((row,index) => {
          return (
            <div key={index} className="flex">
              {row.map((box,idx) => {
                return (
                  <div
                  key={idx}
                    className={`h-[88px] w-[88px] ${
                      box == "w" ? "bg-[#f6f6f6]" : "bg-[#676868]"
                    } flex justify-center items-center`}
                  >
                    {box == "b" && <Piece color={'white'}/>}
                  </div>
                );
              })}
            </div>
          );
        })
        }
      </div>
    </div>
  );
}

export default App;
