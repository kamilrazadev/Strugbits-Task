import React, { useState } from "react";
import { tabsData } from "../constants";
import CustomButton from "./CustomButton";

const AddToWeekModal = ({ isOpen, onClose, onAssign }) => {
  const [selectedWeeks, setSelectedWeeks] = useState([]);

  const handleWeekSelect = (week) => {
    setSelectedWeeks((prev) =>
      prev.includes(week) ? prev.filter((w) => w !== week) : [...prev, week]
    );
  };

  const handleSave = () => {
    onAssign(selectedWeeks);
    setSelectedWeeks([]);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 z-40 bg-[#0000004e] w-full h-screen flex-center"
          onClick={onClose}
        >
          <div
            className="max-w-[90%] bg-white p-10 rounded-xl flex-center flex-col gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-center text-xl font-bold">Select Weeks</h3>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {tabsData.slice(1).map((week, key) => (
                <button
                  key={key}
                  className={`py-2 px-4 rounded-md ${
                    selectedWeeks.includes(week.value)
                      ? "bg-my-blue text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handleWeekSelect(week.value)}
                >
                  {week.placeholder}
                </button>
              ))}
            </div>
            <CustomButton
              onClickBtn={handleSave}
              isDisabled={selectedWeeks.length === 0}
              text={"Save"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AddToWeekModal;
