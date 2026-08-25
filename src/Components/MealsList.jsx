import { useState } from "react";
import MealsCard from "./MealsCard";
import { FaStar, FaTimes } from "react-icons/fa";

const MealsList = ({ meals }) => {
  const [selectedMeal, setSelectedMeal] = useState(null);

  const nearByResataurant = meals.slice(0, 4);
  const reccomendedFood = meals.slice(5, 9);

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-10 mx-4 sm:mx-8 lg:mx-16 xl:mx-30 mt-16 sm:mt-20 lg:mt-30">
        {/* Nearby Restaurants */}
        <section className="w-full lg:w-1/2">
          <h2 className="pb-5 sm:pb-7 text-lg sm:text-xl font-medium">
            Near By Restaurant
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {nearByResataurant.map((meal) => (
              <MealsCard
                key={meal.id}
                meal={meal}
                onClick={() => setSelectedMeal(meal)}
              />
            ))}
          </div>
        </section>

        {/* Recommended Dishes */}
        <section className="w-full lg:w-1/2">
          <h2 className="pb-5 sm:pb-7 text-lg sm:text-xl font-medium">
            Recommended Dishes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {reccomendedFood.map((meal) => (
              <MealsCard
                key={meal.id}
                meal={meal}
                onClick={() => setSelectedMeal(meal)}
              />
            ))}
          </div>
        </section>
      </div>

      {/* pop up */}
      {selectedMeal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/60"
          onClick={() => setSelectedMeal(null)}
        >
          <div
            className="relative bg-white max-w-md w-full p-8 rounded-2xl overflow-hidden leading-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => setSelectedMeal(null)}
            >
              <FaTimes />
            </button>
            <img
              className="w-full rounded-xl object-cover h-60"
              src={selectedMeal.image}
              alt=""
            />
            <p className="text-xl pt-5">{selectedMeal.name}</p>
            <p>{selectedMeal.cuisine}</p>
            <div className="flex items-center justify-between text-[12px]">
              <p className="text-[#808080]">{selectedMeal.mealType}</p>
              <div className="flex items-center gap-1 ">
                <FaStar
                  className={
                    selectedMeal.rating > 4.6
                      ? "text-green-400"
                      : "text-yellow-400"
                  }
                />
                <p>{selectedMeal.rating}</p>
              </div>
            </div>

            <button className="w-full bg-black text-white h-10 rounded-xl">View Details</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MealsList;
