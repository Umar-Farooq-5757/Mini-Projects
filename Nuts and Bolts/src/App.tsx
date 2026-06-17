import { useState } from "react";
import "./App.css";

function App() {
  const [currentNut, setCurrentNut] = useState<string>("");
  const [nutRemovedFrom, setNutRemovedFrom] = useState<number>(-1);
  // const [boltsArray, setBoltsArray] = useState<string[][]>([
  //   ["green", "green", "blue"],
  //   ["red", "blue", "blue"],
  //   ["red", "red", "yellow"],
  //   ["green", "yellow", "yellow"],
  //   [],
  //   [],
  // ]);
  const [boltsArray, setBoltsArray] = useState<string[][]>([
    ["blue", "green", "green"],
    ["blue", "blue", "red"],
    ["yellow", "red", "red"],
    ["yellow", "yellow", "green"],
    [],
    [],
  ]);
  const unscrew = (index: number) => {
    if (currentNut !== "") return;
    let clickedBolt = boltsArray[index];
    if (clickedBolt.length !== 0) {
      setCurrentNut(clickedBolt.at(-1) ?? "");
      setNutRemovedFrom(index);
      setBoltsArray((prev) =>
        prev.map((row, rowIdx) => {
          if (index !== rowIdx) {
            return row;
          }
          return row.slice(0, -1);
        }),
      );
    }
  };
  const screw = (index: number) => {
    let clickedArr = boltsArray[index];
    const isValidMove =
      clickedArr.length === 0 ||
      (clickedArr.length < 3 && clickedArr.at(-1) === currentNut);
    const targetIndex = isValidMove ? index : nutRemovedFrom;
    console.log(clickedArr);
    setBoltsArray((prev) =>
      prev.map((arr, idx) => {
        if (idx !== targetIndex) {
          return arr;
        }
        return [...arr, currentNut];
      }),
    );

    setCurrentNut("");
    setNutRemovedFrom(-1);
  };
  return (
    <>
      {currentNut !== "" && (
        <div className="fixed text-white left-1/2 -translate-x-1/2">
          <p>Current nut</p>
          <div
            style={{ backgroundColor: currentNut }}
            className="w-20 h-10 border border-white"></div>
        </div>
      )}
      <div className="flex justify-between items-center px-1 sm:px-5 md:px-20 bg-gray-700 min-h-screen">
        {boltsArray.map((arr, index) => {
          return (
            <div
              onClick={() =>
                currentNut === "" ? unscrew(index) : screw(index)
              }
              key={index}
              className="bg-gray-500 h-40 w-8 sm:w-16 flex flex-col-reverse items-center justify-start gap-1">
              {/* nut */}
              {arr.map((color, idx) => {
                return (
                  <div
                    key={idx}
                    className="w-full h-1/5 border border-white"
                    style={{ backgroundColor: color }}></div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
