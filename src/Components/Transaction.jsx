import React, { useState } from 'react';
import BackButton from './BackButton';
import angleDown from '../assets/angle-down.svg';
import profile from '../assets/profile.svg';

const Transaction = () => {
  const transactions = [
         {title: 'Starbucks', date: '12th December 2024', amount: '$24444', img:profile }, 
         {title: 'Amazon', date: '13th December 2024', amount: '$159', img:profile }, 
         {title: 'Netflix', date: '14th December 2024', amount: '$12.99', img:profile }, 
         {title: 'Apple Store', date: '15th December 2024', amount: '$799', img:profile },
       ]
    const dropdownInfo = [
      {month:'january'},{ month:'february'},{ month:'March'},{ month:'April'}, {month:'May'}, {month:'June'}, {month:'July'}, {month:'August'}, {month:'September'}, {month:'October'}, {month:'November'}, {month:'December'}

       ]
       
       const [dropdown, setdropdown] = useState(false)
       const  handledropDown=()=>{
         setdropdown(true)
       }

  return (
    <>
     <div className='flex flex-col'>
        <div className='p-8 flex justify-center'>
            <BackButton/>
            <h1 className='text-2xl font-primaryBold'>Transactions</h1>
        </div>

        <div className='flex justify-between md:justify-center '>
         <button className="">
          <img src={angleDown} className='w-[1.3rem] ml-2' onClick={handledropDown}/>
          {dropdown && (
              <div>
                {dropdownInfo.map((trans)=>(
                  <h1>{trans.month}</h1>
                ))}
              </div>
          )}
         </button>

          
          <div className='cursor-pointer flex  pl-4 justify-center rounded-full p-1 bg-white m-2'>
            <h3>Debit Card</h3>
            <img src={angleDown} className='w-[1.3rem] ml-2' />
          </div>
          <div className='cursor-pointer flex pl-4 justify-center rounded-full p-1 bg-white m-2'>
            <h3>Sum</h3>
            <img src={angleDown} className='w-[1.3rem] ml-2' />
          </div>
          
        </div>

        <div className='m-6 rounded-2xl p-2 bg-white'>
            <span className='flex justify-between p-2 font-primaryRegular text-gray-400 '>
              <h4>Date</h4>
              <h4>Total</h4>
            </span>
            
            <span className='flex justify-between p-2 font-primaryBold '>
              <h4>12th October, 2025</h4>
              <h4>$2345</h4>
            </span>
           
            <div className=' ml-4 mr-4 justify-between items-center  p-2 rounded-2xl'>
                  {transactions.map((transaction)=>(
                    <>
                      <div className='flex items-center justify-between'>
                       <div className=' flex'>
                       <img src={transaction.img} className='w-[4rem] p-2 shadow-xl rounded-xl mr-4' />
                        <div>
                          <h1 className='text-xl font-primaryBold'>{transaction.title}</h1>
                          <span className='font-primaryRegular'>{transaction.date}</span>
                        </div>
                       </div>

                        <div className='mr-4'>
                          <h2 className='font-primaryRegular'> {transaction.amount}</h2>
                        </div>
                    </div>
                    <div className=' h-[.1rem] bg-gray-200 m-6'></div>

                    </>
                 ))}
            </div>



        </div>

     </div>
    
    </>
  );
};

export default Transaction;
