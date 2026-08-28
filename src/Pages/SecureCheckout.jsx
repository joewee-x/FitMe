import { useState } from "react"
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa"

const SecureCheckout = ({ cart }) => {
  const [orderType, setOrderType] = useState("subscription")
  const [subscriptionType, setSubscriptionType] = useState("monthly")
  const [plan, setPlan] = useState("3-days")
  const [deliveryTime, setDeliveryTime] = useState("16:30")
  const [address, setAddress] = useState("address1")
  const [note, setNote] = useState("")

  const subtotal = cart.reduce(
    (total, meal) =>
      total + meal.caloriesPerServing * meal.quantity,
    0
  )

  const deliveryFee = 131
  const taxes = 2
  const discount = 0

  const total =
    subtotal + deliveryFee + taxes - discount

  return (
    <div className="min-h-screen bg-white mt-20 sm:mt-28 px-4 sm:px-8 lg:px-16 xl:px-30">

      <div className="max-w-7xl mx-auto">

        {/* Page title */}
        <div className="border-b border-gray-300 pb-3">
          <h1 className="font-semibold text-lg">
            Secure Checkout
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_330px] gap-8 mt-6">

          <div>

            <section>

              <h2 className="font-semibold flex items-center gap-2 mb-4">
                <FaMapMarkerAlt className="text-[#FC8019]" />
                Delivery address
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <button
                  onClick={() => setAddress("address1")}
                  className={`text-left border rounded-lg p-4 h-24 ${
                    address === "address1"
                      ? "bg-[#FC8019] text-white border-[#FC8019]"
                      : "border-dashed border-[#FC8019]"
                  }`}
                >

                  <FaMapMarkerAlt
                    className={`mb-2 ${
                      address === "address1"
                        ? "text-white"
                        : "text-gray-600"
                    }`}
                  />

                  <p className="text-[11px] leading-4">
                    Dno. 12-34-12, XYC Apartments,
                    DOOR Colony, Hyd-19, Hyderabad,
                    Telangana
                  </p>

                </button>

                {/* Address 2 */}
                <button
                  onClick={() => setAddress("address2")}
                  className={`text-left border rounded-lg p-4 h-24 ${
                    address === "address2"
                      ? "bg-[#FC8019] text-white border-[#FC8019]"
                      : "border-dashed border-[#FC8019]"
                  }`}
                >

                  <FaMapMarkerAlt
                    className={`mb-2 ${
                      address === "address2"
                        ? "text-white"
                        : "text-gray-600"
                    }`}
                  />

                  <p className="text-[11px] leading-4">
                    Dno. 12-34-12, XYC Apartments,
                    DOOR Colony, Hyd-19, Hyderabad,
                    Telangana
                  </p>

                </button>

              </div>
            </section>


            <section className="mt-8">

              <h2 className="font-semibold flex items-center gap-2 mb-4">
                <FaCalendarAlt className="text-[#FC8019]" />
                Type of Order
              </h2>

              <div className="flex flex-wrap gap-3">

                <button
                  onClick={() => setOrderType("subscription")}
                  className={`px-4 py-2 rounded-md text-xs border ${
                    orderType === "subscription"
                      ? "bg-[#FC8019] text-white border-[#FC8019]"
                      : "border-dashed border-[#FC8019]"
                  }`}
                >
                  <FaCalendarAlt className="inline mr-2" />
                  Subscription
                </button>

                <button
                  onClick={() => setOrderType("schedule")}
                  className={`px-4 py-2 rounded-md text-xs border ${
                    orderType === "schedule"
                      ? "bg-[#FC8019] text-white border-[#FC8019]"
                      : "border-dashed border-[#FC8019]"
                  }`}
                >
                  <FaCalendarAlt className="inline mr-2" />
                  Schedule Order
                </button>

                <button
                onClick={() => setOrderType("now")}
                  className={`px-4 py-2 rounded-md text-xs border ${
                    orderType === "now"
                      ? "bg-[#FC8019] text-white border-[#FC8019]"
                      : "border-dashed border-[#FC8019]"
                  }`}
                >
                  <FaCalendarAlt className="inline mr-2" />
                  Order Now
                </button>

              </div>

            </section>


            {orderType === "subscription" && (
              <section className="mt-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>

                    <p className="text-sm font-medium mb-4">
                      Type of subscription ?
                    </p>

                    <div className="flex gap-8 border-b border-gray-300">

                      <button
                        onClick={() =>
                          setSubscriptionType("monthly")
                        }
                        className={`pb-3 text-xs ${
                          subscriptionType === "monthly"
                            ? "text-[#FC8019] border-b-2 border-[#FC8019]"
                            : ""
                        }`}
                      >
                        Monthly
                      </button>

                      <button
                        onClick={() =>
                          setSubscriptionType("weekly")
                        }
                        className={`pb-3 text-xs ${
                          subscriptionType === "weekly"
                            ? "text-[#FC8019] border-b-2 border-[#FC8019]"
                            : ""
                        }`}
                      >
                        Weekly
                      </button>

                      <button
                        onClick={() =>
                          setSubscriptionType("custom")
                        }
                        className={`pb-3 text-xs ${
                          subscriptionType === "custom"
                            ? "text-[#FC8019] border-b-2 border-[#FC8019]"
                            : ""
                        }`}
                      >
                        Custom
                      </button>

                    </div>

                  </div>

                  <div>

                    <p className="text-sm font-medium mb-4">
                      What's the plan?
                    </p>

                    <div className="flex gap-3">

                      <button
                        onClick={() => setPlan("3-days")}
                        className={`px-4 py-2 text-xs rounded-md border ${
                          plan === "3-days"
                            ? "border-[#FC8019] text-[#FC8019]"
                            : "border-gray-300"
                        }`}
                      >
                        3-Days/Week
                      </button>

                      <button
                        onClick={() => setPlan("5-days")}
                        className={`px-4 py-2 text-xs rounded-md border ${
                          plan === "5-days"
                            ? "border-[#FC8019] text-[#FC8019]"
                            : "border-gray-300"
                        }`}
                      >
                        5-Days/Week
                      </button>

                    </div>

                  </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

                  <div>

                    <p className="text-sm font-medium mb-4">
                      What time do you want us to deliver?
                    </p>

                    <div className="flex items-center gap-3 border-b border-gray-300 pb-2 w-36">

                      <FaClock className="text-gray-400" />

                      <input
                        type="time"
                        value={deliveryTime}
                        onChange={(e) =>
                          setDeliveryTime(e.target.value)
                        }
                        className="text-xs outline-none"
                      />

                    </div>

                  </div>


                  <div>

                    <p className="text-sm font-medium mb-4">
                      Any Note for us?
                    </p>

                    <textarea
                      value={note}
                      onChange={(e) =>
                        setNote(e.target.value)
                      }
                      placeholder="Type your note here"
                      className="w-full h-20 border border-gray-400 rounded-lg p-3 text-xs outline-none focus:border-[#FC8019]"
                    />

                  </div>

                </div>

              </section>
            )}

          </div>


          <aside className="bg-gray-50 rounded-lg p-5 h-fit">

            <div className="flex justify-between items-center mb-5">

              <h2 className="font-medium">
                Cart
              </h2>

              <span className="text-xs">
                {cart.length} Items
              </span>

            </div>


            {cart.map((meal) => (

              <div
                key={meal.id}
                className="py-3 border-b border-gray-200"
              >

                <p className="text-[11px] text-gray-600">
                  from{" "}
                  <span className="text-[#FC8019]">
                    {meal.mealType}
                  </span>
                </p>

                <div className="flex justify-between gap-3">

                  <p className="text-xs mt-1">
                    {meal.name}
                  </p>

                  <p className="text-xs whitespace-nowrap">
                    ₹
                    {meal.caloriesPerServing *
                      meal.quantity}
                  </p>

                </div>

              </div>

            ))}

            <div className="mt-5">

              <p className="text-[10px] text-gray-400 mb-3">
                Bill details
              </p>

              <div className="flex justify-between text-xs mb-2">
                <span>Item Total</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between text-xs mb-2">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>

              <div className="flex justify-between text-xs mb-2">
                <span>Taxes and Charges</span>
                <span>₹{taxes}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-xs text-green-600 mb-2">
                  <span>Discount</span>
                  <span>-₹{discount}</span>
                </div>
              )}

            </div>

            {orderType === "subscription" && (
              <p className="text-[10px] mt-5 text-gray-600">
                {subscriptionType === "monthly"
                  ? "Monthly"
                  : subscriptionType}
                +{" "}
                {plan === "3-days"
                  ? "3 Days/Week"
                  : "5 Days/Week"}
                plan + {deliveryTime} Delivery time
              </p>
            )}


            {/* TOTAL */}
            <div className="flex justify-between items-center mt-5 pt-4 border-t border-gray-200">

              <span className="font-semibold">
                Total
              </span>

              <span className="font-semibold">
                ₹{total}
              </span>

            </div>

            <button
              className="mt-6 w-full h-11 bg-[#FC8019] text-white rounded-lg text-sm hover:bg-[#e9700c] transition"
              onClick={()=> alert('Order placed successfully')}
            >
              Proceed To Payment
            </button>

          </aside>

        </div>
      </div>
    </div>
  )
}

export default SecureCheckout