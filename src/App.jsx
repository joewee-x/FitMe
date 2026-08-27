import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import './App.css'
import MealDetails from './Pages/MealDetails';
import SecureCheckout from './Pages/SecureCheckout';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (meal)=> {
    setCart(cart => {
      const existingMeal = cart.find(item => item.id === meal.id)
    

    if(existingMeal){
      return cart.map(item => item.id === meal.id ? {...item, quantity : item.quantity + 1} : item)
    }

    return [...cart, {...meal, quantity : 1}]
  });
  }

  // cart count
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  //increase quantit function
  const increaseQuantity = (id) => {
    setCart(cart => 
      cart.map(meal => 
        meal.id === id ? {...meal, quantity : meal.quantity + 1} : meal
      )
    )
  };

  const decreaseQuantity = (id) => {
    setCart(cart => cart.map(meal => meal.id === id ? {...meal, quantity : meal.quantity -1} : meal)
            .filter(meal => meal.quantity > 0))
  }

  // remove meal in cart
  const removeMeal = (id)=> {
    setCart(cart => cart.filter(meal => meal.id !== id))
  }


  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
        <Nav cartCount = {cartCount} />

        <main className='flex-1'>
          <Routes>
            <Route path='/' element = {<Home />}/>
            <Route path='/meal/:id' element = {<MealDetails addToCart = {addToCart} />} />
            <Route path='/Cart' element = {<Cart
              cart  = {cart}
              increaseQuantity ={increaseQuantity}
              decreaseQuantity = {decreaseQuantity}
              removeMeal = {removeMeal}
              />}/>
              <Route path='/SecureCheckout' element ={<SecureCheckout cart = {cart}/>}/>
          </Routes>
        </main>
        <Footer />
        </div>
          
      </BrowserRouter>
     
    </>
  )
}

export default App
