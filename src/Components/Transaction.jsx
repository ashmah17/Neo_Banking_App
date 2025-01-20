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
         setdropdown(!dropdown)
       }
       const [dropdown2, setdropdown2] = useState(false)
       const  handledropDown2=()=>{
         setdropdown2(!dropdown2)
       }

  return (
    <>
     <div className='flex flex-col'>
        <div className='p-8 flex justify-center'>
            <BackButton/>
            <h1 className='text-2xl font-primaryBold'>Transactions</h1>
        </div>

        <div className='flex justify-between md:justify-center '>
         <div>
          <button className="bg-white flex outline-none p-2 shadow m-2 w-[6rem] justify-between rounded">
            Period
            <img src={angleDown} className='w-[1.3rem] ml-2' onClick={handledropDown}/>
          </button>

            <div className='bg-white shadow-2xl absolute ml-3 rounded p-2'>
            {dropdown && (
              <div>
                  {dropdownInfo.map((trans)=>(
                    <h1 className='p-1 hover:bg-gray-200 cursor-pointer transition-all duration-300'>{trans.month}</h1>
                  ))}
                </div>
            )}
          
            </div>
         </div>
            
         <div className='cursor-pointer flex pl-4 justify-center rounded p-1 bg-white m-2'>
            <h3>Debit ....354546</h3>
           
          </div>
  
         <div>
          <button className="bg-white flex outline-none p-2 shadow m-2 w-[6rem] justify-between rounded">
            Period
            <img src={angleDown} className='w-[1.3rem] ml-2' onClick={handledropDown2}/>
          </button>

            <div className='bg-white shadow-2xl absolute ml-3 rounded p-2'>
            {dropdown2 && (
              <div>
                  {dropdownInfo.map((trans)=>(
                    <h1 className='p-1 hover:bg-gray-200 cursor-pointer transition-all duration-300'>{trans.month}</h1>
                  ))}
                </div>
            )}
          
            </div>
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
