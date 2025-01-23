import React, { useState, useEffect } from 'react'
 import BackButton from './BackButton.jsx';

const AddMoney = ({DarkMood}) => {
  const [moneyAdded, setmoneyAdded] = useState(()=>{
    const savedMoney = localStorage.getItem('moneyAdded');
    return savedMoney && !isNaN(parseFloat(savedMoney)) ? parseFloat(savedMoney) : 0;
  });
    const [inputMoney, setinputMoney] = useState('');

  useEffect(()=>{
    localStorage.setItem('moneyAdded', moneyAdded)
  }, [moneyAdded]);


  const handleMoneyChange=(event)=>{
    setinputMoney(event.target.value);
  }

  const handleClick =()=>{
    setmoneyAdded((prevMoney)=> prevMoney + parseFloat(inputMoney));
  }

  

  const [Add, setAdd] = useState(false);
  const handleAdd =()=>{
    setAdd(true)
      alert('$'+ inputMoney +' ' + 'money added')
    
  }

    

  return (
    <>
    <div  className={`${DarkMood ? '': 'bg-gray-900'} w-full h-[100vh] p-3 `}>
      <div className='flex justify-center mt-3 relative h-[5rem]'>
          <BackButton />
          <h1 className={`w-full text-center text-2xl font-primaryRegular p-3 ${DarkMood ? '':'text-white'}`}>Add Money</h1>
      </div>

        <div className=' md:flex md:justify-between'>
          <div className='justify-center flex flex-col justify-center md:w-[50%]'>
            <h1 className={`font-primaryBold text-4xl text-center ${DarkMood ? '' : 'text-white'}`}>${inputMoney}</h1>
            <input className={`${ DarkMood ? '' : 'bg-gray-800 text-gray-300'} m-4 p-2 rounded-xl outline-green-400`}  required onChange={handleMoneyChange} />
            <button className='greenB ml-4 mr-4 mb-4 p-2 rounded-xl text-white' onClick={handleClick}>Enter</button>
          </div>

          <div className=' p-4 md:pt-6 md:mt-[3rem] w-[50%]'>
            <h4 className={`${DarkMood ? '' : 'text-white'} p-2 rounded-xl text-xl font-primaryRegular`}>Available Balance:<span className='text font-primaryBold ml-2'>${moneyAdded}</span></h4>
            <p className='m-3 font-primaryRegular text-gray-400'>Money will be added to your account from the following external account</p>
          </div>
        </div>
       
       <div className='w-full pl-6'>
        <h4 className={` ${DarkMood ? '' : 'text-gray-600'} font-primaryRegular`}>Bank Name</h4>
        <h1 className={` ${DarkMood ? '' : 'text-gray-600'} font-primaryBold text-xl`}>Guaranted Trust Bank</h1>
        <h4 className={` ${DarkMood ? '' : 'text-gray-600'} font-primaryRegular`}>Account Number</h4>
        <h1 className={` ${DarkMood ? '' : 'text-gray-600'} font-primaryBold text-xl`}>.......2345</h1>
       </div>

       <button onClick={handleAdd} className={` ${DarkMood ? '' : 'greenB'} absolute bottom-5 text-white rounded-xl p-2 w-[96%]`}>Add Money</button>
      
    </div>

    

    </>
  )
}

export default AddMoney
