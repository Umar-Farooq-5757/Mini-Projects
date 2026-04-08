import { X } from "lucide-react";
import { createPortal } from "react-dom";

function Settings({ areSettingsOpen, setAreSettingsOpen }) {
  return createPortal(
    <div
      onClick={() => setAreSettingsOpen(false)}
      className={`${!areSettingsOpen && "hidden"} fixed inset-0 flex justify-center items-center bg-black/20`}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#333333] h-1/2 w-3/4 rounded-sm shadow-md text-white px-5 py-4">
        <div className="flex justify-between items-center">
          <h2>Settings</h2>
          <button onClick={()=>setAreSettingsOpen(false)}>
            <X />
          </button>
        </div>
      </div>
    </div>,
    document.querySelector("#portal"),
  );
}

export default Settings;
