import React, { useState } from "react";

const Checkbox = ({ label = "label", id, value, setValue }) => {
  // const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setValue(!value);
  };

  return (
    <div className="checkbox-wrapper">
      <input
        checked={value}
        onChange={handleCheckboxChange}
        id={id}
        className="input"
        type="checkbox"
      />
      <label htmlFor={id} className="checkbox"></label>
      {/* <label for="checkbox" class="label">
        {label}
      </label> */}
    </div>
  );
};

export default Checkbox;
