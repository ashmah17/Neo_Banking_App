import React from 'react'
import { useNavigate } from 'react-router-dom'
import angleleft from '../assets/angle-left.svg'




const BackButton = () => {
    const navigate = useNavigate();
      const back =()=>{
        navigate(-1)
      }
  return (
    <div className='fixed top-4 left-3 bg-white shadow w-[2.5rem] h-[2.5rem] rounded-xl  flex justify-center'>
        <img src={angleleft} className='w-10' onClick={back} />
     </div>
  
  )
}

export default BackButton
