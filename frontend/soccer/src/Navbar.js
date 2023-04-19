import React from 'react';
import { TbBallFootball } from 'react-icons/tb';
import { BiNews } from 'react-icons/bi';
import { GiHamburgerMenu } from 'react-icons/gi';
import Logo from './images/logo.svg'
// import SearchBar from './components/SearchBar';

const Navbar = ({handleBtn, setShowLeague, ham}) => {
  return (
    <nav className='bg-black w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex justify-start  items-center basis-2/5  '>
            <a href='/' className='font-bold text-xl flex items-center mr-20'>
              {/* <TbBallFootball className='text-primary' />{' '} */}
              <img src={Logo} alt="" />
              {/* <span className='pl-2 text-white'>LOGO</span> */}
            </a>

            <div className='hidden md:flex items-center justify-start gap-8'>
              <a href='/' className='text-primary flex items-center'>
                <TbBallFootball /> <span className='pl-2'>Scores</span>
              </a>
              {/* <a
                href='/'
                className='text-tertiary hover:text-primary flex items-center'
              >
                <BiNews /> <span className='pl-2'>News</span>
              </a> */}
            </div>
          </div>
          <div className='md:hidden'>
            <div className='flex items-center'>
              {/* <SearchBar /> */}
             {ham ? <div className='text-white hover:text-primary px-3 py-2 font-bold text-xl  ' onClick={()=> handleBtn(setShowLeague(true))}>
                <GiHamburgerMenu />
              </div> : ''}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
