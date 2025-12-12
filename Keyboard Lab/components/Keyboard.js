import keyboardLayout from "@/utils/keysData";

export default function Keyboard() {
  return (
    <div className="my-12 space-y-2">
      {keyboardLayout.map((row, index) => {
        return (
          <div key={index} className="grid grid-flow-col gap-1">
            {row.map((key, idx) => {
              return (
                <div
                  key={idx}
                  style={{ gridColumn: `span ${key.space}` }}
                  className="border border-gray-300 bg-gray-200 py-2 rounded-md text-center select-none"
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
