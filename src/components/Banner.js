import React from 'react';

import Image from '../assets/img/house-banner.png'
import Search from './Search'

const Banner = () => {
  return (
  <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
    <div className='flex flex-col lg:flex-row'>
      <div className='flex flex-col items-center lg:items-start lg:text-left text-center lg:ml-8 xl:ml-[135px] justify-center px-4 lg:px-0 flex-1'>
        <h1 className='text-4xl mb-6 leading-none font-semibold lg:text-[58px]'><span className='text-violet-700'>Rent</span> Your Dream House With Us.</h1>
        <p className='mb-8 max-w-[480px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat assumenda temporibus veniam mollitia quam nesciunt possimus ad vel cum. Perferendis, nobis beatae ex id et eius debitis sed ea facilis.</p>
      </div>
      <div className='hidden lg:flex flex-1 justify-end items-end'>
        <img src={Image} alt='' />
      </div>
    </div>
    <Search />
  </section>
  );
};

export default Banner;
