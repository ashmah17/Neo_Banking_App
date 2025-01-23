import React from 'react';
import home from '../assets/home.svg';
import map from '../assets/map.svg';
import setting from '../assets/setting.svg';
import transfer from '../assets/transfer.svg';
import profile from '../assets/profile.svg';
import {Link} from 'react-router-dom'

const Sidebar = ({ Hover, setHover, DarkMood }) => {
  

  const NavBar =[
    {title: 'Dashboard', img:home, path:'/Dashboard'},
    {title: 'Map', img:map,path:'/Map'},
    {title: 'Transfer', img:transfer, path:'/Transfer'},
    {title: 'Setting', img:setting, path:'/Setting'},
    {title: 'Profile', img:profile, path:'/Profile'}
  ]
  console.log(DarkMood, 'is')
  return (
   
    <div 
    className={`${DarkMood ? 'bg-white shadowD': 'bg-gray-900 border border-gray-700 shadowD'} ${Hover? 'md:w-[12rem] md:shadow':' md:shadow md:w-[5rem]'}   transition-all duration-300 md:flex-col flex justify-between overflow-hidden  p-3 w-full   h-[5rem]  md:rounded md:m-2 rounded-tr-[3rem] rounded-tl-[3rem] md:left-0 md:h-[97vh] fixed bottom-0`}
      onMouseEnter={()=> setHover(true)}
      onMouseLeave={()=> setHover(false)}
    >
     
      {NavBar.map((navbar, index)=>(

        <Link to={navbar.path}>
        <div  className={`${DarkMood? 'md:hover:bg-gray-100': 'md:hover:bg-gray-800'} cursor-pointer  rounded-xl p-2 md:w-[10rem] text-[1rem] font-semibold text-gray-500 md:justify-between md:flex md:items-center`}>
            <img src={navbar.img} className=' w-[2rem] sm:hover:w-[2.3rem] transition-all duration-300' />
            <h2 className='hidden md:block md:ml-4 font-primaryBold'>{navbar.title}</h2>
        </div>
        </Link>
      ))
      
      }
           
    </div>
   
  );
}

export default Sidebar;
