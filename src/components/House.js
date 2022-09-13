import React from 'react';

import {BiBed, BiBath, BiArea} from 'react-icons/bi'

const House = ({house}) => {

  

  return (
  <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer
  hover:shadow-2xl transition'>
    <img className='mb-8' src={house.image} alt=""/>
    <div className='mb-4 flex gap-x-2 text-sm'>
      <div className="bg-green-400 text-white rounded-full px-4">{house.type}</div>
      <div className="bg-violet-400 text-white rounded-full px-4">{house.country}</div>
    </div>
    <div className="text-lg font-semibold max-w-[260px]">
      {house.address}
    </div>
    <div className='flex gap-x-4 my-4'>
    <div className='flex gap-x-1 items-center text-gray-600'>
      <div>
        <BiBed/>
      </div>
      <div className='text-[15px]'>
        {house.bedrooms}
      </div>
    </div>
    <div className='flex gap-x-1 items-center text-gray-600'>
      <div>
        <BiBath/>
      </div>
      <div className='text-[15px]'>
        {house.bathrooms}
      </div>
    </div>
    <div className='flex gap-x-1 items-center text-gray-600'>
      <div>
        <BiArea/>
      </div>
      <div className='text-[15px]'>
        {house.surface}
      </div>
    </div>
    </div>
    <div className='text-lg font-bold text-violet-500'>
      $ {house.price}
    </div>
  </div>

  );
};

export default House;
