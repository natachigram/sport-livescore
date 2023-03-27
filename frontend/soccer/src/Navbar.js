import React from 'react';
import { TbBallFootball } from 'react-icons/tb';
import { BiNews } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import SearchBar from './components/SearchBar';

const Navbar = () => {
  return (
    <nav className='bg-black w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex justify-between items-center basis-2/5'>
            <a
              href='/'
              className='font-bold text-xl flex items-center'
            >
              <TbBallFootball className='text-primary' /> <span className='pl-2 text-white'>LOGO</span>
            </a>

            <a
              href='/'
              className='text-primary flex items-center'
            >
              <TbBallFootball /> <span className='pl-2'>Scores</span>
            </a>
            <a
              href='/'
              className='text-tertiary hover:text-primary flex items-center'
            >
              <BiNews /> <span className='pl-2'>News</span>
            </a>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-center'>
              <SearchBar />
              <div className='text-white hover:text-primary px-3 py-2 font-bold text-xl  '>
                <GiHamburgerMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


