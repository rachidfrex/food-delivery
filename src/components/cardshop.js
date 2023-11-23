import React from 'react'
import noodl from '../images/noodl.jpg'
import curry from '../images/curry.jpg'
import stew from '../images/stew.jpg'
import sushi from '../images/sushi.jpg'
import Tufu from "../images/Tofu.jpg"
import bowl from "../images/bowl.jpg"


function Cardshop() {
  return (
    <main className="md:px-16 sm:px-10 px-5  py-6 bg-gray-100 md:col-span-3">
      

      <header>
        <h2 className="text-6xl text-gray-700  font-semibold">Recipes</h2>
        <h3 className="text-2xl font-semibold ml-1 mt-3" >For you </h3>
      </header>

      <div>
        <h4 className="font-bold mt-12 border-b border-gray-200">Latest Recipes</h4>
  
        <div className=" mt-12 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10 ">
          {/* cards go here */}
          <div className='card  '> 
          
            <img src={noodl} alt="stew" className=' w-full  h-48 sm:h-68 object-cover'/>
            <div className='m-4'>
              <span className='font-bold'>5 Bean Chili Stew</span>
              <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
            </div>
            <div className=' badge' >
              <span>1 hour</span>
            </div>
          </div>
          <div className='card '> 
          
            <img src={curry} alt="stew" className=' w-full h-48 sm:h-68 object-cover'/>
            <div className='m-4'>
              <span className='font-bold'>5 Bean Chili Stew</span>
              <span className='block  text-gray-500 text-sm'>Recipe by Mario</span>
            </div>
            <div className=' badge' >
              <span>25 mins</span>
            </div>
          </div>
          <div className='card '> 
          
            <img src={stew} alt="stew" className=' w-full  h-48 sm:h-68 object-cover'/>
            <div className='m-4'>
              <span className='font-bold'>5 Bean Chili Stew</span>
              <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
            </div>
            <div className=' badge' >
              <span>25 mins</span>
            </div>
          </div>
          <div className='card '> 
          
          <img src={sushi} alt="stew" className=' w-full  h-48 sm:h-68 object-cover'/>
          <div className='m-4'>
            <span className='font-bold'>5 Bean Chili Stew</span>
            <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
          </div>
          <div className=' badge' >
            <span>20 mins</span>
            
          </div>
        </div>
        </div>

        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>

        <div className=" mt-12 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10 ">
          {/* cards go here */}
          <div className='card  '> 
          
            <img src={Tufu} alt="stew" className=' w-full  h-48 sm:h-68 object-cover'/>
            <div className='m-4'>
              <span className='font-bold'>Malaysian Tofu Rice </span>
              <span className='block text-gray-500 text-sm'>Recipe by Maria</span>
            </div>
            <div className=' badge' >
              <span>1.5 hour</span>
            </div>
          </div>
          <div className='card  '> 
          
            <img src={noodl} alt="stew" className=' w-full  h-48 sm:h-68 object-cover'/>
            <div className='m-4'>
              <span className='font-bold'>5 Bean Chili Stew</span>
              <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
            </div>
            <div className=' badge' >
              <span>1 hour</span>
            </div>
          </div>
          <div className='card  '> 
          
            <img src={bowl} alt="stew" className=' w-full  h-48 sm:h-68 object-cover'/>
            <div className='m-4'>
              <span className='font-bold'>Food bowls</span>
              <span className='block text-gray-500 text-sm'>Recipe by Ahmed</span>
            </div>
            <div className=' badge' >
              <span>1 hour</span>
            </div>
          </div>
          <div className='card '> 
          
          <img src={curry} alt="stew" className=' w-full  h-48 sm:h-68 object-cover'/>
          <div className='m-4'>
            <span className='font-bold'>5 Bean Chili Stew</span>
            <span className='block text-gray-500 text-sm'>Recipe by Mario</span>
          </div>
          <div className=' badge' >
            <span>20 mins</span>
            
          </div>
        </div>




        </div>
      </div>

      <div className='flex justify-center mt-10 '>
        <div className=" text-xs btn hover:shadow-inner bg-orange-200 text-orange-500 py-2 px-3" >Load more</div>
      </div>    
    </main>
  )
}

export default Cardshop