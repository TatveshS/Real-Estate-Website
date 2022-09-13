import React from 'react';


import {useParams, Link} from 'react-router-dom'

import {housesData} from '../data'

import {BiBed, BiBath, BiArea} from 'react-icons/bi'



const PropertyDetails = () => {

  const {id} = useParams();

  const house = housesData.find((house)=> {
    return house.id === parseInt(id);
  })

 

  return (
    <section>
      <div className='container mx-auto min-h-[800px] mb-14'>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="">
            <h2 className='text-2xl font-semibold'>
              {house.name}
            </h2>
            <h3 className='text-lg mb-4'>
              {house.address}
            </h3>
          </div>
          <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
            <div className='bg-green-400 text-white rounded-full px-4'>{house.type}</div>
            <div className='bg-violet-400 text-white rounded-full px-4'>{house.country}</div>
          </div>
          <div className='text-3xl font-semibold text-violet-700'>$ {house.price}</div>
        </div>
        <div className='flex flex-col items-start gap-8 lg:flex-row'>
          <div className='max-w-[768px]'>
            <div className='mb-8'>
              <img src={house.imageLg} alt=''  />
            </div>

            <div className='flex gap-x-4 text-violet-700 mb-6'>
            <div className='flex gap-x-1 items-center'>
              <div>
                <BiBed/>
              </div>
              <div className='text-xl'>
                {house.bedrooms}
              </div>
            </div>
            <div className='flex gap-x-1 items-center'>
              <div>
                <BiBath/>
              </div>
              <div className='text-xl'>
                {house.bathrooms}
              </div>
            </div>
            <div className='flex gap-x-1 items-center'>
              <div>
                <BiArea/>
              </div>
              <div className='text-xl'>
                {house.surface}
              </div>
            </div>
            </div>

            <div>{house.description}</div>
          </div>
          <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg py-6 px-8'>
            <div className='flex items-center gap-x-4 mb-8' >
              <div className='w-20 h-20 border border-gray-300 rounded-full'>
                <img src={house.agent.image} alt='' />
              </div>
              <div>
                <div className='font-bold text-xl'>{house.agent.name}</div>
                <Link to='' className='text-sm text-violet-700'> View Listings</Link>
              </div>
            </div>

            {/* form  */}
            <form >
              <input className='border border-gray-300 focus:border-violet-700 outline-none rounded
              w-full px-14 h-14 text-sm mb-4' placeholder='Name*' type='text'  />
              <input className='border border-gray-300 focus:border-violet-700 outline-none rounded
              w-full px-14 h-14 text-sm mb-4' placeholder='Email*' type='text' />
              <input className='border border-gray-300 focus:border-violet-700 outline-none rounded
              w-full px-14 h-14 text-sm mb-4 ' placeholder='Mobile*' type='text' />
              <textarea className='border border-gray-300 focus:border-violet-700 outline-none rounded resize-none
              w-full p-4 h-36 text-sm mb-4' placeholder='Type Your Message*' ></textarea>


              <div className='flex gap-x-2'>
                <button className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'
                type='submit'>Send Message</button>
                <button className='border border-violet-700 text-violet-700 hover:bg-violet-600 hover:text-white rounded p-4 text-sm w-full transition'>Call</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
