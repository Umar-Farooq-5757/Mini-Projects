import { useState } from "react";

const NumberInput = ({ min, max, value, setValue }) => {
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (newValue >= min && newValue <= max) {
      setValue(newValue);
    }
    setIsValid(!isNaN(numVal) && numVal >= min && numVal <= max);
  };

  return (
    <div className="w-42 sm:w-52">
      <input
        type="number"
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        className={`
          w-full px-4 py-2 text-black border rounded-lg transition-colors duration-200
          focus:outline-none focus:border-[#00d2f3] focus:ring-1 focus:ring-[#00d2f3]
          ${!isValid ? "border-red-400" : "border-gray-300"}
        `}
        placeholder={`Enter number (${min}-${max})`}
      />

      {!isValid && (
        <p className="text-red-500 text-sm mt-1">
          Must be between {min} and {max}
        </p>
      )}
    </div>
  );
};
export default NumberInput;
