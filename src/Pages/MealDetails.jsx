import Nav from '../Components/Nav';
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { FiClock } from "react-icons/fi";



const MealDetails = ( {addToCart}) => {
    const {id} = useParams();
    const [meal, setMeal] = useState(null);

    useEffect(()=> {
        async function getMeal() {
            try{
                const res = await fetch(`https://dummyjson.com/recipes/${id}`)
                const data = await res.json();
                setMeal(data)
            }catch (err){
                console.log(err.message)
            }
        }
        getMeal()
    }, [id]);

    if(!meal){
        return <p>Loading...</p>
    }

    const handleAddToCart = ()=> {
        addToCart(meal)
    }
  return (
    <>
    
    <main>
      <div>
        <div  className='grid grid-cols-1 justify-center md:grid-cols-2 gap-10 mt-30 md:mt-40 mx-5 md:mx-30'>
            <div>
                <img className='w-full rounded-2xl h-90' src= {meal.image} alt="" />
            </div>
            <div>
                <p className='text-2xl font-semibold'>{meal.name}</p>
                <p className=''>{meal.cuisine}</p>
                <div className="flex gap-5 mt-5 text-sm">
                    <div className='flex items-center gap-2'>
                        <FaStar className={meal.rating > 4.6 ? "text-green-400" : "text-yellow-400"}  />
                        <p>{meal.rating}</p>
                    </div>
                    <p className='flex items-center gap-2'><FiClock /> {meal.cookTimeMinutes} mins</p>
                    <p>{meal.mealType}</p>
                </div>
                <p className=' text-[#808080] text-sm mt-4'>Total Review : {meal.reviewCount}</p>

                <div className='mt-5'>
                    <p>Ingredients</p>
                    <ul className='text-[12px] mt-1 list-disc'>
                        {meal.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <button className='mt-2 bg-black w-full md:w-90 h-8 rounded text-white' onClick={handleAddToCart}>
                    Add to cart
                </button>
            </div>
            
        </div>
      </div>
    </main>
    </>
  )
}

export default MealDetails
