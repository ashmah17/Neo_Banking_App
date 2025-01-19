import React, { useEffect, useState } from 'react'
import BackButton from './BackButton'
import money from '../assets/money.svg'
import check from '../assets/check.svg'


const Transfer = () => {
  const [time, settime]= useState('');
  const [date, setdate]= useState('');
  const [day, setday]= useState('');

  useEffect(()=>{
    const currentDate = new Date();

    const currentTime = currentDate.toLocaleTimeString();
    const currentDayString = currentDate.toLocaleDateString('en-Us', {weekday: 'long', });
    const currentDateString = currentDate.toLocaleDateString('en-Us', {day:'numeric', month: 'long'});
  
    settime(currentTime);
    setdate(currentDateString);
    setday(currentDayString);
  })
  const transferInfo =[
    {title: 'Status', state:'Completed'},
    {title: 'Routing Number', state:'321466'},
    {title: 'Account Number', state:'5435467276434'},
    {title: 'Bank Name', state:'GT Bank'},
    {title: 'Note', state:'For Starbucks'},
  ]

  
  return (
    <div>
       <div className='p-4 flex justify-center'>
        <BackButton/>
        <h1 className='text-2xl font-primaryBold'>Details</h1>
    </div>
       <div className='flex justify-center p-10'>
       <img src={money} className='w-[9rem]'/>
       </div>
        
        <h1 className="text-center p-2 text-4xl font-primaryBold">-$3456</h1>
        <p className="text-center p-2 text-xl font-primaryRegular text-gray-500">Transfer to ............</p>
        <div className='flex justify-center p-3 text-xl font-primaryRegular text-gray-500'>
          <h1 className='m-2'>{day} </h1>
          <h1 className='m-2'>{date} </h1>
          <h1 className='m-2'>{time} </h1>
        </div>

        <div>
          {transferInfo.map((transfer)=>(
            <div className='flex p-4 justify-between'>
            <h1 className="text-gray-400 font-primaryRegular text-xl">{transfer.title}</h1>
            <h1 className="text-gray-600 font-primaryBold flex text-xl">{transfer.state}</h1>
          </div>
          ))}
        </div>
    </div>
  )
}

export default Transfer
