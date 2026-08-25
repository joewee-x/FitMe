import MealsCard from "./MealsCard"

const PersonalisedReccommendations = ({meals}) => {
    const reccommend = meals.slice(20, 24)
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-10 mx-4 sm:mx-8 lg:mx-16 xl:mx-30 mt-16 sm:mt-20 lg:mt-30">
        {/* Nearby Restaurants */}
        <section className="w-full">
          <h2 className="pb-5 sm:pb-7 text-lg sm:text-xl font-medium">
            Personam Reccommendations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-4 justify-center gap-4 sm:gap-20">
            {reccommend.map((meal) => (
              <MealsCard
                key={meal.id}
                meal={meal}
                onClick={() => setSelectedMeal(meal)}
              />
            ))}
          </div>
        </section>
    </div>
  )
}

export default PersonalisedReccommendations
