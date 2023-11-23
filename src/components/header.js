import React from 'react'
import man from'../images/man-dely.png'
import { FaPlay } from "react-icons/fa";

function Header() {
  return (
    <div className='bg-gray-100 border-b   '>
        <div  className=' flex mx-5 sm:mx-10  md:mx-20  mb-5 items-center   '>
            
            <div className='z-10 '>
                <h1 className=' text-4xl  lg:text-7xl mt-11  lg:mt-20 mb-10 md:text-5xl '>best & fastest <strong  className=' text-orange-600 uppercase'>food <br/>  Delivry</strong>  in your place</h1>
                <p className='font-semibold mb-5 text-sm '>
                Order now for the best and fastest delivery in your area. Experience top-notch service as we swiftly bring your  selections <br/> right to your doorstep.
                </p>
                <div className='flex items-center  '> 
                    <button className='uppercase  font-bold   m-4 border bg-orange-600 text-white py-3 px-5 text-md rounded-bl-3xl rounded-e-3xl'>order now </button>
                    <button className='ml-10 border-0 bg-white p-5 rounded-full shadow-md  '><FaPlay /></button>
                </div>
            </div>
            <div className=' hidden lg:block       bg-orange-500 rounded-full xl:mx-20   mt-6 overflow-hidden   p-5 ' >
              <img className='  xl:ml-20 mx-10   '  src={man} alt='man' width={400}/>
            </div>
            

        </div>
    </div>

  )
}

export default Header