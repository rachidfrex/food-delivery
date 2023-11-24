import React from 'react'
import noodl from '../images/noodl.jpg'
import { FaPhone } from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
function Contactus() {
  return (
    <div  className=' my-5    ' >
       <div className='bg-orange-400   py-8 h-44 '>
        <div   className=' absolute  border-xl px-5 py-5  z-10  center w-full sm:w-[600px]     bg-white  flex  mx-auto  items-center  rounded-2xl flex-col  '>
            <div className=' text-center '>
                    <h1 className=' text-xl  md:text-3xl font-bold text-orange-500'>Get Special Discounts</h1>
                    <p className=' font-semibold text-sm my-3'>Order now for the best and fastest delivery in your area. Experience top-notch service as we swiftly bring your  selec</p>
            </div>
            <div className=' text-center  '>
                <input  className=' w-full px-4 py-2 sm:px-5 sm:py-3 rounded-2xl border-2  sm:w-72 font-semibold text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' type='text' placeholder='email'/>
                <button className=' mt-5 sm:mt-0  border bg-orange-500 px-5 py-2    font-bold text-white rounded-lg '>Subscribe</button>
            </div>

            </div>
       </div>
        <div className=' bg-slate-800   py-8 relative   '>
            {/* footer  */}
            <div className='mx-10 grid text-center sm:text-left   grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white mt-12'>
            <div >
                <h1 className='text-orange-500 text-3xl font-bold mt-12 sm:mt-0'>FOOD WAY</h1>
                <p className='text-sm my-3' >hello this my FOOD WAY website <br/> is a food batata and potato</p>
                <img src={noodl} className='h-48 sm:h-68  rounded-xl shadow-md m-auto sm:m-0'/>
            </div>
            <div>
                <h1 className='text-orange-500 text-3xl font-bold' >Page</h1>
                <ul className='my-8' >
                    <li>Home</li>
                    <li className='my-4'>About</li>
                    <li>Contact</li>
                </ul>

            </div>
                <div>
                    <h1 className='text-orange-500 text-3xl font-bold'>Page</h1>
                    <ul className='my-8' >
                        <li>delivery</li>
                        <li className='my-4'>Order Food</li>
                        <li>Subscribe</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-orange-500 text-3xl font-bold'>Contact</h1>
                    <ul className='my-8 ' >
                        <li className='flex items-center justify-center sm:justify-start' > <FaPhone className='mr-2 text-xl' /> (406) 555-0120</li>
                        <li className='my-4 flex items-center justify-center sm:justify-start '> <IoMailOpen className='mr-2 text-2xl'  /> Osupport@foodway.com</li>
                        <li  className='flex items-center justify-center sm:justify-start'> <IoLocationSharp  className='mr-2 text-2xl' /> 2971 westgate dr eustis <br/> fl illinois 89798</li>
                    </ul>
                </div>
            </div>
            <div>
                
            </div>
            <div  className='flex  justify-center   sm:justify-end mx-10 text-white text-3xl my-5 relative'>
                <div className='mx-5'><FaInstagram/></div>
                <div ><FaTwitter/></div>
                <div className='mx-5'><FaLinkedin/></div>
                <div><FaFacebook/></div>  
            </div>
       </div>
    </div>
  )
}

export default Contactus