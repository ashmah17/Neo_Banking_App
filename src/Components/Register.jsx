import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {Link} from "react-router-dom"



const Register = ({DarkMood}) => {

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
    <div className={`${DarkMood ? 'backG':'backM'}  w-full h-[100vh] flex justify-center items-center`}>
      <div className={` ${DarkMood ? 'bg-white': 'bg-gray-900 shadowinsety text-white'}  p-3 w-[86%] max-w-md md:max-w-2xl lg:max-w-4xl h-auto rounded-xl flex flex-col justify-center`}>

        <h1 className={` ${DarkMood ? '': 'text-white'} p-3 text-2xl font-primaryRegular pb-6 text-gray-500`}>Personal Info</h1>
        <div className={`${Next ? 'hidden':  'block'} grid gap-2 md:gap-3 p-2 sm:grid-cols-1 md:grid-cols-2 ${DarkMood ? ' bg-white ':''}`}>
        
          {RegistrationInfo.map((register)=>(
            <div className='w-full flex flex-col'>
              <label className='text-gray-400 font-semibold p-2'>{register.title}</label>
              <input className={` ${ DarkMood ? 'bg-gray-100': 'bg-gray-800'} p-1 md:p-2 outline-green-400 rounded`} placeholder='' />
            </div>

          ))}

        </div>
        
        <div className={Next ? ' ':'hidden'}>
        
        <div className={` p-3 w-[100%] max-w-md md:max-w-2xl lg:max-w-4xl h-auto rounded-xl flex flex-col justify-center`}>
          {RegistrationInfo2.map((register)=>(
            <div className='w-full flex flex-col'>
              <label className='text-gray-400 font-semibold p-2'>{register.title}</label>
              <input className={` ${DarkMood ? 'bg-gray-100 ': 'bg-gray-800 text-white'} p-1 md:p-2 outline-green-400 rounded`} placeholder='' />
            </div>
            ))}
          </div>
            <Link to='/Login'>
              <h4 className='text-right p-1 text'>Already have an account?</h4>
            </Link>
            <button className='hover:shadow shadow-xl transition-all duration-300 rounded-xl w-[98%] m-2 text-white font-semibold text-[1rem] greenB p-2 mt-4'>
                <Link to='/dashboard'>Sign Up</Link>
            </button>
        </div>

          <div className=' flex justify-center items-center'>
             <button onClick={handleBack}  >
                <ChevronLeft size={20} className={DarkMood ? 'text-gray-400':'text-white'} />
              </button>
                <span className={`${Next? ' bg-gray-300 ':'greenB'} w-[.5rem] h-[.5rem] rounded-full  m-2  ${Back ? '': ''}`}></span>
                <span className={`${Next ? ' greenB ':'bg-gray-300'} w-[.5rem] h-[.5rem]  rounded-full  m-2 `}></span>
                <button onClick={handleNext} >
                <ChevronRight size={20} className={DarkMood ? 'text-gray-400':'text-white'}/>
              </button>


        

          </div>
      </div>
    </div>
  );
};

export default Register;
