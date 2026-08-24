import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/Cart' element = {<Cart />}/>
        </Routes>
      
      </BrowserRouter>
     
    </>
  )
}

export default App
