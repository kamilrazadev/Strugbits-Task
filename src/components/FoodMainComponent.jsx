import React, { useState } from "react";
import FoodTab from "./FoodTab";
import FoodCardsLayout from "./FoodCardsLayout";
import useFetchMeals from "../hooks/useFetchMeals";
import AddToWeekModal from "./AddToWeekModal";

const FoodMainComponent = () => {
  const { data: allMeals, loading } = useFetchMeals();
  const [selectedTab, setSelectedTab] = useState("allmeals");
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [weekMeals, setWeekMeals] = useState({
    week1: [],
    week2: [],
    week3: [],
    week4: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSetSelectedTab = (tab) => {
    setSelectedTab(tab);
  };

  const handleSelectMeal = (meal) => {
    setSelectedMeals((prevSelectedMeals) =>
      prevSelectedMeals.includes(meal)
        ? prevSelectedMeals.filter((m) => m !== meal)
        : [...prevSelectedMeals, meal]
    );
  };

  const handleAddToWeek = () => {
    if (selectedTab === "allmeals" && selectedMeals.length > 0) {
      setIsModalOpen(true);
    }
  };

  const handleAssignToWeeks = (weeks) => {
    setWeekMeals((prevWeekMeals) => {
      const updatedWeekMeals = { ...prevWeekMeals };

      weeks.forEach((week) => {
        const existingMeals = updatedWeekMeals[week];
        updatedWeekMeals[week] = [
          ...existingMeals,
          ...selectedMeals.filter(
            (meal) =>
              !existingMeals.some((existingMeal) => existingMeal.id === meal.id)
          ),
        ];
      });

      return updatedWeekMeals;
    });

    setSelectedMeals([]);
    setIsModalOpen(false);
  };

  const handleDeleteMeal = (meal, week) => {
    setWeekMeals((prevWeekMeals) => {
      const updatedWeekMeals = { ...prevWeekMeals };

      if (week) {
        updatedWeekMeals[week] = updatedWeekMeals[week].filter(
          (existingMeal) => existingMeal.id !== meal.id
        );
      }

      return updatedWeekMeals;
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gradient-to-r from-[#FAF3EC] via-[#F9E9F8] to-[#E3F3FA]">
      <div className="custom-container py-6">
        <h2 className="text-xl font-semibold">Week Orders</h2>
      </div>
      <FoodTab
        selected={selectedTab}
        selectThisTab={handleSetSelectedTab}
        addToWeek={handleAddToWeek}
        isAddToWeekDisabled={
          selectedTab !== "allmeals" || selectedMeals.length === 0
        }
      />
      {selectedTab !== "allmeals" ? (
        <div className="sm:hidden block custom-container">
          <p>{`Week ${selectedTab.replace("week", "")}`}</p>
        </div>
      ) : (
        ""
      )}
      <FoodCardsLayout
        loading={loading}
        allMeals={
          selectedTab === "allmeals" ? allMeals : weekMeals[selectedTab]
        }
        selectedTab={selectedTab}
        selectedMeals={selectedMeals}
        selectMeal={handleSelectMeal}
        onDelete={(meal) => handleDeleteMeal(meal, selectedTab)}
        showDelete={selectedTab !== "allmeals"}
      />
      <AddToWeekModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAssign={handleAssignToWeeks}
      />
    </div>
  );
};

export default FoodMainComponent;
