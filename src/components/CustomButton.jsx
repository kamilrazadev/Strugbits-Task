import React from "react";

const CustomButton = ({ onClickBtn, isDisabled, text }) => {
  return (
    <button
      className={`sm:py-2 py-1 sm:px-8 px-6 rounded-sm text-[12px] text-white ${
        isDisabled ? "bg-gray-400" : "bg-my-blue"
      }`}
      onClick={onClickBtn}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default CustomButton;
