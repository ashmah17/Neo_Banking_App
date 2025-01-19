import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
 

  return (
    <div className='backG w-full h-[100vh] flex justify-center items-center'>
         <div className=' bg-white w-[25rem] h-[20rem] rounded-xl justify-center shadow flex flex-col'>
            <div className='flex flex-col m-2 '>
              <label  className='outline-green-400 ml-3 text-[1.2rem] font-PrimaryRegular text-gray-500' >Email</label>
              <input type="text"  className='bg-gray-100 h-12 outline-green-400 cursor-pointer p-2 rounded-xl outline-green-400 m-2'  />
            </div>
            <div className='flex flex-col  m-2 '>
              <label  className='outline-green-400 ml-3 text-[1.3rem] font-PrimaryRegular text-gray-500' >Email</label>
              <input type="text"  className='bg-gray-100 h-12 outline-green-400 cursor-pointer p-2 rounded-xl outline-green-400 m-2'  />
            </div>
            <button className='greenB m-4 p-3 font-primaryRegular rounded-2xl text-[1.3rem] text-white hover:bg-green-500 transition-all duration-300'>
              <Link to='/Dashboard'>Sign In</Link>
            </button>

      </div>
    </div>
  );
}

export default Login
