import React from 'react';
import home from '../assets/home.svg';
import map from '../assets/map.svg';
import setting from '../assets/setting.svg';
import transfer from '../assets/transfer.svg';
import profile from '../assets/profile.svg';
import {Link} from 'react-router-dom'

const Sidebar = ({ Hover, setHover }) => {
  return (
   
    <div 
    className={` ${Hover? 'md:w-[12rem] md:shadow-xl':' md:shadow-xl md:w-[5rem]'} shad transition-all duration-300 md:flex-col flex justify-between overflow-hidden  p-3 w-full  bg-white h-[5rem] bottom-0 absolute md:rounded md:m-2 rounded-tr-[3rem] rounded-tl-[3rem] md:left-0 md:h-[97vh]`}
      onMouseEnter={()=> setHover(true)}
      onMouseLeave={()=> setHover(false)}
    >
    
        <Link to='/Dashboard'>
          <div  className='cursor-pointer md:hover:bg-gray-200 rounded-xl p-2 md:w-[10rem] text-[1rem] font-semibold text-gray-500 md:justify-between md:flex md:items-center'>
              <img src={home} className=' w-[2rem] sm:hover:w-[2.3rem] transition-all duration-300' />
              <h2 className='hidden md:block md:mr-4 font-primaryBold'> Home</h2>
          </div>
        </Link>

      <Link to='/Map'>
        <div  className='cursor-pointer md:hover:bg-gray-200 rounded-xl p-2 md:w-[10rem] text-[1rem] font-semibold text-gray-500 md:justify-between md:flex md:items-center'>
          <img src={map} className=' w-[2rem]  sm:hover:w-[2.3rem] transition-all duration-300' />
          <h2 className='hidden md:block md:mr-4 font-primaryBold'>Map</h2>
        </div>
      </Link>

      <Link to='/Transfer'>
        <div  className='cursor-pointer md:hover:bg-gray-200 rounded-xl p-2 md:w-[10rem] text-[1rem] font-semibold text-gray-500 md:justify-between md:flex md:items-center'>
          <img src={transfer} className=' w-[2rem]  sm:hover:w-[2.3rem] transition-all duration-300' />
          <h2 className='hidden md:block md:mr-4 font-primaryBold'>Transfer</h2>
        </div>
      </Link>

     <Link to='/Setting'>
        <div  className='cursor-pointer md:hover:bg-gray-200 rounded-xl p-2 md:w-[10rem] text-[1rem] font-semibold text-gray-500 md:justify-between md:flex md:items-center'>
            <img src={setting} className=' w-[2rem]  sm:hover:w-[2.3rem] transition-all duration-300' />
            <h2 className='hidden md:block md:mr-4 font-primaryBold'>Setting</h2>
          </div> 
     </Link>

      <Link to='/Profile'>
        <div  className='cursor-pointer md:hover:bg-gray-200 rounded-xl p-2 md:w-[10rem] text-[1rem] font-semibold text-gray-500 md:justify-between md:flex md:items-center'>
          <img src={profile} className=' w-[2rem]  sm:hover:w-[2.3rem] transition-all duration-300' />
          <h2 className='hidden md:block  md:mr-4 font-primaryBold'>Profile</h2>
        </div>
      </Link>
      
    </div>
   
  );
}

export default Sidebar;
