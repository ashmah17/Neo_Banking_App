import React, { useState } from 'react'
import eye from '../assets/eye.svg'
import tablet from '../assets/tablet.svg'
import clock from '../assets/clock.svg'
import apple from '../assets/apple.svg'
import lock from '../assets/lock.svg'
import unlock from '../assets/unlocked.svg'
import angleRight from '../assets/angle-right.svg'
import BackButton from './BackButton'



const Setting = () => {

  const settings =[
    {title:'View Pin', img:eye},
    {title:'Replace your Card', img:tablet},
    {title:'Add to apple pay', img:apple},
    {title:'Repayments', img:clock},
  ]

  const [notify, setnotify] = useState(false);
  const handleNotification =()=>{
    setnotify(true);
  }
  return (
    <div className='p-2'>
      <BackButton/>

        <h1 className='p-2 text-center text-2xl font-primaryBold'>Setting</h1>
        <h1 className='p-3 mt-6 text-left text-2xl font-primaryBold'>Card Setting</h1>
        <div className=" m-2  p-3">
          <div className='bg-white rounded-2xl p-4 flex justify-between m-2'>
            <div className='flex'><img src={lock} className='mr-4 w-[1.5rem]' />Allow Transactions</div>
               <div className={` ${notify ? 'greenB': 'bg-gray-300'} w-[3.5rem] h-[2rem] rounded-full p-[.2rem] relative `}>
                  <div className={notify ? ' absolute right-[.2rem] w-[1.6rem] bg-white h-[1.6rem] rounded-full cursor-pointer': ' w-[1.6rem] bg-white h-[1.6rem] rounded-full cursor-pointer'} onClick={handleNotification}></div>
               </div>
          </div>

         <div>
           {settings.map((set)=>(
         <div className='bg-white rounded-2xl p-5 flex justify-between m-2 mt-4'>
            <div>
               <div className='flex'><img src={set.img} className='mr-4 w-[1.5rem]' />{set.title}</div>
            </div>
             <img src={angleRight} className='w-[1.5rem]'/>
            
          </div>
           ))}
         </div>
        </div>
    </div>
  )
}

export default Setting
