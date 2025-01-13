import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
 

  return (
    <div className='backG w-full h-[100vh] flex justify-center items-center'>
         <div className=' bg-white w-[25rem] h-[20rem] rounded-xl shadow flex flex-col'>
            <div>
              <label  className='outline-green-400 m-2' >Email</label>
              <input type="text" placeholder='Email' className='outline-green-400 m-2'  />
            </div>
      </div>
    </div>
  );
}

export default Login
