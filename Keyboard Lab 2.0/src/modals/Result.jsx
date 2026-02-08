import React, { useEffect, useState } from "react";
import { useAppContext } from "../contexts/AppContext";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
const ProgressBar = ({
  value,
  maxValue = 100,
  label,
  suffix = "",
  color = "#3b82f6",
  size = 160,
  strokeWidth = 12,
  duration = 2000,
}) => {
  const [progress, setProgress] = useState(0);
  const [displayValue, setDisplayValue] = useState(0);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / maxValue) * circumference;

  useEffect(() => {
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progressValue = Math.min((elapsed / duration) * value, value);

      setProgress(progressValue);
      setDisplayValue(Math.floor(progressValue));

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, duration]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        {/* Background circle */}
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 0.1s ease",
              filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))",
            }}
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-gray-800">
            {displayValue}
            {suffix}
          </span>
          <span className="text-sm font-medium text-gray-500 mt-1">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};
const Result = ({ wpm, cpm }) => {
  const { isResultModalOpen, setIsResultModalOpen, countingMode } =
    useAppContext();
  return createPortal(
    <div
      onClick={() => setIsResultModalOpen(false)}
      className={`fixed top-0 left-0 right-0 bottom-0 ${!isResultModalOpen && "hidden"} bg-black/40 flex items-center justify-center`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-1/2 h-2/3 rounded-md shadow-sm px-6 py-5"
      >
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-semibold text-xl">Test Result</h2>
          <button onClick={() => setIsResultModalOpen(false)}>
            <X className="size-5 text-gray-600" />
          </button>
        </div>
        {countingMode == "wpm" ? (
          <ProgressBar
            value={wpm}
            maxValue={100}
            label="WPM"
            suffix=""
            color="#8b5cf6"
            size={180}
            strokeWidth={14}
            duration={1000}
          />
        ) : (
          <ProgressBar
            value={cpm}
            maxValue={100}
            label="CPM"
            suffix=""
            color="#8b5cf6"
            size={180}
            strokeWidth={14}
            duration={1000}
          />
        )}
      </div>
    </div>,
    document.querySelector("#portal"),
  );
};

export default Result;
