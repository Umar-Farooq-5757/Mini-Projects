import keyboardLayout from "@/utils/keysData";

export default function Keyboard({ currentKeyToPress }) {
  return (
    <div className="w-[70vw] my-12 space-y-2 bg-white shadow-xs rounded-md p-3">
      {keyboardLayout.map((row, index) => {
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
                      : "bg-gray-200"
                  } py-1 rounded-md flex justify-center items-center select-none ${
                    key.label.length > 1 ? "text-sm" : "text-lg"
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
