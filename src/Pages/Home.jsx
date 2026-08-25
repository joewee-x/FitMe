import { useState, useEffect } from 'react'
import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import MealsList from '../Components/MealsList'

const Home = () => {

  const [meals, setMeals] = useState([])

  useEffect(()=>{
    async function getMeals() {
      try{
        const res = await fetch('https://dummyjson.com/recipes');
        const data = await res.json();
        setMeals(data.recipes);
      }catch (error){
        console.log(error.message)
      }
      
    }
    getMeals()
  })
  return (
    <div>
      <Nav />
      <Hero />
      <MealsList meals = {meals} />
    </div>
  )
}

export default Home
