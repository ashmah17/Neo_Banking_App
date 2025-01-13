import React, { useState } from 'react';
import angleLeft from '../Assets/angle-left.svg';
import angleRight from '../Assets/angle-right.svg';
import {Link} from "react-router-dom"



const Register = () => {

  const [Next, setNext] = useState(false);
  const [Back, setBack] = useState(true);

  const handleNext=()=>{
    setNext(true);

  }
  const handleBack=()=>{
    setNext(true);

  }


  return (
    <div className='backG w-full h-[100vh] flex justify-center items-center'>
      <div className='bg-white p-3 w-[90%] max-w-md md:max-w-2xl lg:max-w-4xl h-auto rounded-xl flex flex-col justify-center'>
        <div className={Next ? 'hidden':' bg-white   grid gap-2 md:gap-3 p-2 sm:grid-cols-1 md:grid-cols-2'}>
        
          <div className='w-full flex flex-col'>
            <label className='text-gray-400 font-semibold p-2'>Email</label>
            <input className='bg-gray-100 p-1 md:p-2 outline-green-400 rounded' placeholder='' />
          </div>
          <div className='w-full flex flex-col'>
            <label className='text-gray-400 font-semibold p-2'>Full Name</label>
            <input className='bg-gray-100 p-1 md:p-2 outline-green-400 rounded' placeholder='' />
          </div>
          <div className='w-full flex flex-col'>
            <label className='text-gray-400 font-semibold p-2'>Residential Address</label>
            <input className='bg-gray-100 p-1 md:p-2 outline-green-400 rounded' placeholder='' />
          </div>
          <div className='w-full flex flex-col'>
            <label className='text-gray-400 font-semibold p-2'>Phone Number</label>
            <input className='bg-gray-100 p-1 md:p-2 outline-green-400 rounded' placeholder='' />
          </div>
          <div className='w-full flex flex-col'>
            <label className='text-gray-400 font-semibold p-2'>Nationality</label>
            <input className='bg-gray-100 p-1 md:p-2 outline-green-400 rounded' placeholder='' />
          </div>
          <div className='w-full flex flex-col'>
            <label className='text-gray-400 font-semibold p-2'>Next of Kin</label>
            <input className='bg-gray-100 p-1 md:p-2 outline-green-400 rounded' placeholder='' />
          </div>
        </div>
        
        <div className={Next ? ' bg-white grid gap-2 md:gap-3 p-2 sm:grid-cols-1 md:grid-cols-2':'hidden'}>
        
          <div className='w-full flex flex-col'>
            <label className='text-gray-400 font-semibold p-2'>Email</label>
            <input className='bg-gray-100 p-1 md:p-2 outline-green-400 rounded' placeholder='' />
          </div>
          <div className='w-full flex flex-col'>
            <label className='text-gray-400 font-semibold p-2'>Email</label>
            <input className='bg-gray-100 p-1 md:p-2 outline-green-400 rounded' placeholder='' />
          </div>
          <div className='w-full flex flex-col'>
            <label className='text-gray-400 font-semibold p-2'>Email</label>
            <input className='bg-gray-100 p-1 md:p-2 outline-green-400 rounded' placeholder='' />
          </div>
          <div className='w-full flex flex-col'>
            <label className='text-gray-400 font-semibold p-2'>Email</label>
            <input className='bg-gray-100 p-1 md:p-2 outline-green-400 rounded' placeholder='' />
          </div>
          <div className='w-full flex flex-col'>
            <label className='text-gray-400 font-semibold p-2'>Email</label>
            <input className='bg-gray-100 p-1 md:p-2 outline-green-400 rounded' placeholder='' />
          </div>
          <div className='w-full flex flex-col'>
            <label className='text-gray-400 font-semibold p-2'>Email</label>
            <input className='bg-gray-100 p-1 md:p-2 outline-green-400 rounded' placeholder='' />
          </div>
              <button className='rounded-xl w-[98%] m-2 text-white font-semibold text-[1rem] greenB p-2 mt-4'>
                <Link to='/dashboard'>Sign Up</Link>
            </button>
        </div>
        
        
          <div className='flex-col flex justify-center items-center'>
            <div className='flex'>
              <img src={angleLeft} className='w-[2rem] cursor-pointer' onClick={handleBack} />
                <span className={Next? 'w-[.5rem] h-[.5rem] bg-gray-300 rounded-full  m-2':'w-[.5rem] h-[.5rem] greenB rounded-full text-gray-400 m-2'}></span>
                <span className={Next ? 'w-[.5rem] h-[.5rem] greenB rounded-full text-gray-400 m-2':'w-[.5rem] h-[.5rem] bg-gray-300 rounded-full text-gray-400 m-2'}></span>
              <img src={angleRight} className='w-[2rem] cursor-pointer' onClick={handleNext}/>  
          </div>
          </div>
      </div>
    </div>
  );
};

export default Register;
