import React from 'react';
import { useState } from 'react';
// import angleRight from './images/angle-left.svg';
import Flag from 'react-world-flags';
import one from './images/one.svg';
import two from './images/two.svg';

const LeagueMatches = () => {
  const [activeBtn, setActiveBtn] = useState('fixtures');
  // const [showResult, setShowResult] = useState(false);
  // const [showFixtures, setShowFixtures] = useState('fixtures');
  // const [showTable, setShowTable] = useState(false);

  const handleActiveBtn = (btn) => {
    setActiveBtn(btn);
  };

  return (
    <div className='flex justify-center'>
      <div className='bg-black w-full rounded-xl  flex-col px-8 py-2 h-full'>
        <div className='league flex justify-between items-center'>
          <div className='left-side flex justify-between items-center gap-3'>
            <Flag code='GB_ENG' width='28' className='rounded-sm' />
            <div>
              <h1 className='league-title font-bold text-sm text-white'>
                Premier League
              </h1>
              <p className='text-xs text-tertiary'>England</p>
            </div>
          </div>
        </div>
        <div className='league-tab flex items-center gap-2 mt-10 pb-4 border-b border-secondary '>
          <button
            onClick={() => handleActiveBtn('fixtures')}
            className={` ${
              activeBtn === 'fixtures'
                ? 'bg-primary w-20  rounded-md font-bold text-sm h-7 '
                : 'text-white w-20  rounded-md font-bold text-sm h-7'
            } `}
          >
            Fixtures
          </button>
          <button
            onClick={() => handleActiveBtn('results')}
            className={` ${
              activeBtn === 'results'
                ? 'bg-primary w-20  rounded-md font-bold text-sm h-7 '
                : 'text-white w-20  rounded-md font-bold text-sm h-7'
            } `}
          >
            Results
          </button>
          <button
            onClick={() => handleActiveBtn('table')}
            className={` ${
              activeBtn === 'table'
                ? 'bg-primary w-20  rounded-md font-bold text-sm h-7 '
                : 'text-white w-20  rounded-md font-bold text-sm h-7'
            } `}
          >
            Table
          </button>
        </div>
        {/* fixtures tab-content */}
        <div
          className={
            activeBtn === 'fixtures' ? 'fixtures-content mb-8' : 'hidden'
          }
        >
          <div className='score-card h-full flex justify-center gap-10 items-center  mt-8 bg-tertiary_dark/50 px-2 py-5 rounded-xl hover:cursor-pointer hover:bg-tertiary_dark'>
            <div className='team flex flex-col items-center justify-center'>
              <img src={two} alt='team logo' className='w-12' />
              <p className='mt-4 text-white'>Accrington Stanley</p>
            </div>
            <div className='score text-center flex flex-col items-center gap-8  h-full'>
              <p className='text-2xl font-bold text-white'>20 : 47</p>
              <p className='text-tertiary text-sm'>01 APR</p>
            </div>
            <div className='team flex flex-col items-center justify-center '>
              <img src={one} alt='team logo' className='w-12' />
              <p className='mt-4 text-white'>Plymouth Argyle</p>
            </div>
          </div>
          <div className='score-card h-full flex justify-center gap-10 items-center  mt-8 bg-tertiary_dark/50 px-2 py-5 rounded-xl hover:cursor-pointer hover:bg-tertiary_dark'>
            <div className='team flex flex-col items-center justify-center'>
              <img src={two} alt='team logo' className='w-12' />
              <p className='mt-4 text-white'>Accrington Stanley</p>
            </div>
            <div className='score text-center flex flex-col items-center gap-8  h-full'>
              <p className='text-2xl font-bold text-white'>20 : 47</p>
              <p className='text-tertiary text-sm'>01 APR</p>
            </div>
            <div className='team flex flex-col items-center justify-center '>
              <img src={one} alt='team logo' className='w-12' />
              <p className='mt-4 text-white'>Plymouth Argyle</p>
            </div>
          </div>
        </div>
        {/* fixtures tab-content */}

        {/* Results tab-content */}
        <div
          className={
            activeBtn === 'results' ? 'results-content mb-8' : 'hidden'
          }
        >
          <div className='score-card h-full flex justify-center gap-10 items-center  mt-8 bg-tertiary_dark/50 px-2 py-5 rounded-xl hover:cursor-pointer hover:bg-tertiary_dark'>
            <div className='team flex flex-col items-center justify-center'>
              <img src={two} alt='team logo' className='w-12' />
              <p className='mt-4 text-white'>Accrington Stanley</p>
            </div>
            <div className='score text-center flex flex-col items-center gap-8  h-full'>
              <p className='text-2xl font-bold text-white'>2 : 2</p>
              <p className='text-tertiary text-sm'>FT</p>
            </div>
            <div className='team flex flex-col items-center justify-center '>
              <img src={one} alt='team logo' className='w-12' />
              <p className='mt-4 text-white'>Plymouth Argyle</p>
            </div>
          </div>

          <div className='score-card h-full flex justify-center gap-10 items-center  mt-8 bg-tertiary_dark/50 px-2 py-5 rounded-xl hover:cursor-pointer hover:bg-tertiary_dark'>
            <div className='team flex flex-col items-center justify-center'>
              <img src={two} alt='team logo' className='w-12' />
              <p className='mt-4 text-white'>Accrington Stanley</p>
            </div>
            <div className='score text-center flex flex-col items-center gap-8  h-full'>
              <p className='text-2xl font-bold text-white'>2 : 2</p>
              <p className='text-tertiary text-sm'>FT</p>
            </div>
            <div className='team flex flex-col items-center justify-center '>
              <img src={one} alt='team logo' className='w-12' />
              <p className='mt-4 text-white'>Plymouth Argyle</p>
            </div>
          </div>
        </div>
        {/* Results tab-content */}

        {/* table tab-content */}
        <div
          className={
            activeBtn === 'table' ? 'table-content mb-8' : 'hidden'
          }
        >
          <div className='flex items-center  justify-start text-center border border-secondary mt-8 rounded-md '>
            <button className='text-tertiary py-2  w-10 text-center font-bold'>
              #
            </button>
            <button className='text-tertiary py-2  w-52 text-center font-bold'>
              Team
            </button>
            <button className='text-tertiary py-2  w-10 text-center font-bold'>
              P
            </button>
            <button className='text-tertiary py-2  w-10 text-center font-bold'>
              W
            </button>
            <button className='text-tertiary py-2  w-10 text-center font-bold'>
              D
            </button>
            <button className='text-tertiary py-2  w-10 text-center font-bold'>
              L
            </button>
            <button className='text-tertiary py-2  w-10 text-center font-bold'>
              F
            </button>
            <button className='text-tertiary py-2  w-10 text-center font-bold'>
              A
            </button>
            <button className='text-tertiary py-2  w-10 text-center font-bold'>
              GD
            </button>
            <button className='text-tertiary py-2  w-10 text-center font-bold'>
              PTS
            </button>
          </div>
        </div>
        {/* table tab-content */}
      </div>
    </div>
  );
};

export default LeagueMatches;
