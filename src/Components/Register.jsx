import React, { useState } from 'react';
import angleLeft from '../Assets/angle-left.svg';
import angleRight from '../Assets/angle-right.svg';
import {Link} from "react-router-dom"



const Register = () => {

  const [Next, setNext] = useState(false);
  const [Back, setBack] = useState(false);

  const handleNext=()=>{
    setNext(true);
    setBack(false);
    
  }
  const handleBack=()=>{
    setBack(true);
    setNext(false);
  }
  const RegistrationInfo = [
    {title:'Full Name'},
    {title:'Date of Birth'},
    {title:'Phone Number'},
    {title:'Email'}
  ]
  const RegistrationInfo2 = [
    {title:'Nationality'},
    {title:'Home Address'},
    {title:'Password'},
    {title:'Confirm Password'}
  ]

  return (
    <div className='backG w-full h-[100vh] flex justify-center items-center'>
      <div className='bg-white p-3 w-[90%] max-w-md md:max-w-2xl lg:max-w-4xl h-auto rounded-xl flex flex-col justify-center'>

        <h1 className='p-3 text-2xl font-primaryRegular pb-6 text-gray-500'>Personal Info</h1>
        <div className={Next ? 'hidden':' bg-white   grid gap-2 md:gap-3 p-2 sm:grid-cols-1 md:grid-cols-2'}>
        
          {RegistrationInfo.map((register)=>(
            <div className='w-full flex flex-col'>
              <label className='text-gray-400 font-semibold p-2'>{register.title}</label>
              <input className='bg-gray-100 p-1 md:p-2 outline-green-400 rounded' placeholder='' />
            </div>

          ))}

        </div>
        
        <div className={Next ? ' ':'hidden'}>
        
          <div className='bg-white grid gap-2 md:gap-3 p-2 sm:grid-cols-1 md:grid-cols-2'>
            {RegistrationInfo2.map((register)=>(
              <div className='w-full flex flex-col'>
              <label className='text-gray-400 font-semibold p-2'>{register.title}</label>
              <input className='bg-gray-100 p-1 md:p-2 outline-green-400 rounded' placeholder='' />
            </div>
            ))}
          </div>

            <button className='hover:shadow shadow-xl transition-all duration-300 rounded-xl w-[98%] m-2 text-white font-semibold text-[1rem] greenB p-2 mt-4'>
                <Link to='/dashboard'>Sign Up</Link>
            </button>
        </div>

          <div className='flex-col flex justify-center items-center'>
            <div className='flex'>
              <img src={angleLeft} className='w-[2rem] cursor-pointer' onClick={handleBack} />
                <span className={`${Next? ' bg-gray-300 ':'greenB'} w-[.5rem] h-[.5rem] rounded-full  m-2 `}></span>
                <span className={`${Next ? ' greenB ':'bg-gray-300'} w-[.5rem] h-[.5rem]  rounded-full  m-2 `}></span>
              <img src={angleRight} className='w-[2rem] cursor-pointer' onClick={handleNext}/>  
          </div>
          </div>
      </div>
    </div>
  );
};

export default Register;
