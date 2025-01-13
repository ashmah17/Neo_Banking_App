import React, { useState } from 'react'
import home from '../assets/home.svg'
import map from '../assets/map.svg'
import setting from '../assets/setting.svg'
import transfer from '../assets/transfer.svg'
import profile from '../assets/profile.svg'
import Sidebar from './Sidebar'

const Dashboard = () => { const [Hover, setHover] = useState(false); 
  return ( 
      <div className='backG relative w-full h-[100vh]'> 
          <Sidebar Hover={Hover} setHover={setHover} />


          <div className={`${Hover ? 'ml-[12rem]' : 'ml-[5rem]'} transition-all duration-300 flex-1 bg-gray-200 m-2 h-full`}>
            
          </div>
      </div>
    );
  
  
  } 


export default Dashboard;