import React from "react";
import HeroBanner from "./components/HeroBanner";
import FoodMainComponent from "./components/FoodMainComponent";

const App = () => {
  return (
    <main className="font-inter text-[#222222]">
      <HeroBanner />
      <FoodMainComponent/>
    </main>
  );
};

export default App;
