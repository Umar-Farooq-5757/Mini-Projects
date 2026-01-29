import keysData from "../utils/keysData";


export default function Keyboard({ currentKeyToPress }) {
  return (
    <div className="w-full mx-auto my-12 space-y-2 bg-[#fbfbfb] shadow-sm rounded-md p-3">
      {keysData.map((row, index) => {
        return (
          <div key={index} className="grid grid-flow-col gap-1">
            {row.map((key, idx) => {
              return (
                <div
                  key={idx}
                  style={{ gridColumn: `span ${key.space}` }}
                  className={`border border-gray-300 ${
                    (currentKeyToPress?.toUpperCase() == key.label || (currentKeyToPress==' '&&key.label=='Space'))
                      ? "bg-orange-200 text-orange-600"
                      : "bg-[#eee]"
                  } py-2 rounded-md flex justify-center items-center select-none ${
                    key.label.length > 1 ? "text-xs sm:text-sm" : "text-sm sm:text-lg"
                  }`}
                >
                  {key.label}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}