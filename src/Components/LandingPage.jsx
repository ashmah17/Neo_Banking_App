import React, { useEffect, useState } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

const LandingPage = () => {

  const [Waiting, setWaiting] = useState(true);

  useEffect(()=>{
    const interval = setInterval(() => {
      setWaiting(false)
      
    }, 3000);
    return ()=> clearInterval(interval)
  })
  
  return (
    <>
      <div className={ Waiting? 'bg-black w-full h-[100vh] flex flex-col justify-center items-center': 'hidden'}>
        <h1 className='text text-[6rem]'>N.</h1>
        <h3 className='text text-3xl'>Banking System</h3>
      </div>

     <div className={Waiting ? 'hidden':' w-full h-[100vh] flex justify-center items-center backG'} >
          <div className='w-[30rem] h-[20rem] bg-white rounded-xl shadow flex flex-col justify-center items-center'>
            <button className='greenB w-[25rem] p-2 m-4 h-[4rem] rounded-2xl text-white text-2xl shadow-xl hover:bg-green-500 transition-all duration-300 '>
              <Link to='/Login'>Sign In</Link>
            </button>
            <button className='greenB w-[25rem] p-2 m-4 h-[4rem] rounded-2xl text-white text-2xl shadow-xl hover:bg-green-500 transition-all duration-300 '>
              <Link to='/Register'>Sign Up</Link>
            </button>
          </div>
     </div>

    </>
  )
};
export default LandingPage;
