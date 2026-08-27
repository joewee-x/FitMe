import { useNavigate } from "react-router-dom"

const Cart = ({cart}) => {

  return (
    <div className="mt-40">

      {cart.length === 0 ? (
        <div>
          <p>Your Cart is empty</p>
          <button>Continue Shopping</button>
        </div>
      ) : (
        <div className="flex justify-between mx-30">
          <div className="">
            <p>Reccommmended</p>
            <p className="">Breakfast Box</p>
            <p>Lunch Box</p>
            <p>Combo Box</p>
            <p>Briyanni Box</p>
          </div>
          <div className="flex gap-10">
            <div>
              <p>{cart[0].name}</p>
              <p className="py-3">₹ {cart[0].caloriesPerServing}</p>
              <p className="w-100 text-[12px]">
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
            <div key={meal.id}>
              <div>
                <p>{meal.name}</p>
                <p>₹ {meal.caloriesPerServing}</p>

              </div>

            </div>
          ))}
          </div>

        </div>
      )}
    </div>
  )
}

export default Cart
