import React from 'react'
import { useNavigate } from 'react-router-dom'
import angleleft from '../assets/angle-left.svg'




const BackButton = ({DarkMood}) => {
    const navigate = useNavigate();
      const back =()=>{
        navigate(-1)
      }
  return (
    <div className={` ${DarkMood ? 'bg-gray-900' : ''} fixed top-4 left-3 shadow w-[2.5rem] h-[2.5rem] rounded-xl  flex justify-center`}>
        <img src={angleleft} className='w-10' onClick={back} />
     </div>
  
  )
}

export default BackButton
