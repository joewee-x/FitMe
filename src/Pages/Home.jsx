import { useState, useEffect } from 'react'
import Nav from '../Components/Nav'
import Hero from '../Components/Hero'
import MealsList from '../Components/MealsList'
import RestaurantSearch from '../Components/RestaurantSearch'
import WhatsOnYourMind from '../Components/WhatsOnYourMind'
import PersonalisedReccommendations from '../Components/PersonalisedReccommendations'
import Footer from '../Components/Footer'

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
  }, [])
  return (
    <div>
      <Nav />
      <Hero />
      <MealsList meals = {meals} />
      <RestaurantSearch />
      <WhatsOnYourMind meals = {meals} />
      <PersonalisedReccommendations meals ={meals} />
      <Footer />
    </div>
  )
}

export default Home
