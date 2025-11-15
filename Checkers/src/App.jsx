import "./App.css";

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
      <div className="w-[704px] h-[704px] mx-auto mt-10 border border-black/30 rounded-sm overflow-hidden">
        {board.map((row) => {
          return (
            <div className="flex">
              {row.map((box) => {
                return box == "w" ? (
                  <div className="h-[88px] w-[88px] bg-white"></div>
                ) : (
                  <div className="h-[88px] w-[88px] bg-gray-500"></div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
