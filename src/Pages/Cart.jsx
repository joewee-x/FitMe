import { FaMinus, FaPlus } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const Cart = ({cart, increaseQuantity, decreaseQuantity, removeMeal}) => {
  const navigate = useNavigate();

  return (
    <div className="mt-40">

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="my-8">Your Cart is empty</p>
          <button className="bg-[#FC8019] text-white w-50 h-10 rounded-xl" onClick={()=>navigate('/')}>Continue Shopping</button>
        </div>
      ) : (
        <div className="flex justify-between items-start mx-30">
          <div className="">
            <p className="hover:text-[#FC8019]">Reccommmended</p>
            <p className="py-4 hover:text-[#FC8019]">Breakfast Box</p>
            <p className="hover:text-[#FC8019]">Lunch Box</p>
            <p className="py-4 hover:text-[#FC8019]">Combo Box</p>
            <p className="hover:text-[#FC8019]">Briyanni Box</p>
          </div>
          <div className="flex gap-10">
            <div>
              <p>{cart[0].name}</p>
              <p className="py-3">₹ {cart[0].caloriesPerServing}</p>
              <p className="w-80 text-[12px]">
                Brunch: One meal to rule them all! Grab thisr combo with of 2 veg wraps, Aloo Paratha (2 pcs), chole and Curd lunchbox and 2 choco lava cakes. This is just bliss on a plate!
              </p>
            </div>

            <img className="w-30 rounded-xl" src={cart[0].image} alt="" />
          
          </div>

          <div>
          <div className="flex justify-between">
            <p>Cart</p>
            <p>{cart.length} items</p>
          </div>
          {cart.map(meal => (
            <div key={meal.id} className="grid grid-cols-2 items-center my-3">
              <div className="text-sm ">
                <p>From <span className="text-[#FC8019]">{meal.mealType}</span></p>
                <p>{meal.name}</p>
                <p>₹ {meal.caloriesPerServing}</p>
              </div>
              <div className="text-[12px] flex justify-end gap-2 font-thin">
                <button onClick={()=> decreaseQuantity(meal.id)}><FaMinus /></button>
                <span>{meal.quantity}</span>
                <button onClick={()=>increaseQuantity(meal.id)}><FaPlus /></button>
              </div>

            </div>
          ))}
          <div className="text-sm my-5">
            <p>Sub Total : ₹ {cart.reduce((total, meal) => total + meal.caloriesPerServing * meal.quantity, 0)}</p>
            <p className="text-[11px]">extra charges may apply</p>
          </div>
          <button className="bg-[#FC8019] text-white w-full h-10 rounded-xl">Checkout</button>
          </div>

        </div>
      )}
    </div>
  )
}

export default Cart
