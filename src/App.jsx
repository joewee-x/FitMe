import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import './App.css'
import MealDetails from './Pages/MealDetails';
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
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <>
      <BrowserRouter>
        <Nav cartCount = {cartCount} />
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/meal/:id' element = {<MealDetails addToCart = {addToCart} />} />
          <Route path='/Cart' element = {<Cart
            cart  = {cart} />}/>
        </Routes>
      
      </BrowserRouter>
     
    </>
  )
}

export default App
