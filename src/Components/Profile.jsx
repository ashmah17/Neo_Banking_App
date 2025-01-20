import React from 'react'
import aysha from '../assets/aysha.jpg'

const Profile = () => {
  return (
    <div className='flex  justify-center w-full bg-red-200 h-[100vh]'>
      <div className='h-[15rem] w-[15rem] flex flex-col justify-center items-center m-3'>
        <h1 className='p-1 bg-gray-500 m-2'>Profile</h1>
        <div className='p-1 bg-gray-500 m-2 rounded-full'>
        <img src={aysha} className='w-[10rem] h-[10rem] rounded-full' />  
        </div>
      </div>
    </div>
  )
}

export default Profile
