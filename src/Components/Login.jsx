import React from 'react'
import {Link} from 'react-router-dom'

const Login = ({DarkMood}) => {
 

  return (
    <div className={`${DarkMood ? '': 'backM'} w-full h-[100vh] flex justify-center items-center`}>
         <div className={`${DarkMood ? '': 'shadowinsety p-3 bg-gray-900'} w-[86%] h-[23rem] rounded-xl justify-center shadow flex flex-col`}>
            <div className='flex flex-col m-2 '>
              <label  className={` ${DarkMood ? 'text-gray-500': 'text-gray-300'} outline-green-400 ml-3 text-[1.2rem] font-PrimaryRegular `} >Email</label>
              <input type="text"  className={` ${DarkMood ? '': ' bg-gray-800'} g-gray-100 h-12 outline-green-400 cursor-pointer p-2 rounded-xl outline-green-400 m-2`}  />
            </div>
            <div className='flex flex-col  m-2 '>
              <label  className={` ${DarkMood ? 'text-gray-500': 'text-gray-300'} outline-green-400 ml-3 text-[1.3rem] font-PrimaryRegular `} >Password</label>
              <input type="password"  className={` ${DarkMood ? '': 'bg-gray-800'} g-gray-100 h-12 outline-green-400 cursor-pointer p-2 rounded-xl outline-green-400 m-2`}  />
            </div>
            <p className='text-right mr-2 text-gray-300  font-primaryRegular'>Did'nt have an account?
              <Link to='/Register'>
                <span className='ml-3 text'>Sign up....</span>
              </Link>
            </p>
            <button className='greenB m-4 p-3 font-primaryRegular rounded-2xl text-[1.3rem] text-white hover:shadow shadow-xl transition-all duration-300'>
              <Link to='/Dashboard'>Sign In</Link>
            </button>

      </div>
    </div>
  );
}

export default Login
