import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { tabsData } from "../constants";

const SideMenuBar = ({ selectThisTab, selected }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleOnClick = (value) => {
    selectThisTab(value.value);
    setShowSidebar(false);
  };

  return (
    <div>
      <button onClick={() => setShowSidebar(!showSidebar)}>
        <RxHamburgerMenu />
      </button>
      <div
        className={`fixed top-0 ${
          showSidebar ? "left-0" : "left-[100%]"
        } z-40 bg-[#0000004e] w-full h-screen flex justify-end transition-all duration-500`}
        onClick={() => setShowSidebar(false)}
      >
        <div
          className={`w-fit ${
            showSidebar ? "opacity-100" : "opacity-0"
          } min-w-[280px] bg-white p-10 rounded-s-xl flex-center flex-col gap-5 transition-all duration-700`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-2">
            {tabsData.map((value, key) => (
              <button
                key={key}
                className={`w-full text-[12px] font-semibold py-2 transition-all ${
                  selected === value.value
                    ? "border-my-blue border-b-4 text-my-blue"
                    : ""
                }`}
                onClick={() => handleOnClick(value)}
              >
                {value.placeholder}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenuBar;
