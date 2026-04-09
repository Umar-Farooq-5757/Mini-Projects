import { Check, X } from "lucide-react";
import { createPortal } from "react-dom";

function Settings({
  areSettingsOpen,
  setAreSettingsOpen,
  selectedTheme,
  setSelectedTheme,
}) {
  const themeColors = [
    {
      name: "teal",
      value: "#00bba7",
    },
    {
      name: "cyan",
      value: "#00b8db",
    },
    {
      name: "pink",
      value: "#f6339a",
    },
    {
      name: "rose",
      value: "#ff637e",
    },
    {
      name: "orange",
      value: "#ff6900",
    },
    {
      name: "green",
      value: "#00a63e",
    },
  ];
  return createPortal(
    <div
      onClick={() => setAreSettingsOpen(false)}
      className={`${!areSettingsOpen && "hidden"} fixed inset-0 flex justify-center items-center bg-black/20`}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#333333] h-1/2 w-3/4 rounded-sm shadow-md text-white px-5 py-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl">Settings</h2>
          <button onClick={() => setAreSettingsOpen(false)}>
            <X />
          </button>
        </div>
        <div className="bg-black/25 h-0.5 w-full mt-2 mb-3"></div>
        {/* Theme */}
        <div>
          <h3>Theme</h3>
          <div className="flex justify-between items-center my-3">
            {themeColors.map((color) => {
              return (
                <div
                  onClick={() => setSelectedTheme(color.value)}
                  key={color.value}
                  style={{ backgroundColor: color.value }}
                  className="size-9.5 rounded-full flex items-center justify-center">
                  {selectedTheme == color.value && <Check />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#portal"),
  );
}

export default Settings;
