import React from "react";
import MealCard from "./MealCard";
import MealCardSkeleton from "./MealCardSkeleton";

const FoodCardsLayout = ({
  loading,
  allMeals,
  selectedTab,
  selectedMeals,
  selectMeal,
  onDelete,
  showDelete,
}) => {
  return (
    <div className="custom-container grid screen990:grid-cols-3 screen540:grid-cols-2 grid-cols-1 gap-8 py-8">
      {loading ? (
        <>
          <MealCardSkeleton />
          <MealCardSkeleton />
          <MealCardSkeleton />
          <MealCardSkeleton />
          <MealCardSkeleton />
          <MealCardSkeleton />
        </>
      ) : !loading && allMeals.length === 0 ? (
        <p className="text-gray-500">No Meal Found</p>
      ) : (
        allMeals.map((meal, key) => (
          <MealCard
            key={key}
            meal={meal}
            isSelected={
              selectedTab !== "allmeals" ? false : selectedMeals.includes(meal)
            }
            selectMeal={selectMeal}
            onDelete={onDelete}
            showDelete={showDelete}
          />
        ))
      )}
    </div>
  );
};

export default FoodCardsLayout;
