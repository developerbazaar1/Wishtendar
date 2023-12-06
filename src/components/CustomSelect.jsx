import React, { useState, useEffect, useRef } from "react";
import "../CustomSlect.css"; // Create a CSS file and import it here

const CustomSelect = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!selectRef.current.contains(e.target)) {
        closeAllSelect();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    closeAllSelect();
  };

  const closeAllSelect = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`custom-select ${isOpen ? "select-arrow-active" : ""}`}
      ref={selectRef}
    >
      <div className="select-selected" onClick={handleSelectClick}>
        {selectedOption.label}
      </div>
      <div className={`select-items ${isOpen ? "" : "select-hide"}`}>
        {options.map((option) => (
          <div
            key={option.value}
            className={`select-item ${
              selectedOption.value === option.value ? "same-as-selected" : ""
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
