import './App.css';
import { FaHome } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoMenu } from "react-icons/io5"; 
import { useState } from 'react';
import Header from './components/header';
import Howwork from './components/how-work';
import Cardshop from './components/cardshop';
import Meetchef from './components/meetchef';
import Share from './components/share'; 
import Contactus from './components/contactus';

function App() {
  const [menuHidden, setMenuHidden] = useState(true);
  const handleBurgerClick = () => { 
    console.log('Burger clicked!');
    setMenuHidden(!menuHidden);
  };
  

  
  return (
    
    <div className=" text-gray-600 bg-gray-100   " >
     
    <div className="md:col-span-1 md:flex md:justify-evenly bg-white  ">
      <nav className=" text-right  md:flex md:justify-center  md:items-center  border-b w-full ">

        <div className='flex  justify-between items-center md:mr-20'>
          <h1 className=" font-bold uppercase text-xl md:flex md:justify-center p-4 border-gray-100">
            <a  href="/" className=' sm:text-orange-500'>Food way</a>
          </h1>
          <div id='burger' className='px-4 cursor-pointer md:hidden   ' onClick={handleBurgerClick} >
          <span  className='text-4xl'><IoMenu /></span>
          </div>
        </div>
        
        <ul className={ `  ml-4 ${menuHidden ? 'hidden' : ''} md:flex  md:justify-center  ` }  >
          <li className="  text-gray-700 font-bold py-2 md:hover:text-orange-500 rounded-md" >
            <a href="#" className='flex px-4 items-center justify-start border-l-4  border-red-500    '>
            <span className=' text-xl mr-2 '>< FaHome  /></span>
              <span>  Home</span>
              
            </a>
          </li>
          <li  className=" py-2  md:hover:text-red-500  rounded-md " >
            <a href="#" className='flex px-4 items-center justify-startfont-semibold border-l-4  border-white'>
            <span className=' text-xl mr-2 ' ><FaQuestionCircle /></span>
              <span>About</span>
              
            </a>
          </li>
          <li  className="py-2  md:hover:text-red-500 rounded-md  " >
            <a href="#" className='flex px-4 items-center  justify-start font-semibold border-l-4 border-white'>
            <span className='  text-xl mr-2 '><MdMessage /></span>
              <span>Contact</span>
             
            </a>
          </li>
          <li  className="py-2 text-center  md:hover:text-red-500 rounded-md  " >
            
            <a href="#" className=" text-xs btn border-red-500 md:border-2 md:hover:bg-red-500 md:hover:text-white py-2 px-3" >Log in</a>
             
            
          </li>
          <li  className="py-2   text-center  md:hover:text-red-500 rounded-md  " >
            
          <a href="#" className=' text-xs ml-2 btn md:border-red-500 md:border-2 md:hover:bg-red-500 md:hover:text-white py-2 px-3'>Sign up</a>
             
            
          </li>
          
        </ul>
        
        
      </nav>
    </div>
    <div><Header/></div>
    <div><Howwork/></div>
    <div>
    <Cardshop/>
    </div>
    <div><Share/></div>
    <div>
    <Meetchef/>
    </div>
    <div>
      <Contactus/>
    
    </div>
    
  
    
  </div>
  );
}

export default App;
