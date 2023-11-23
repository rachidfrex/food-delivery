import React from 'react'
import { PiBowlFoodFill } from "react-icons/pi";
import { GiHotMeal } from "react-icons/gi";
import { IoCart } from "react-icons/io5";
import { MdLocalShipping } from "react-icons/md";
function Howwork() {
  return (
   <div className='my-10 '>
         <div className=' text-center  '>
            <h1  className=' text-3xl font-bold uppercase '>how it work</h1>
            <p className='block text-sm pt-4 font-semibold'>this how we potato in the work we care about our chicken and our ducks and as we <br/>   know the potato have a good tast so we add more  </p>
        </div>
        <main className='mt-12 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-20  gap-10 '>
            {/* cards  */}
            <div className='card  border m-4 p-6 '>
                <div className=' text-6xl text-orange-500 ' >
                    <span><PiBowlFoodFill /></span>
                </div>
                <div className='mt-5 xl:mt-10'>
                    <span className='font-bold text-xl'>Fresh & Nutritions</span>
                    <span className='block text-gray-500 text-sm mt-5 font-semibold'>offers fresh foods and calculate calories ,portion size</span>
                </div>
            </div>
            <div className='card border m-4 p-6'>
                <div className=' text-6xl text-orange-500' >
                    <span><IoCart  /></span>
                </div>
                <div className='mt-5 xl:mt-10'>
                    <span className='font-bold text-xl'>Pick Meals</span>
                    <span className='block text-gray-500 text-sm mt-5 font-semibold'>offers fresh foods and calculate calories ,portion size</span>
                </div>
            </div>
            <div className='card border m-4 p-6'>
                <div className='text-6xl text-orange-500 ' >
                    <span><PiBowlFoodFill /></span>
                </div>
                <div className='mt-5 xl:mt-10'>
                    <span className='font-bold text-xl'>Fresh & Nutritions</span>
                    <span className='block text-gray-500 text-sm mt-5 font-semibold'>offers fresh foods and calculate calories ,portion size</span>
                </div>
            </div>
            <div className='card border m-4 p-6'>
                <div className='text-6xl text-orange-500 ' >
                    <span><MdLocalShipping  /></span>
                </div>
                <div className='mt-5 xl:mt-10'>
                    <span className='font-bold text-xl'>Fast Delivery</span>
                    <span className='block text-gray-500 text-sm mt-5 font-semibold'>offers fresh foods and calculate calories ,portion size</span>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Howwork