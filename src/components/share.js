import React from 'react'
import girl from'../images/girl.png'
import { FaPlay } from "react-icons/fa";

function Share() {
  return (
    <div className='bg-gray-100  overflow-hidden   '>
        <div  className=' flex sm:mx-16  md:mx-28 mb-5 mx-5  items-center  relative    '>
            
            <div className='z-10'>
                <h1 className=' text-4xl  lg:text-7xl mt-11  lg:mt-20 mb-10 md:text-5xl '>Share Our Favorite <strong  className=' text-orange-600 uppercase'>food </strong>  With your friends</h1>
                <p className='font-semibold mb-5 text-sm '>
                Order now for the best and fastest delivery in your area. Experience top-notch service as we swiftly bring your  selections <br/> right to your doorstep.
                </p>
                <div className='  '> 
                    <button className='uppercase  font-bold   m-4 border bg-orange-600 text-white py-3 px-5 text-md rounded-bl-3xl rounded-e-3xl'>Share Now</button>
                    
                </div>
            </div>
            <div className='  left-64  sm:left-96 xl:left-auto absolute  md:static opacity-25 md:opacity-100 blur-sm md:blur-none  lg:block  w-80 md:w-full    xl:mx-20   mt-6   p-5 ' >
              <img className='  xl:ml-20   md:w-full lg:w-[600px]  '  src={girl} alt='man' width={300}/>
            </div>
            

        </div>
    </div>

  )
}

export default Share