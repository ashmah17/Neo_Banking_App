import React from 'react'
import BackButton from './BackButton'
import check from '../assets/check.svg'
import {Link} from 'react-router-dom'

const Replacement = ({DarkMood}) => {
  return (
    <div className={`${DarkMood ? '': 'bg-gray-900'} h-[100vh] text-white `}>
        <div className='p-8 flex justify-center'>
            <BackButton/>
            <h1 className='text-2xl font-primaryBold'>Replace Your Card</h1>
        </div>
      <div className='mt-10'>
        <div className='grid justify-center p-3'>
            <img src={check} className='w-[10rem] '/>
        </div>

        <div className='p-8'>
            <h1 className='font-primaryBold text-2xl'>New Car Ready</h1>
            <p className='font-primaryRegular p-2 text-gray-500'>You can already use your new virtual card. The physsicalcard will be sent to your postal address shortly</p>
        </div>
       <Link to='/Dashboard'>
          <button className={`${DarkMood ? '': 'greenB'} bg-gray-900 text-white m-3 w-[97%] rounded-full p-2 absolute bottom-3`}>Ok!</button>
       </Link>
      </div>
        
    </div>
  )
}

export default Replacement
