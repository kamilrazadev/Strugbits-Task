import React from "react";

const HeroBanner = () => {
  return (
    <header className="w-full h-[230px] bg-[url(/hero-bg.jpg)] bg-cover bg-no-repeat bg-center">
      <div className="relative custom-container w-full h-full bg-[#ffffffaf] backdrop-blur-[2px] flex-center flex-col">
        <h1 className="text-4xl font-bold text-center ">Optimized Your Meal</h1>
        <p className="mt-3 text-[12px] text-center">
          Select Meal to Add in Week. You will be able to edit, edit modify or
          change the Meal Weeks.
        </p>
      </div>
    </header>
  );
};

export default HeroBanner;
