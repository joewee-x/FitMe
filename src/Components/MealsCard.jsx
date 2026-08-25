import { FaStar, FaTimes } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { FaClockRotateLeft } from "react-icons/fa6";

const MealsCard = ({ meal }) => {
  return (
    <div className="bg-[#F8F8F8] text-[15px] leading-8 min-w-60 min-h-90 p-5 rounded-xl">
      <img className="min-w-50 rounded-xl" src={meal.image} alt="" />
      <p className="">{meal.name}</p>
      <p>{meal.cuisine}</p>
      <div className="flex items-center justify-between text-[12px]">
        <p className="text-[#808080]">{meal.mealType}</p>
        <div className="flex items-center gap-1 ">
          <FaStar
            className={meal.rating > 4.6 ? "text-green-400" : "text-yellow-400"}
          />
          <p>{meal.rating}</p>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-1">
            <FiClock />
            <p>{meal.cookTimeMinutes}Mins</p>
        </div>
      </div>
    </div>
  );
};

export default MealsCard;
