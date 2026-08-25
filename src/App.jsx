import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import './App.css'
import MealDetails from './Pages/MealDetails';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/meal/:id' element = {<MealDetails />} />
          <Route path='/Cart' element = {<Cart />}/>
        </Routes>
      
      </BrowserRouter>
     
    </>
  )
}

export default App
