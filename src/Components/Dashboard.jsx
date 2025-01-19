import React, { useEffect, useState } from 'react'
import bell from '../assets/bell.svg'
import eyeSlash from '../assets/eye-slash.svg'
import add from '../assets/add.svg'
import mastercard from '../assets/mastercard.svg'
import profile from '../assets/profile.svg'
import eye from '../assets/eye.svg'
import visa from '../assets/visa.png'
import katdict from '../assets/katdict.png'
import dnky from '../assets/dnky.png'
import levis from '../assets/levis.png'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

const Dashboard = () => { 
  const [balance, setBalance] = useState(0); 
  useEffect(()=>{
    const savedMoney = localStorage.getItem('moneyAdded')
    if(savedMoney){
      setBalance(parseFloat(savedMoney));
    }
  },[])

  
   

  
  const [Hover, setHover] = useState(false); 
    const h = new Date().getHours();
    
    let greeting;
    if(h < 12){
      greeting = 'Morning'
    }else if(h > 12 < 18){
      greeting= 'Afternoon'
    }else{
      greeting='Evening'
    }

    const [eyeOpen, seteyeOpen] = useState(true);
    const handleOpen = ()=>{
        seteyeOpen(!eyeOpen)
      }

      const images = [katdict,levis,dnky,visa]
      const [currentIndex, setCurrentIndex] = useState(0);
      const showImage =(index)=>{
        setCurrentIndex(index)
      }

      const transactions = [
        {title: 'Starbucks', date: '12th December 2024', amount: '$24444', img:profile }, 
        {title: 'Amazon', date: '13th December 2024', amount: '$159', img:profile }, 
        {title: 'Netflix', date: '14th December 2024', amount: '$12.99', img:profile }, 
        {title: 'Apple Store', date: '15th December 2024', amount: '$799', img:profile }
      ]
    
      
  
  return ( 
      <div className='backG w-full h-screen overflow-scroll'> 
          <Sidebar Hover={Hover} setHover={setHover} />

          <div className={`${Hover ? 'md:ml-[14rem] md:pr-3' : 'ml-3 md:ml-[7rem] md:pr-3'} transition-all duration-300 flex-1   h-full`}>
            
              <div className='p-4  flex justify-between'>
                <div className='flex flex-col'>
                  <h1 className='text-xl text-gray-600 font-primaryBold '> {greeting} Aisha</h1>
                  <span className='text-[1rem] text-gray-400 font-primaryRegular'>Welcome to NeoBank</span>
                </div>

              <Link to='/Transaction'>
                <div className='shadow-xl w-[4rem] h-[3rem] relative flex justify-center rounded-xl'>
                    <img src={bell} className='w-[2rem] cursor-pointer'/>
                    <span className='absolute w-[.8rem] h-[.8rem] border greenB rounded-full right-4 top-2'></span>
                  </div>
              </Link>
              </div>

              <div className='bg-white w-full rounded-xl p-4 h-[26%]'>
                  <h3 className='p-2 text-gray-400 font-primaryRegular'>Your Balance</h3>
                  <div className=' h-[4.5rem] pr-2 flex justify-between'>
                    <h1 className={`${eyeOpen? 'pl-3':'text-3xl md:text-5xl font-primaryBold pl-3'}`}>
                      {eyeOpen ? <h1 className='text-4xl font-primaryBold'>......</h1> : <h1>${balance}</h1>}
                    </h1>
                   <button >
                    { eyeOpen? <img className='cursor-pointer w-[1.5rem]' onClick={handleOpen} src={eyeSlash}/> : <img onClick={handleOpen} className='cursor-pointer w-[1.5rem]' src={eye}/>}
                   </button>
                  </div>

                  <button className='font-primaryRegular bg-gray-900 text-white w-full p-2 rounded-full'>
                    <Link to='/AddMoney'>Add Money</Link>
                  </button>
              </div>


              <div className='   w-full h-[20rem] p-4'>
                  <div className='flex justify-between'>
                    <h2 className='text-gray-600 font-primaryBold'>Your Cards</h2>
                    <Link to='/NewCard'>
                      <h2 className='flex items-center text-gray-600 font-primaryBold'>
                        <img src={add} className='w-10 ' /> New Card
                      </h2>
                    </Link>
                  </div>

                <div className=' w-full flex relative overflow-hidden lg:justify-between' > 
             
                  <div className='shadowinset greenB w-[20rem] flex flex-col lg:w-[30rem] justify-between p-4 rounded-3xl md:w-[25rem] h-[13rem] m-2 '>
                        <div className='flex justify-between'>
                          <h1 className='text-gray-900 font-primaryRegular text-xl'>N.</h1>
                          <img src={mastercard} className='w-10' />
                        </div>

                        <div className='flex justify-between'>
                            <div>
                              <h2 className='font-primaryReglar'>Debit Card</h2>
                              <h2 className='font-bold font-primaryRegular'>....4321</h2>
                            </div>
                            <div className=' flex justify-between items-center w-[5rem]'>
                              <img src={eye} className='w-[1.3rem]' />
                              <h2 className='font-primaryRegular'>Details</h2>
                            </div>
                        </div>
                  </div>

                  <div className='shadowinsett bg-gray-900 w-[20rem] flex flex-col lg:w-[30rem] justify-between flex flex-cols p-4 rounded-3xl lg:bg-red-200 md:w-[25rem] h-[13rem] m-2 '>
                        <div className='flex justify-between'>
                          <h1 className='text-gray-200 font-primaryRegular text-xl'>N.</h1>
                          <img src={mastercard} className='w-10' />
                        </div>

                        <div className='flex justify-between'>
                            <div>
                              <h2 className='text-gray-300 font-primaryRegular'>Debit Card</h2>
                              <h2 className='font-primaryRegular text-white'>....4321</h2>
                            </div>
                            <div className=' flex justify-between items-center w-[5rem]'>
                              <img src={eye} className='w-[1.3rem]' />
                              <h2 className='text-gray-400 font-primaryRegular'>Details</h2>
                            </div>
                        </div>
                  </div>
                </div>

              </div>


           
              <div className='bg-white rounded-2xl w-full pb-3 '>
                <div className=' flex justify-between p-4'>
                  <h1 className='font-primaryBold'>Transactions</h1>
                  <h3 className='font-primaryRegular cursor-pointer'>See all</h3>
                </div>

                <div className=' ml-4 mr-4 justify-between items-center'>
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


              
              <div className='bg-white rounded-2xl w-full h-[55%]  mt-4 p-4 '>
               <div className='lg:flex lg:flex-cols-2'>
               <div className='w-full flex justify-between p-2 m-3 rounded-xl shadow'>
                  <h2 className='text-2xl font-primaryBold'>Rewards</h2>
                  <h2 className='font-primaryBold'>See all</h2>
                </div>
                <div className='w-full flex justify-between p-2 m-3 rounded-xl shadow'>
                  <p className='font-primaryRegular'>Cashback due date 5</p>
                  <p className='font-primaryBold'>+$5689</p>
                </div>
               </div>

                <div className='flex flex-col  m-3'>
                    <div className='w-full flex lg:justify-between p-2'>
                      {images.map((image, index) => {
                        const isVisible =
                          index === currentIndex ||
                          index === currentIndex - 1 ||
                          index === currentIndex + 1;

                        return (
                          <img
                            key={index}
                            src={image}
                            className={`transition-all duration-300 m-3 md:w-[19rem] w-[15rem] md:h-[10rem] h-[7rem] md:w-[12rem] shadow rounded-xl p-3  transition-all duration-300 cursor-pointer ${
                              isVisible ? 'block ' : 'hidden'}
                              ${index === currentIndex ? 'shadow-xl': ''}`}
                            onClick={() => showImage(index)}
                          />
                        );
                      })}
                    </div>

                    <div className='flex justify-center w-full mb-3'>
                      {images.map((_, index) => (
                        <span
                          key={index}
                          onClick={() => showImage(index)}
                          className={`w-[.7rem] h-[.7rem] bg-gray-200 m-2 rounded-full cursor-pointer ${
                            index === currentIndex ? 'bg-gray-400' : 'bg-gray-900'
                          }`}
                        ></span>
                      ))}
                    </div>
                </div>


              </div>
                
             
          </div>
          
      </div>
    );
  
  
  } 


export default Dashboard;