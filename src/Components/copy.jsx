import React from 'react'

const copy = () => {
  return (
    <div>
       <div className='p-3 md:flex md:justify-between'>
              <div className='md:flex  md:w-[50%]'>
                <div className='md:w-full'>
                    <label >Routing Number</label>
                <span className='bg-gray-200  p-3 flex items-center justify-between rounded-xl m-2'>
                        <p>{RoutingNumber}</p>
                    <button className="" onClick={handlecheckCopy}>
                        {checkCopy? <img src={copied} className='w-[2rem]'/> :  <img src={copy} className='w-[2rem]' onClick={handleCopy}/>}
                    </button>
                    </span>
                </div>

                    <div className='md:w-full'>
                        <label>Account Number</label>
                        <span className='bg-gray-200 p-3 flex items-center justify-between rounded-xl m-2'>
                            <p>{RoutingNumber}</p>
                        <button onClick={handlecheckCopy}>
                            {checkCopy?  <img src={copied} className='w-[2rem]' />:  <img src={copy} className='w-[2rem]' onClick={handleCopy} />}
                        </button>
                        </span>
                    </div>
              </div>
                
                <div className=' ml-10 md:flex flex-cols'>
                    <div>
                        <h1 className='text-2xl font-primaryBold'>Have Neobank do it for you</h1>
                        <p className='text-xl font-primaryRegular'>fhglhugudfkldhufgjdjkdhufjhhgiygjhggjlugeu</p>
                        <div className='flex p-4'>
                            {images.map((image,index)=>(
                               <img
                                key={index}
                                src={image}
                                className='w-[3rem]'                            
                               />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default copy
