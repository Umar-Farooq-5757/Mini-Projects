import { useState, useRef, useEffect } from "react";

const Dropdown = ({ items, label = "Select Option" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    item.action && item.action();
    setIsOpen(false);
  };

  return (
    <div className="relative w-36 text-sm sm:w-52" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full px-2 sm:px-4 py-2 text-left bg-white border rounded-lg shadow-sm 
          focus:outline-none focus:ring-2 transition-all duration-300 
          flex items-center justify-between
          ${
            isOpen
              ? "border-[#00d2f3] ring-2 ring-[#00d2f3] ring-opacity-30 shadow-md"
              : "border-gray-300 hover:border-[#2a82ff] hover:shadow-md"
          }
        `}
      >
        <span className="text-gray-700 truncate">
          {selectedItem ? (
            <span className="flex items-center space-x-2">
              {selectedItem.icon && <span>{selectedItem.icon}</span>}
              <span>{selectedItem.label}</span>
            </span>
          ) : (
            label
          )}
        </span>
        <svg
          className={`
            w-5 h-5 text-gray-400 transform transition-transform duration-300
            ${isOpen ? "rotate-180 text-[#00d2f3]" : ""}
          `}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu with Animations */}
      <div
        className={`
        absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg 
        shadow-xl overflow-hidden transition-all duration-300 transform origin-top
        ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }
      `}
      >
        <ul className="py-1">
          {items.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleItemClick(item)}
                className={`
                  w-full px-4 py-3 text-left transition-all duration-200 
                  flex items-center space-x-3 group relative overflow-hidden
                   active:scale-95 
                  ${
                    selectedItem?.label === item.label
                      ? "bg-gradient-to-r from-[#00d2f3] to-[#2a82ff] text-white"
                      : "hover:bg-gradient-to-r hover:from-[#00d2f320] hover:to-[#2a82ff20]"
                  }
                `}
              >
                {/* Animated background effect */}
                <div
                  className={`
                  absolute inset-0 bg-gradient-to-r from-[#00d2f3] to-[#2a82ff] 
                  transition-transform duration-300 transform -translate-x-full
                  group-hover:translate-x-0 opacity-10
                `}
                />

                {/* Item content */}
                <span className="relative z-10 flex items-center space-x-0 sm:space-x-3">
                  {item.icon && (
                    <span
                      className={`
                      text-lg transition-transform duration-300 
                      group-hover:scale-110 group-hover:text-white
                      ${
                        selectedItem?.label === item.label
                          ? "text-white"
                          : "text-gray-600"
                      }
                    `}
                    >
                      {item.icon}
                    </span>
                  )}
                  <span
                    className={`
                    font-medium transition-all duration-300 text-sm sm:text-md
                    ${
                      selectedItem?.label === item.label
                        ? "text-white"
                        : "text-gray-700"
                    }
                  `}
                  >
                    {item.label}
                  </span>
                </span>

                {/* Selection indicator */}
                {selectedItem?.label === item.label && (
                  <svg
                    className="w-4 h-4 ml-auto relative z-10 animate-bounce"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Ripple Effect Container */}
      <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
        <div
          className={`
          absolute inset-0 bg-[#00d2f3] opacity-0 rounded-lg transition-all duration-500
          ${isOpen ? "opacity-10 scale-100" : "opacity-0 scale-50"}
        `}
        />
      </div>
    </div>
  );
};
export default Dropdown;
