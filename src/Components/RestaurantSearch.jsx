import { GiAxeSword } from "react-icons/gi";

const RestaurantSearch = () => {
  return (
    <div className="my-12 sm:my-16 lg:my-20">
      <div className="w-full min-h-40 bg-[#FC8019] px-4 sm:px-8 py-8 text-white flex items-center justify-center gap-3 flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap">
            <p className="font-bold text-center whitespace-nowrap"> Search by Restaurant </p>
            <GiAxeSword className="text-2xl shrink-0" />
            <input className=" w-full sm:w-80 lg:w-100 max-w-full border border-white h-10 p-2 rounded outline-none"
                type="text"
                placeholder="Enter item or restaurant you are looking for"
            />

            <button className="bg-black h-10 w-full sm:w-35 shrink-0 rounded">
            Search Now
            </button>
      </div>
    </div>
  );
};

export default RestaurantSearch;
