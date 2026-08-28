import { useState, useEffect } from 'react'
import Hero from '../Components/Hero'
import MealsList from '../Components/MealsList'
import RestaurantSearch from '../Components/RestaurantSearch'
import WhatsOnYourMind from '../Components/WhatsOnYourMind'
import PersonalisedReccommendations from '../Components/PersonalisedReccommendations'

const Home = ({searchTerm}) => {

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
  }, []);

  const filteredMeals = meals.filter((meal) => meal.name.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div>
      <Hero />
      <MealsList meals = {meals} meals ={filteredMeals} searchTerm = {searchTerm} />
      <RestaurantSearch />
      <WhatsOnYourMind meals = {meals} />
      <PersonalisedReccommendations meals ={meals} />
    </div>
  )
}

export default Home
