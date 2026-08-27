import { FaMinus, FaPlus } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Cart = ({ cart, increaseQuantity, decreaseQuantity, removeMeal }) => {
  const navigate = useNavigate()

  return (
    <div className="mt-20 sm:mt-28 lg:mt-40 px-4 sm:px-8 lg:px-16 xl:px-30">

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="my-8">Your Cart is empty</p>

          <button
            className="bg-[#FC8019] text-white w-full sm:w-50 h-10 rounded-xl"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
      ) : (

        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-8">

          <div className="w-full lg:w-auto flex flex-row lg:flex-col gap-5 lg:gap-0 overflow-x-auto whitespace-nowrap pb-2">
            <p className="hover:text-[#FC8019] cursor-pointer">
              Reccommmended
            </p>

            <p className="lg:py-4 hover:text-[#FC8019] cursor-pointer">
              Breakfast Box
            </p>

            <p className="hover:text-[#FC8019] cursor-pointer">
              Lunch Box
            </p>

            <p className="lg:py-4 hover:text-[#FC8019] cursor-pointer">
              Combo Box
            </p>

            <p className="hover:text-[#FC8019] cursor-pointer">
              Briyanni Box
            </p>
          </div>

          <div className=" w-full lg:w-1/3 flex flex-col sm:flex-row gap-5 items-start">
            <div className="flex-1">

              <p className="text-lg font-medium">
                {cart[0].name}
              </p>

              <p className="py-3">
                ₹ {cart[0].caloriesPerServing}
              </p>

              <p className="text-[12px] leading-5 text-gray-600">
                Brunch: One meal to rule them all! Grab thisr combo with
                of 2 veg wraps, Aloo Paratha (2 pcs), chole and Curd
                lunchbox and 2 choco lava cakes. This is just bliss on a
                plate!
              </p>

            </div>

            <img
              className="w-full sm:w-30 h-40 sm:h-30 object-cover rounded-xl shrink-0"
              src={cart[0].image}
              alt=""
            />

          </div>

          <div className="w-full lg:w-1/3">

            <div className="flex justify-between items-center pb-3 ">
              <p>Cart</p>
              <p>{cart.length} items</p>
            </div>

            {cart.map((meal) => (

              <div key={meal.id} className=" grid grid-cols-2 items-start my-4 gap-3">
                <div className="text-sm">

                  <p>
                    From
                    <span className="text-[#FC8019]">
                      {meal.mealType}
                    </span>
                  </p>

                  <p className="mt-1">
                    {meal.name}
                  </p>

                  <p className="mt-1">
                    ₹ {meal.caloriesPerServing}
                  </p>

                </div>

                <div className=" text-[12px] flex justify-end items-center gap-2 font-thin">

                  <button onClick={() => decreaseQuantity(meal.id)} className=" w-6 h-6 flex items-center justify-center">
                    <FaMinus />
                  </button>

                  <span>
                    {meal.quantity}
                  </span>

                  <button onClick={() => increaseQuantity(meal.id)} className=" w-6 h-6 flex items-center justify-center">
                    <FaPlus />
                  </button>

                </div>

              </div>

            ))}

            <div className="text-sm my-6 pt-4">

              <p>
                Sub Total : ₹{" "}
                {cart.reduce(
                  (total, meal) =>
                    total +
                    meal.caloriesPerServing * meal.quantity,
                  0
                )}
              </p>

              <p className="text-[11px] text-gray-500 mt-1">
                extra charges may apply
              </p>

            </div>

            <button className=" bg-[#FC8019] text-white w-full h-10 rounded-xl" onClick={()=>navigate('/secureCheckout')}>
              Checkout
            </button>

          </div>

        </div>
      )}
    </div>
  )
}

export default Cart