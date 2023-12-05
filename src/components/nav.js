import React from 'react'
import { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoMenu } from "react-icons/io5"; 
import { Link } from 'react-router-dom'
import { SiProducthunt } from "react-icons/si";

function Nav() {
    const [menuHidden, setMenuHidden] = useState(true);
    const handleBurgerClick = () => { 
      console.log('Burger clicked!');
      setMenuHidden(!menuHidden);
    };
    
  return (
    <div className="md:col-span-1 md:flex md:justify-evenly bg-white  ">
      <nav className=" text-right  md:flex md:justify-center  md:items-center  border-b w-full ">

        <div className='flex  justify-between items-center md:mr-20'>
          <h1 className=" font-bold uppercase text-xl md:flex md:justify-center p-4 border-gray-100">
            <Link to={`/`} className=' text-orange-500 hover:text-orange-600 transition ease-out duration-200 '>Food way</Link>
          </h1>
          <div id='burger' className='px-4 cursor-pointer md:hidden   ' onClick={handleBurgerClick} >
          <span  className='text-4xl'><IoMenu /></span>
          </div>
        </div>
        
        <ul className={ `  ml-4 ${menuHidden ? 'hidden' : ''} md:flex  md:justify-center  ` }  >
          <li className="  text-gray-700 font-bold py-2 md:hover:text-orange-500 rounded-md" >
            <a href="#" className='flex px-4 items-center justify-start border-l-4 transition ease-out duration-200 border-red-500    '>
            <span className=' text-xl mr-2 '>< FaHome  /></span>
              <span> <Link  to={`/`}> Home </Link>   </span>
              
            </a>
          </li>
          <li  className=" py-2  md:hover:text-orange-500  rounded-md transition ease-out duration-200 " >
            <a href="#" className=' font-semibold flex px-4 items-center justify-startfont-semibold border-l-4  border-white'>
            <span className=' text-xl mr-2 ' ><SiProducthunt  /></span>
              <span><Link  to={`/product`}> Product </Link> </span>
              
            </a>
          </li>
          <li  className="py-2  md:hover:text-orange-500 rounded-md  " >
            <a href="#" className='flex px-4 items-center  transition ease-out duration-200  justify-start font-semibold border-l-4 border-white'>
            <span className='  text-xl mr-2 '><FaQuestionCircle /></span>
              <span>About</span>
             
            </a>
          </li>
          <li  className="py-2  md:hover:text-orange-500 rounded-md  " >
            <a href="#" className='flex px-4 items-center  transition ease-out duration-200  justify-start font-semibold border-l-4 border-white'>
            <span className='  text-xl mr-2 '><MdMessage /></span>
              <span>Contact</span>
             
            </a>
          </li>
          <li  className="py-2 text-center  md:hover:text-orange-500 rounded-md  " >
            
            <a href="#" className=" text-orange-600 transition ease-out duration-200 text-xs btn border-orange-500 md:border-2 md:hover:bg-orange-500 md:hover:text-white py-2 px-3" >Log in</a>
             
            
          </li>
          <li  className="py-2   text-center  md:hover:text-orange-500 rounded-md  " >
            
          <a href="#" className=' text-orange-600 transition ease-out duration-200 text-xs ml-2 btn md:border-orange-500 md:border-2 md:hover:bg-orange-500 md:hover:text-white py-2 px-3'>Sign up</a>
             
            
          </li>
          
        </ul>
        
        
      </nav>
    </div>
  )
}

export default Nav