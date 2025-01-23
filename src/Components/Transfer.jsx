import React, { useEffect, useState } from 'react'
import BackButton from './BackButton'
import money from '../assets/money.svg'


const Transfer = ({DarkMood}) => {
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
  },[])
  

  const[AddMoney, setAddMoney] = useState(()=>{
    const savedMoney = localStorage.getItem('moneyAdded');
    return savedMoney ? parseFloat  (savedMoney) : 0
  })
  const[inputChange, setinputChange] = useState('')
  const[inputBank, setinputBank] = useState('')
  const[inputNumber, setinputNumber] = useState('')
  const[inputNote, setinputNote] = useState('')

  const handleInputChange=(event)=>{
    const {name, value} = event.target;
    if(name === 'amount'){
      setinputChange(value);
    }else if (name === 'bank'){
      setinputBank(value);
    }else if (name === 'number'){
      setinputNumber(value);
    }else if(name === 'note'){
      setinputNote(value);
    }
  }
  
  const [receipt, setreceipt] = useState(false)
  const handleClick=()=>{
    const Amount = AddMoney - parseFloat(inputChange);
    setAddMoney(Amount)
    localStorage.setItem('moneyAdded', Amount)
    alert(`${inputChange} 'Successfully Transfered`);
      setreceipt(true)
  }


  return (
    <div className={DarkMood ? 'h-[100%]': 'bg-gray-900 h-[100%]'}>
       <div className='p-4 flex justify-center'>
        <BackButton/>
        <h1 className={DarkMood ? 'bg-red-900' : 'text-white text-2xl font-primaryBold'}>Details</h1>
    </div>
       <div className='flex justify-center p-10'>
       <img src={money} className='w-[9rem]'/>
       </div>

          <div className={receipt ? 'hidden' :'flex justify-center flex-col font-primaryRegular'}>
            <h1 className="text-center text-3xl m-4 font-primaryBold">${inputChange}</h1>
            <p className={` ${DarkMood ? '':'text-white'} flex justify-center text-gray-500`}>Available Balance<h1 className={`${DarkMood ? '': 'text-white'} text-center font-primaryBold text-gray-500 pl-2`}>${AddMoney}</h1>
            </p>
            <div className=' grid md:grid-cols-2 m'>
                <input onChange={handleInputChange} name='amount' className={`${DarkMood? '': 'bg-gray-800'} m-4  outline-gray-400 p-2 rounded-xl`}  placeholder='Amount' required/>
                <input onChange={handleInputChange} name="number" className={`${DarkMood? '': 'bg-gray-800'} m-4  outline-gray-400 p-2 rounded-xl`}   placeholder='Account Number' required/>
                <input onChange={handleInputChange} name="bank" className={`${DarkMood? '': 'bg-gray-800'} m-4  outline-gray-400 p-2 rounded-xl`}   placeholder='Bank Name'/>
                <input onChange={handleInputChange} name="note" className={`${DarkMood? '': 'bg-gray-800'} m-4  outline-gray-400 p-2 rounded-xl`}   placeholder='Transfered for?' required/>
                
            </div>
            <button onClick={handleClick} className="greenB m-4 rounded-xl p-2 text-[1.2rem] font-primaryRegular text-white ">Submit </button>
          </div>


        
              <div className={receipt ? '' : 'hidden'}>
              <h1 className={`${DarkMood ? '': 'text-white'} text-center p-2 text-4xl font-primaryBold`}>${inputChange}</h1>
              <p className={ `${DarkMood ?  '': 'text-white'} text-center p-2 text-xl font-primaryRegular text-gray-500`}>Transfer to {inputBank}</p>
              <div className='flex justify-center p-3 text-xl font-primaryRegular text-gray-500'>
                <h1 className={`${DarkMood ? '': 'text-white'} m-2`}>{day} </h1>
                <h1 className={`${DarkMood ? '': 'text-white'} m-2`}>{date} </h1>
                <h1 className={`${DarkMood ? '': 'text-white'} m-2`}>{time} </h1>
              </div>

              <div className=' pl-8 pr-8'>
                  <div className={` ${DarkMood ? '':'text-white'} flex p-4 justify-between`}>
                  <h1 className={`${DarkMood ? '':'text-white'} text-gray-400 font-primaryRegular text-xl`} >Status</h1>
                  <h1 className={`${DarkMood ? '' : 'text-white'} text-gray-600 font-primaryBold flex text-xl`}>Completed</h1>
                </div>
                  <div className={` ${DarkMood ? '':'text-white'} flex p-4 justify-between`}>
                  <h1 className={`${DarkMood ? '':'text-white'} text-gray-400 font-primaryRegular text-xl`} >Routing Number</h1>
                  <h1 className="text-gray-600 font-primaryBold flex text-xl">657597869757</h1>
                </div>
                  <div className={` ${DarkMood ? '':'text-white'} flex p-4 justify-between`}>
                  <h1 className={`${DarkMood ? '':'text-white'} text-gray-400 font-primaryRegular text-xl`} >Account Number</h1>
                  <h1 className="text-gray-600 font-primaryBold flex text-xl">{inputNumber}</h1>
                </div>
                  <div className={` ${DarkMood ? '':'text-white'} flex p-4 justify-between`}>
                  <h1 className={`${DarkMood ? '':'text-white'} text-gray-400 font-primaryRegular text-xl`} >Bank Name</h1>
                  <h1 className="text-gray-600 font-primaryBold flex text-xl">{inputBank}</h1>
                </div>
                 
                  <div className={` ${DarkMood ? '':'text-white'} flex p-4 justify-between`}>
                  <h1 className={`${DarkMood ? '':'text-white'} text-gray-400 font-primaryRegular text-xl`} >Note</h1>
                  <h1 className="text-gray-600 font-primaryBold flex text-xl">{inputNote}</h1>
                </div>
              </div>
              </div> 
    </div>
  )
}

export default Transfer
