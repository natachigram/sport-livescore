import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import Flag from 'react-world-flags';
import one from './images/one.svg';
import two from './images/two.svg';

const Matches = () => {
  return (
    <div>
      <div className='flex justify-center '>
        <div className='bg-black w-full rounded-md  flex-col'>
          <div className='title h-12 text-white border-b border-tertiary_dark flex justify-center items-center'>
            <div className='match-switch'>
              <button className='text-white font-medium bg-live rounded-sm px-4 py-1'>
                All
              </button>
              <button className='text-tertiary  rounded-sm px-4 py-1'>
                Live
              </button>
            </div>
          </div>
          <div className='  text-white border-b border-tertiary_dark flex justify-center items-center'>
            <div className='match flex justify-between items-center w-full p-4 '>
              <div className='left-arrow font-bold text-lg'>
                {' '}
                <AiOutlineLeft />
              </div>
              <div className='days flex justify-between items-center gap-2 overflow-x-hidden'>
                <div className='days-box bg-tertiary_dark text-center px-4 py-2 rounded-sm hover:bg-primary/30 hover:px-5 hover:py-3'>
                  <h3 className='day-title  font-bold'>SAT</h3>
                  <p className='text-xs'>22 MAR</p>
                </div>
                <div className='days-box bg-tertiary_dark text-center px-4 py-2 rounded-sm  hover:bg-primary/30 hover:px-5 hover:py-3'>
                  <h3 className='day-title  font-bold'>SUN</h3>
                  <p className='text-xs'>22 MAR</p>
                </div>
                <div className='days-box bg-tertiary_dark text-center px-4 py-2 rounded-sm hover:bg-primary/30 hover:px-5 hover:py-3'>
                  <h3 className='day-title  font-bold'>Today</h3>
                  <p className='text-xs'>22 MAR</p>
                </div>
                <div className='days-box bg-tertiary_dark text-center px-4 py-2 rounded-sm hover:bg-primary/30 hover:px-5 hover:py-3'>
                  <h3 className='day-title  font-bold'>TUE</h3>
                  <p className='text-xs'>22 MAR</p>
                </div>
                <div className='days-box bg-tertiary_dark text-center px-4 py-2 rounded-sm hover:bg-primary/30 hover:px-5 hover:py-3'>
                  <h3 className='day-title  font-bold'>WED</h3>
                  <p className='text-xs'>22 MAR</p>
                </div>
              </div>
              <div className='calender font-bold '>
                <MdOutlineCalendarMonth className='text-2xl ' />
              </div>
            </div>
          </div>
          <div className=' text-white  flex justify-center items-center p-4'>
            <div className='match-result w-full '>
              <div className='result-per-league  w-full mb-6'>
                <div className='league flex justify-between items-center'>
                  <div className='left-side flex justify-between items-center gap-3'>
                    <Flag code='GB_ENG' width='28' className='rounded-sm' />
                    <div>
                      <h1 className='league-title font-bold text-sm'>
                        League 2
                      </h1>
                      <p className='text-xs text-tertiary'>England</p>
                    </div>
                  </div>
                  <AiOutlineRight className='font-bold text-lg' />
                </div>
                <div className='score-card flex justify-center gap-10 items-center  mt-8 bg-tertiary_dark px-2 py-5 rounded-md hover:cursor-pointer'>
                  <div className='team flex flex-col items-center justify-center'>
                    <img src={two} alt='' />
                    <p className='mt-4'>Accrington Stanley</p>
                  </div>
                  <div className='score text-center'>
                    <p className='text-xl font-bold'>20:45</p>
                    <p className='text-tertiary mt-4'>Today</p>
                  </div>
                  <div className='team flex flex-col items-center justify-center '>
                    <img src={one} alt='' />
                    <p className='mt-4'>Plymouth Argyle</p>
                  </div>
                </div>
                <div className='score-card flex justify-center gap-10 items-center  mt-8 bg-tertiary_dark px-2 py-5 rounded-md hover:cursor-pointer'>
                  <div className='team flex flex-col items-center justify-center'>
                    <img src={two} alt='' />
                    <p className='mt-4'>Accrington Stanley</p>
                  </div>
                  <div className='score text-center'>
                    <p className='text-xl font-bold'>20:45</p>
                    <p className='text-tertiary mt-4'>Today</p>
                  </div>
                  <div className='team flex flex-col items-center justify-center '>
                    <img src={one} alt='' />
                    <p className='mt-4'>Plymouth Argyle</p>
                  </div>
                </div>
              </div>

              <div className='result-per-league  w-full mb-6'>
                <div className='league flex justify-between items-center'>
                  <div className='left-side flex justify-between items-center gap-3'>
                    <Flag code='GB_ENG' width='28' className='rounded-sm' />
                    <div>
                      <h1 className='league-title font-bold text-sm'>
                        League 2
                      </h1>
                      <p className='text-xs text-tertiary'>England</p>
                    </div>
                  </div>
                  <AiOutlineRight className='font-bold text-lg' />
                </div>
                <div className='score-card flex justify-center gap-10 items-center  mt-8 bg-tertiary_dark px-2 py-5 rounded-md hover:cursor-pointer'>
                  <div className='team flex flex-col items-center justify-center'>
                    <img src={two} alt='' />
                    <p className='mt-4'>Accrington Stanley</p>
                  </div>
                  <div className='score text-center'>
                    <p className='text-xl font-bold'>20:45</p>
                    <p className='text-tertiary mt-4'>Today</p>
                  </div>
                  <div className='team flex flex-col items-center justify-center '>
                    <img src={one} alt='' />
                    <p className='mt-4'>Plymouth Argyle</p>
                  </div>
                </div>
                <div className='score-card flex justify-center gap-10 items-center  mt-8 bg-tertiary_dark px-2 py-5 rounded-md hover:cursor-pointer'>
                  <div className='team flex flex-col items-center justify-center'>
                    <img src={two} alt='' />
                    <p className='mt-4'>Accrington Stanley</p>
                  </div>
                  <div className='score text-center'>
                    <p className='text-xl font-bold'>20:45</p>
                    <p className='text-tertiary mt-4'>Today</p>
                  </div>
                  <div className='team flex flex-col items-center justify-center '>
                    <img src={one} alt='' />
                    <p className='mt-4'>Plymouth Argyle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;
