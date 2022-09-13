import React, { useContext } from 'react';

import CountryDropdown from './CountryDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'
import PropertyDropdown from './PropertyDropdown'

import {RiSearch2Line} from 'react-icons/ri'
import { HouseContext } from './HouseContext';

const Search = () => {

  const {handleClick} = useContext(HouseContext)

  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between 
    gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white rounded-lg lg:backdrop-blur lg:bg-transparent '>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
    <button onClick={() => handleClick()} className='bg-violet-600 hover:bg-violet-700 w-full lg:max-w-[162px] rounded-lg text-xl text-white flex  h-10 items-center justify-center  '>
      <RiSearch2Line />
    </button>
    </div>
  );
};

export default Search;
