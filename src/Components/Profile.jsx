import React from 'react'
import aysha from '../assets/aysha.jpg'
import edit from '../assets/edit.svg'
import profile from '../assets/profile.svg'
import phone from '../assets/phone.svg'
import email from '../assets/email.svg'
import home from '../assets/home.svg'
import BackButton from './BackButton'
const Profile = ({DarkMood}) => {
   

  return (
    <div className={`${DarkMood ? '': 'bg-gray-900'} flex flex-col justify-center w-full`}>
      <div className='h-[15rem] relative flex flex-col justify-center items-center m-3'>
      <BackButton/>
        <h1 className='p-1 m-2 text-center text-2xl font-primaryBold text-gray-600'>Profile</h1>
        <div className=' flex justify-center relative'>
          <img src={aysha} className={`${DarkMood ? 'border-white': ' border-gray-800 shadowD' } w-[10rem] h-[10rem] rounded-full border  border-[.4rem] shadow-xl `} /> 
          <img src={edit} className={` ${DarkMood ? 'bg-white': 'bg-gray-800 shadowD border border border-gray-700'} w-[2rem] rounded-xl absolute right-[1rem] p-1 bottom-0 cursor-pointer`}/> 
        </div>
      </div>
      <div className={` ${DarkMood ? 'bg-white': ' border border-gray-700 text-gray-300 shadowD bg-gray-900'} rounded p-4 m-5 rounded-xl shadow`}>
          <div className='flex justify-between '>
            <h1 className="font-primaryBold text-xl"> Personal Info</h1>
            <h3 className="font-primaryBold cursor-pointer">Edit</h3>
          </div>
          <div className='md:grid md:grid-cols-2 md:gap-6'>
            <div className="flex m-2 shadow rounded p-1">
              <img src={profile} className="w-[2rem]" />
              <span className="ml-6">
                <h4 className="font-primaryRegular">Name</h4>
                <h2 className="font-primaryRegular">Aisha Muhammd </h2>
              </span>
            </div>
            <div className="flex m-2 shadow rounded p-1">
              <img src={email} className="w-[2rem]" />
              <span className="ml-6">
                <h4 className="font-primaryRegular">Email</h4>
                <h2 className="font-primaryRegular">aisha@gmail.com</h2>
              </span>
            </div>
            <div className="flex m-2 shadow rounded p-1">
              <img src={phone} className="w-[2rem]" />
              <span className="ml-6">
                <h4 className="font-primaryRegular">Phone Number</h4>
                <h2 className="font-primaryRegular">+78469629863498</h2>
              </span>
            </div>
            <div className="flex m-2 shadow rounded p-1">
              <img src={home} className="w-[2rem]" />
              <span className="ml-6">
                <h4 className="font-primaryRegular">Home Address</h4>
                <h2 className="font-primaryRegular">70 maitama street</h2>
              </span>
            </div>
          </div>
      </div>
      <div className={` ${DarkMood ? 'bg-white': 'text-gray-300 border border-gray-700 shadowD bg-gray-900'} rounded p-4 m-5 rounded-xl shadow`}>
          <div className='flex justify-between '>
            <h1 className="font-primaryBold text-xl">Account Info</h1>
            <h3 className="font-primaryBold cursor-pointer">Edit</h3>
          </div>
          <div className='md:grid md:grid-cols-2 md:gap-6'>
            <div className="flex m-2 shadow rounded p-1">
              <img src={profile} className="w-[2rem]" />
              <span className="ml-6">
                <h4 className="font-primaryRegular">Name</h4>
                <h2 className="font-primaryRegular">Aisha Muhammd </h2>
              </span>
            </div>
            <div className="flex m-2 shadow rounded p-1">
              <img src={email} className="w-[2rem]" />
              <span className="ml-6">
                <h4 className="font-primaryRegular">Email</h4>
                <h2 className="font-primaryRegular">aisha@gmail.com</h2>
              </span>
            </div>
            <div className="flex m-2 shadow rounded p-1">
              <img src={phone} className="w-[2rem]" />
              <span className="ml-6">
                <h4 className="font-primaryRegular">Phone Number</h4>
                <h2 className="font-primaryRegular">+78469629863498</h2>
              </span>
            </div>
            <div className="flex m-2 shadow rounded p-1">
              <img src={home} className="w-[2rem]" />
              <span className="ml-6">
                <h4 className="font-primaryRegular">Home Address</h4>
                <h2 className="font-primaryRegular">70 maitama street</h2>
              </span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Profile
 