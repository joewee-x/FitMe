import { useNavigate } from "react-router-dom";

const Cart = ({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) => {
  const navigate = useNavigate();

  return (
    <main className="
      px-4
      sm:px-8
      lg:px-16
      xl:px-30
      py-10
    ">

      <h1 className="text-3xl font-semibold mb-8">
        Your Cart
      </h1>

      {cart.length === 0 ? (

        <div className="text-center py-20">

          <p className="text-gray-500 mb-5">
            Your cart is empty.
          </p>

          <button
            onClick={() => navigate("/")}
            className="
              bg-black
              text-white
              px-6
              py-3
              rounded-lg
            "
          >
            Continue Shopping
          </button>

        </div>

      ) : (

        <div className="max-w-3xl">

          {cart.map((meal) => (

            <div
              key={meal.id}
              className="
                flex
                flex-col
                sm:flex-row
                sm:items-center
                gap-4
                bg-[#F8F8F8]
                p-4
                rounded-xl
                mb-5
              "
            >

              {/* Image */}
              <img
                src={meal.image}
                alt={meal.name}
                className="
                  w-full
                  sm:w-24
                  h-40
                  sm:h-24
                  object-cover
                  rounded-xl
                "
              />

              {/* Meal details */}
              <div className="flex-1">

                <h2 className="font-semibold">
                  {meal.name}
                </h2>

                <p className="text-sm text-gray-500">
                  {meal.cuisine}
                </p>

                <p className="text-sm mt-2">
                  ⭐ {meal.rating}
                </p>

              </div>

              {/* Quantity */}
              <div className="
                flex
                items-center
                gap-3
              ">

                <button
                  onClick={() =>
                    decreaseQuantity(meal.id)
                  }
                  className="
                    w-8
                    h-8
                    bg-black
                    text-white
                    rounded
                  "
                >
                  -
                </button>

                <span>
                  {meal.quantity}
                </span>

                <button
                  onClick={() =>
                    increaseQuantity(meal.id)
                  }
                  className="
                    w-8
                    h-8
                    bg-black
                    text-white
                    rounded
                  "
                >
                  +
                </button>

              </div>

              {/* Remove */}
              <button
                onClick={() =>
                  removeFromCart(meal.id)
                }
                className="text-red-500 text-sm"
              >
                Remove
              </button>

            </div>

          ))}

        </div>

      )}

    </main>
  );
};

export default Cart;