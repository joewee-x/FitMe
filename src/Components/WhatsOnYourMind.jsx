
import React from 'react'

const WhatsOnYourMind = ({ meals }) => {
  const onYourMind = meals.slice(10, 15)

  return (
    <div className="mx-4 sm:mx-8 lg:mx-16 xl:mx-30">

      <p className="text-lg sm:text-xl max-sm:text-center xl:ml-16">
        What's on your mind?
      </p>

      <div className=" flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12 xl:gap-25 mt-8 sm:mt-10">
        {onYourMind.map((meal) => (
          <div key={meal.id} className="flex flex-col items-center w-24 sm:w-28 lg:w-30">
            <img className="w-20 h-20 sm:w-24 sm:h-24 lg:w-30 lg:h-30 mb-3 rounded-full object-cover"
              src={meal.image} alt={meal.name} />
            <p className="text-xs sm:text-sm text-center"> {meal.name} </p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default WhatsOnYourMind
