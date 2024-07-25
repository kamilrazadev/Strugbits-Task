import React from "react";
import { tabsData } from "../constants";
import CustomButton from "./CustomButton";
import SideMenuBar from "./SideMenuBar";

const FoodTab = ({
  selected,
  selectThisTab,
  addToWeek,
  isAddToWeekDisabled,
}) => {
  return (
    <div className="sticky top-0 z-30 custom-container py-7 bg-white w-full h-fit">
      <div className="flex justify-between gap-32">
        <div className="flex-1 sm:grid hidden grid-cols-5">
          {tabsData.map((value, key) => (
            <button
              key={key}
              className={`w-full text-[12px] font-semibold py-2 transition-all ${
                selected === value.value
                  ? "border-my-blue border-b-4 text-my-blue"
                  : ""
              }`}
              onClick={() => selectThisTab(value.value)}
            >
              {value.placeholder}
            </button>
          ))}
        </div>
        <div className="sm:hidden block">
          <SideMenuBar selectThisTab={selectThisTab} selected={selected} />
        </div>
        <CustomButton
          onClickBtn={addToWeek}
          isDisabled={isAddToWeekDisabled}
          text={"Add to Week"}
        />
      </div>
    </div>
  );
};

export default FoodTab;
