import React from "react";
import StarRating from "./StarRating";
import { RiDeleteBinLine } from "react-icons/ri";

const MealCard = ({ meal, isSelected, selectMeal, onDelete, showDelete }) => {
  return (
    <div
      className={`cursor-pointer rounded-lg p-5 bg-white relative flex flex-col gap-4 ${
        isSelected
          ? "shadow-[0_0_0_1px] shadow-my-blue"
          : "shadow-[0_0_7px_1px] shadow-[#0000001a]"
      }`}
      onClick={() => selectMeal(meal)}
    >
      <div
        className={`w-full h-[180px] relative overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat`}
      >
        <span className="m-2 absolute top-0 right-0 z-20 py-1 px-3 rounded-sm bg-black text-white text-[10px]">
          {meal.mealType[0]}
        </span>

        {showDelete && (
          <button
            className="absolute top-0 left-0 z-20 m-2 p-1 bg-red-200 text-red-600 rounded-sm"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(meal);
            }}
          >
            <RiDeleteBinLine />
          </button>
        )}

        <img src={meal.image} className="object-center absolute top-0 left-0" />
      </div>
      <div className="flex-1 flex flex-col justify-between gap-2">
        <div>
          <h3 className="font-black">{meal.name}</h3>
          <p className="text-[10px]">{meal.instructions.join(" ")}</p>
        </div>
        <div className="text-[10px] flex justify-between">
          <p>
            <span className="font-black">Cuisine:</span>{" "}
            <span className="font-medium">{meal.cuisine}</span>
          </p>
          <div className="flex items-center gap-2">
            <div>
              <span className="font-black">Rating:</span>{" "}
              <span className="font-medium">{meal.rating.toFixed(1)}</span>
            </div>
            <StarRating rating={meal.rating} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
