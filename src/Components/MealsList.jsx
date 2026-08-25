// import MealsCard from "./MealsCard";

// const MealsList = ({ meals }) => {
//   const nearByResataurant = meals.slice(0, 4);
//   const reccomendedFood = meals.slice(5, 9);
//   return (
//     <div className="flex justify-between mx-30 mt-30">
//       <section>
//         <h2 className="pb-7">Near By Restaurant</h2>
//         <div className="grid grid-cols-2 gap-5">
//           {nearByResataurant.map((meal) => (
//             <MealsCard key={meal.id} meal={meal} />
//           ))}
//         </div>
//       </section>
//       <section>
//         <h2 className="pb-7">Reccommended Dishes</h2>
//         <div className="grid grid-cols-2 gap-5">
//           {reccomendedFood.map((meal) => (
//             <MealsCard key={meal.id} meal={meal} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MealsList;

import MealsCard from "./MealsCard";

const MealsList = ({ meals }) => {
  const nearByResataurant = meals.slice(0, 4);
  const reccomendedFood = meals.slice(5, 9);

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-10 mx-4 sm:mx-8 lg:mx-16 xl:mx-30 mt-16 sm:mt-20 lg:mt-30">

      {/* Nearby Restaurants */}
      <section className="w-full lg:w-1/2">
        <h2 className="pb-5 sm:pb-7 text-lg sm:text-xl font-medium">
          Near By Restaurant
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {nearByResataurant.map((meal) => (
            <MealsCard key={meal.id} meal={meal} />
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
            <MealsCard key={meal.id} meal={meal} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default MealsList;
