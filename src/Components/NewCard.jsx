import React, { useState } from 'react'
import BackButton from './BackButton'
import credit from '../assets/credit.svg'
import circle from '../assets/circle.svg'
import arrowRight from '../assets/arrow-right.svg'
import circleFilled from '../assets/circle-filled.svg'

import { Link } from 'react-router-dom'

const NewCard = ({DarkMood}) => {
    const [check,setCheck] = useState(true)
    const handleCheck =()=>{
        setCheck(false)
    }
    const [check2,setCheck2] = useState(true)
    const handleCheck2 =()=>{
        setCheck2(false)
    }
    const [check3,setCheck3] = useState(true)
    const handleCheck3 =()=>{
        setCheck3(false)
    }
    const [newCard,setnewCard] = useState(true)
        const handleNewCard=()=>{
            setnewCard(false)
        }

  return (
    <>
    <div className={`${newCard? 'p-4 h-[100vh]': 'hidden'} ${DarkMood ? '': 'bg-gray-900'}`}>
    <div className='p-4 flex justify-center'>
        <BackButton/>
        <h1 className={` ${DarkMood ? '': 'text-white'} text-2xl font-primaryRegular `}>Replace Your Card</h1>
    </div>
    
    <div className='grid justify-center p-3'>
        <img src={credit} className='w-[10rem] rotate-[320deg]'/>
        <span className='greenB w-full h-[.5rem] rounded-full'></span>
    </div>

    <div className='p-6 md:flex'>
       <div className=' md:w-[100%] md:mr-2 md:pt-6'>
        <h1 className={` ${DarkMood ? '': 'text-gray-400'} text-xl font-primaryBold`}>New card is coming right up</h1>
            <p className={` font-primaryRegular text-gray-500`}>what happen to your card? Select the reason for replacement</p>
       </div>

       <div className=' md:w-[100%] md:ml-8 md:pt-3'>
       <span className='flex p-2 shadow m-3 rounded-xl'>
            <button onClick={handleCheck}>
               { check ?  <img src={circle} className='w-[1.5rem] mr-4 cursor-pointer' />  :  <img src={circleFilled} className='w-[1.5rem] mr-4 cursor-pointer' />  }
            </button>
            <h1 className={`${DarkMood ? '': 'text-gray-300 font-primaryRegular'} `}>Card is Stolen</h1>
            </span>
            <span className='flex p-2 shadow m-3 rounded-xl'>
                <button onClick={handleCheck2}>
                { check2 ?  <img src={circle} className='w-[1.5rem] mr-4 cursor-pointer' />  :  <img src={circleFilled} className='w-[1.5rem] mr-4 cursor-pointer' />  }
                </button>

                <h1 className={`${DarkMood ? '': 'text-gray-300 font-primaryRegular'} `}>Card is Lost</h1>
            </span>
            <span className='flex p-2 shadow m-3 rounded-xl'>
                <button onClick={handleCheck3}>
                { check3 ?  <img src={circle} className='w-[1.5rem] mr-4 cursor-pointer' />  :  <img src={circleFilled} className='w-[1.5rem] mr-4 cursor-pointer' />  }
                </button>
                <h1 className={`${DarkMood ? '': 'text-gray-300 font-primaryRegular'} `}> Card is Damaged</h1>
            </span>
       </div>
    </div>

    <button onClick={handleNewCard} className={`bg-gray-900 w-[96%] p-2 rounded-full font-primaryRegular text-white fixed bottom-5 ${DarkMood ? '': 'greenB'} `}>Continue</button>
    </div>

    <div className={` ${newCard? 'hidden': ' p-4'} h-[100vh] ${DarkMood ? '': ' bg-gray-900 text-white font-primaryRegular'}`}>
    <div className='p-4 flex justify-center'>
        <BackButton/>
        <h1 className={`${DarkMood ? 'text-white bg-red-900' : ''} text-2xl font-primaryBold `}>Replace Your Card</h1>
    </div>
   
    <div className='p-6 md:flex'>
       <div className='w-[100%] md:m-2 md:p-4'>
            <h1 className='text-xl font-primaryBold'>Confirm Card Replacement</h1>
            <p className='font-primaryRegular text-gray-500'>pls confirm ure goint to replace ur card this is what is going to happen</p>
       </div>
       <div className="w-[100%] md:m-2">
            <div className='flex p-2 m-3 rounded-xl'>
                <img src={arrowRight} className='w-[2.5rem] h-[2.5rem] p-2 mr-4 cursor-pointer shadow rounded-3xl' /> 
            
            <span>
                <h1 className='font-primaryBold'>Card is Stolen</h1>
                    <h2 className='text-[.9rem] text-gray-500'>pls confirm ure goint to replace ur card this is what is going to happen</h2>
            </span>
            </div>
            <div className='flex p-2 m-3 rounded-xl'>
                <img src={arrowRight} className='w-[2.5rem] h-[2.5rem] p-2 mr-4 cursor-pointer shadow rounded-3xl' /> 
            
            <span>
                <h1 className='font-primaryBold'>Card is Stolen</h1>
                    <h2 className='text-[.9rem] text-gray-500'>pls confirm ure goint to replace ur card this is what is going to happen</h2>
            </span>
            </div>
            <div className='flex p-2 m-3 rounded-xl'>
                <img src={arrowRight} className='w-[2.5rem] h-[2.5rem] p-2 mr-4 cursor-pointer shadow rounded-3xl' /> 
            
            <span>
                <h1 className='font-primaryBold'>Card is Stolen</h1>
                    <h2 className='text-[.9rem] text-gray-500'>pls confirm ure goint to replace ur card this is what is going to happen</h2>
            </span>
            </div>
       </div>
    </div>
        <Link to='/Replacement'>
            <button className={`${DarkMood ? '': 'greenB'} bg-gray-900 w-[96%] p-2 rounded-full font-primaryRegular text-white fixed bottom-5`}>Replace your Card</button>
        </Link>
    </div>

</>
  )
}

export default NewCard
