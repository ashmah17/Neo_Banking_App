import React from 'react';
import home from '../assets/home.svg';
import map from '../assets/map.svg';
import setting from '../assets/setting.svg';
import transfer from '../assets/transfer.svg';
import profile from '../assets/profile.svg';

const Sidebar = ({ Hover, setHover }) => {
  return (
   
    <div 
    className={` ${Hover? 'md:w-[12rem]':'md:w-[5rem]'} transition-all duration-300 md:flex-col flex justify-between overflow-hidden  p-3 w-full  bg-white h-[5rem] bottom-0 absolute md:rounded md:m-2 rounded-tr-[3rem] rounded-tl-[3rem] md:left-0 md:h-[98vh]`}
      onMouseEnter={()=> setHover(true)}
      onMouseLeave={()=> setHover(false)}
    >
    
      <div  className='cursor-pointer hover:bg-gray-200 rounded-xl p-2 w-[10rem] text-[1rem] font-semibold text-gray-500 md:justify-between md:flex md:items-center'>
          <img src={home} className=' w-10' />
          <h2 className='hidden md:block md:mr-4'>Home</h2>
      </div>

      <div  className='cursor-pointer hover:bg-gray-200 rounded-xl p-2 w-[10rem] text-[1rem] font-semibold text-gray-500 md:justify-between md:flex md:items-center'>
        <img src={map} className=' w-10' />
        <h2 className='hidden md:block md:mr-4'>Map</h2>
      </div>

      <div  className='cursor-pointer hover:bg-gray-200 rounded-xl p-2 w-[10rem] text-[1rem] font-semibold text-gray-500 md:justify-between md:flex md:items-center'>
        <img src={transfer} className=' w-10' />
        <h2 className='hidden md:block md:mr-4'>Transfer</h2>
      </div>

      <div  className='cursor-pointer hover:bg-gray-200 rounded-xl p-2 w-[10rem] text-[1rem] font-semibold text-gray-500 md:justify-between md:flex md:items-center'>
        <img src={setting} className=' w-10' />
        <h2 className='hidden md:block md:mr-4'>Setting</h2>
      </div>

      <div  className='cursor-pointer hover:bg-gray-200 rounded-xl p-2 w-[10rem] text-[1rem] font-semibold text-gray-500 md:justify-between md:flex md:items-center'>
        <img src={profile} className=' w-10' />
        <h2 className='hidden md:block  md:mr-4'>Profile</h2>
      </div>
      
    </div>
   
  );
}

export default Sidebar;
