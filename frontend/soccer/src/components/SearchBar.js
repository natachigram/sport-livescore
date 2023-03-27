import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar() {
  return (
    <form className='flex items-center justify-center bg-secondary text-tertiary  font-medium p-2 rounded-md'>
      <span className=' flex justify-end items-center'>
        <AiOutlineSearch  />
      </span>
      <input
        className='bg-transparent ml-2 border-none outline-none'
        id='search'
        type='text'
        placeholder='Search'
      />
    </form>
  );
}

export default SearchBar;
