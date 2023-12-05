import React from 'react'
import chef1 from "../images/chef-images/chef1.jpg"
import chef2 from "../images/chef-images/chef2.jpg"
import chef3 from "../images/chef-images/chef3.jpg"
import chef4 from "../images/chef-images/chef4.jpg"
 
function Meetchef() {
  return (
    <div className=''>
         <div className=' text-center my-10  '>
            <h1  className=' text-3xl font-bold uppercase text-orange-500 '>meet our chef</h1>
            <p className='block text-sm pt-4 font-semibold'>this how we potato in the work we care about our chicken and our ducks and as we <br/>   know the potato have a good tast so we add more  </p>
        </div>
        <div className='   grid  mx-5 md:mx-10  sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-10'>

            <div className=' flex justify-center flex-col items-center  '>
                <img src={chef1} alt="stew" className= ' transition ease-out duration-200  rounded-3xl shadow-md  hover:shadow-lg w-72 h-72 sm:h-80 object-cover'/>
                <div className='text-xl text-center font-bold  my-5'>Maria Sadma</div>
            </div>

            <div className=' flex justify-center flex-col items-center'>
                <img src={chef2} alt="stew" className=' transition ease-out duration-200   rounded-3xl shadow-md hover:shadow-lg w-72 h-72 sm:h-80 object-cover'/>
                <div className='text-xl text-center font-bold  my-5 '>Jesa Mark</div>
            </div>

            <div className='flex justify-center flex-col items-center'>
                <img src={chef3} alt="stew" className=' transition ease-out duration-200  rounded-3xl shadow-md  hover:shadow-lg w-72 h-72 sm:h-80 object-cover'/>
                <div className='text-xl text-center font-bold  my-5 '>Mario Dennis </div>
            </div>
            
            <div className='flex justify-center flex-col items-center '>
                <img src={chef4} alt="stew" className=' transition ease-out duration-200   rounded-3xl shadow-md  hover:shadow-lg w-72 h-72 sm:h-80  object-fill '/>
                <div className='text-xl text-center font-bold  my-5 '>Elda James</div>
            </div>
        </div>
    </div>
  )
}

export default Meetchef