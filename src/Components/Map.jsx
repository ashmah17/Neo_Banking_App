import React, { useState } from 'react';
import BackButton from './BackButton';
import Sidebar from './Sidebar';

const Map = ({ DarkMood }) => {
  const [hover, setHover] = useState(false);

  return (
    <div>
      <Sidebar Hover={hover} setHover={setHover} DarkMood={DarkMood} />
      <div className={`${DarkMood ? 'bg-white' : 'bg-gray-900'} relative`}>
        <h1 className={`${DarkMood ? '' : 'text-white'} absolute text-center p-4 text-2xl`}>Map</h1>
        <div className={`${hover ? 'md:ml-[14rem] md:pr-3' : ' ml-3 md:ml-[7rem] md:pr-3'} transition-all duration-300`}>
          <div style={{ width: '100%', height: '600px' }}>
            <iframe
              width="100%"
              height="600"
              src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=yahaya%20madaki%20waya,%20katsina%20nigeria+(Neo%20Bank)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Neo Bank Map">
              <a href="https://www.gps.ie/">gps trackers</a>
            </iframe>
          </div>
        </div>
        <div className={`${hover ? 'md:ml-[14rem] md:pr-3' : ' ml-3 md:ml-[7rem] md:pr-3'} transition-all duration-300 ${DarkMood ? 'bg-white' : 'text-gray-300 p-4 bg-gray-900 mapshadow border border-gray-700'} h-[45vh]  sticky z-30 bottom-[1px] rounded-tr-[2rem] rounded-tl-[2rem]`}>
          <div className='flex justify-between p-2'>
            <h1 className='text-3xl font-primaryBold'>Central Market Katsina</h1>
            <button>Cash back</button>
          </div>
          <div className='p-2 flex justify-between'>
            <p className='font-primaryRegular text-xl'>Layin yan niqa</p>
            <p className='font-primaryRegular text-xl'>1.6mi</p>
          </div>
          <div className='p-2 flex'>
            <p className='text'>Open</p>
            <p className='pl-4 text-gray-500'>Closes by 6:00pm</p>
          </div>
          <button className='p-3 greenB m-2 w-full rounded-xl text-white font-primaryRegular text-xl'>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Map;
