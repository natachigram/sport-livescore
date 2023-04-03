import React, { useRef, useState } from 'react';

import { MdOutlineCalendarMonth } from 'react-icons/md';
import Flag from 'react-world-flags';
import one from './images/one.svg';
import two from './images/two.svg';
import angleLeft from './images/angle-right.svg';
import angleRight from './images/angle-left.svg';
import LiveMatchInfo from './LiveMatchInfo';

const Matches = () => {
  const [isLive, setIsLive] = useState(false);
  const [isAll, setIsAll] = useState(true);
  const [fixture, setFixture] = useState(true);
  const [selectMatchDay, setSelectMatchDay] = useState('today');
  const [show, setShow] = useState(true);
  const [isLiveMatchInfo, setIsLiveMatchInfo] = useState(true);
  const matchDayRef = useRef(null);
  const handleIsLive = () => {
    setIsLive(true);
    setIsAll(false);
    setFixture(false);
    setSelectMatchDay('');
  };
  const handleIsAll = () => {
    setSelectMatchDay('today');
    setIsLive(false);
    setIsAll(true);
    setFixture(true);
  };
  const handleClick = () => {
    matchDayRef.current.scrollLeft += 100;
    // alert('it works');
  };

  const handleActiveMatchDay = (matchDay) => {
    setSelectMatchDay(matchDay);
    setIsLive(false);
    setFixture(true);
  };

  const handleLiveMatchDetail = () => {
    setShow(false);
    setIsLiveMatchInfo(false)
  };
  return (
    <div>
      <div className='flex justify-center '>
        <div className='bg-black w-full rounded-xl  flex-col'>
          <div className={isLiveMatchInfo ? 'hidden' : ''}>
            {' '}
            <LiveMatchInfo />
          </div>

          <div
            className={
              show
                ? 'title h-12 text-white border-b border-tertiary_dark flex justify-center items-center'
                : 'hidden'
            }
          >
            <div className='match-switch'>
              <button
                className={`text-white   rounded-sm px-4 py-1 text-sm ${
                  isAll ? 'bg-live font-bold' : ''
                }`}
                onClick={handleIsAll}
              >
                All
              </button>
              <button
                className={`text-tertiary  text-sm  rounded-sm px-4 py-1 ${
                  isLive ? 'bg-live font-bold' : ''
                }`}
                onClick={handleIsLive}
              >
                Live
              </button>
            </div>
          </div>
          <div
            className={
              show
                ? '  text-white border-b border-tertiary_dark flex justify-center items-center h-24'
                : 'hidden'
            }
          >
            <div className='match flex justify-between items-center w-full px-5 '>
              <button
                className='left-arrow font-bold text-lg cursor-pointer'
                onClick={handleClick}
              >
                <img src={angleLeft} alt='back arrow' className='w-5 h-5' />
              </button>
              <div
                className='days flex justify-between  items-center gap-2 overflow-x-hidden mx-6 '
                ref={matchDayRef}
              >
                <button>
                  <div className='days-box bg-tertiary_dark text-center w-24 py-3 rounded-md hover:bg-primary/30 cursor-pointer hover:py-4'>
                    <h3 className='day-title  font-bold'>FRI</h3>
                    <p className='text-xs'>22 MAR</p>
                  </div>
                </button>
                <button>
                  <div className='days-box bg-tertiary_dark text-center w-24 py-3 rounded-md hover:bg-primary/30 cursor-pointer hover:py-4'>
                    <h3 className='day-title  font-bold'>SAT</h3>
                    <p className='text-xs'>22 MAR</p>
                  </div>
                </button>
                <button>
                  <div
                    className={`'days-box text-center w-24 py-3 rounded-md hover:bg-primary/30 cursor-pointer hover:py-4' ${
                      selectMatchDay === 'sunday'
                        ? 'bg-primary/30 py-4'
                        : 'bg-tertiary_dark '
                    } `}
                    onClick={() => handleActiveMatchDay('sunday')}
                  >
                    <h3 className='day-title  font-bold'>SUN</h3>
                    <p className='text-xs'>22 MAR</p>
                  </div>
                </button>
                <button>
                  <div
                    className={`'days-box text-center w-24 py-3 rounded-md hover:bg-primary/30 cursor-pointer hover:py-4' ${
                      selectMatchDay === 'today'
                        ? 'bg-primary/30 py-4'
                        : 'bg-tertiary_dark '
                    } `}
                    onClick={() => handleActiveMatchDay('today')}
                  >
                    <h3 className='day-title  font-bold'>Today</h3>
                    <p className='text-xs'>22 MAR</p>
                  </div>
                </button>
                <button>
                  <div className='days-box bg-tertiary_dark text-center w-24 py-3 rounded-md hover:bg-primary/30 cursor-pointer  hover:py-4'>
                    <h3 className='day-title  font-bold'>TUE</h3>
                    <p className='text-xs'>22 MAR</p>
                  </div>
                </button>
                <button>
                  <div className='days-box bg-tertiary_dark text-center w-24 py-3 rounded-md hover:bg-primary/30 cursor-pointer  hover:py-4'>
                    <h3 className='day-title  font-bold'>WED</h3>
                    <p className='text-xs'>22 MAR</p>
                  </div>
                </button>
                <button>
                  <div className='days-box bg-tertiary_dark text-center w-24 py-3 rounded-md hover:bg-primary/30 cursor-pointer  hover:py-4'>
                    <h3 className='day-title  font-bold'>THU</h3>
                    <p className='text-xs'>22 MAR</p>
                  </div>
                </button>
              </div>
              <div className='calender font-bold '>
                <button>
                  <MdOutlineCalendarMonth className='text-2xl ' />
                </button>
              </div>
            </div>
          </div>

          <div className=' text-white  flex justify-center items-center mx-5 mt-4'>
            <div className={fixture ? 'matches w-full ' : 'hidden'}>
              <div className='result-per-league  w-full mb-14'>
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
                  <button className='left-arrow font-bold text-lg cursor-pointer'>
                    <img
                      src={angleRight}
                      alt='back arrow'
                      className='w-5 h-5'
                    />
                  </button>
                </div>
                <div className='score-card h-full flex justify-center gap-10 items-center  mt-8 bg-tertiary_dark/50 px-2 py-5 rounded-xl hover:cursor-pointer hover:bg-tertiary_dark'>
                  <div className='team flex flex-col items-center justify-center'>
                    <img src={two} alt='team logo' className='w-12' />
                    <p className='mt-4'>Accrington Stanley</p>
                  </div>
                  <div className='score text-center flex flex-col items-center gap-8  h-full'>
                    <p className='text-2xl font-bold'>20:45</p>
                    <p className='text-tertiary'>Today</p>
                  </div>
                  <div className='team flex flex-col items-center justify-center '>
                    <img src={one} alt='team logo' className='w-12' />
                    <p className='mt-4'>Plymouth Argyle</p>
                  </div>
                </div>
                <div className='score-card h-full flex justify-center gap-10 items-center  mt-8 bg-tertiary_dark/50 px-2 py-5 rounded-xl hover:cursor-pointer hover:bg-tertiary_dark'>
                  <div className='team flex flex-col items-center justify-center'>
                    <img src={two} alt='team logo' className='w-12' />
                    <p className='mt-4'>Accrington Stanley</p>
                  </div>
                  <div className='score text-center flex flex-col items-center gap-8  h-full'>
                    <p className='text-2xl font-bold'>20:45</p>
                    <p className='text-tertiary'>Today</p>
                  </div>
                  <div className='team flex flex-col items-center justify-center '>
                    <img src={one} alt='team logo' className='w-12' />
                    <p className='mt-4'>Plymouth Argyle</p>
                  </div>
                </div>
              </div>

              <div className='result-per-league  w-full mb-14'>
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
                  <button className='left-arrow font-bold text-lg cursor-pointer'>
                    <img
                      src={angleRight}
                      alt='back arrow'
                      className='w-5 h-5'
                    />
                  </button>
                </div>
                <div className='score-card h-full flex justify-center gap-10 items-center  mt-8 bg-tertiary_dark/50 px-2 py-5 rounded-xl hover:cursor-pointer hover:bg-tertiary_dark'>
                  <div className='team flex flex-col items-center justify-center'>
                    <img src={two} alt='team logo' className='w-12' />
                    <p className='mt-4'>Accrington Stanley</p>
                  </div>
                  <div className='score text-center flex flex-col items-center gap-8  h-full'>
                    <p className='text-2xl font-bold'>20:45</p>
                    <p className='text-tertiary'>Today</p>
                  </div>
                  <div className='team flex flex-col items-center justify-center '>
                    <img src={one} alt='team logo' className='w-12' />
                    <p className='mt-4'>Plymouth Argyle</p>
                  </div>
                </div>
                <div className='score-card h-full flex justify-center gap-10 items-center  mt-8 bg-tertiary_dark/50 px-2 py-5 rounded-xl hover:cursor-pointer hover:bg-tertiary_dark'>
                  <div className='team flex flex-col items-center justify-center'>
                    <img src={two} alt='team logo' className='w-12' />
                    <p className='mt-4'>Accrington Stanley</p>
                  </div>
                  <div className='score text-center flex flex-col items-center gap-8  h-full'>
                    <p className='text-2xl font-bold'>20:45</p>
                    <p className='text-tertiary'>Today</p>
                  </div>
                  <div className='team flex flex-col items-center justify-center '>
                    <img src={one} alt='team logo' className='w-12' />
                    <p className='mt-4'>Plymouth Argyle</p>
                  </div>
                </div>
              </div>
            </div>

            {/* live matches session */}

            <div className={!fixture ? 'matches w-full ' : 'hidden'}>
              <div
                className={show ? 'result-per-league  w-full mb-14' : 'hidden'}
              >
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
                  <button className='left-arrow font-bold text-lg cursor-pointer'>
                    <img
                      src={angleRight}
                      alt='back arrow'
                      className='w-5 h-5'
                    />
                  </button>
                </div>
                <div
                  onClick={handleLiveMatchDetail}
                  className='score-card h-full flex justify-center gap-10 items-center border-b-2 border-primary  mt-8 bg-tertiary_dark/50 px-2 py-5 rounded-xl hover:cursor-pointer hover:bg-tertiary_dark'
                >
                  <div className='team flex flex-col items-center justify-center'>
                    <img src={two} alt='team logo' className='w-12' />
                    <p className='mt-4'>Accrington Stanley</p>
                  </div>
                  <div className='score text-center flex flex-col items-center gap-8  h-full'>
                    <p className='text-2xl font-bold'>3 : 7</p>
                    <p className='text-tertiary'>67'</p>
                  </div>
                  <div className='team flex flex-col items-center justify-center '>
                    <img src={one} alt='team logo' className='w-12' />
                    <p className='mt-4'>Plymouth Argyle</p>
                  </div>
                </div>
                <div className='score-card h-full flex justify-center gap-10 items-center border-b-2 border-primary  mt-8 bg-tertiary_dark/50 px-2 py-5 rounded-xl hover:cursor-pointer hover:bg-tertiary_dark'>
                  <div className='team flex flex-col items-center justify-center'>
                    <img src={two} alt='team logo' className='w-12' />
                    <p className='mt-4'>Accrington Stanley</p>
                  </div>
                  <div className='score text-center flex flex-col items-center gap-8  h-full'>
                    <p className='text-2xl font-bold'>3 : 7</p>
                    <p className='text-tertiary'>67'</p>
                  </div>
                  <div className='team flex flex-col items-center justify-center '>
                    <img src={one} alt='team logo' className='w-12' />
                    <p className='mt-4'>Plymouth Argyle</p>
                  </div>
                </div>
              </div>
              <div
                className={show ? 'result-per-league  w-full mb-14' : 'hidden'}
              >
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
                  <button className='left-arrow font-bold text-lg cursor-pointer'>
                    <img
                      src={angleRight}
                      alt='back arrow'
                      className='w-5 h-5'
                    />
                  </button>
                </div>
                <div className='score-card h-full flex justify-center gap-10 items-center border-b-2 border-primary  mt-8 bg-tertiary_dark/50 px-2 py-5 rounded-xl hover:cursor-pointer hover:bg-tertiary_dark'>
                  <div className='team flex flex-col items-center justify-center'>
                    <img src={two} alt='team logo' className='w-12' />
                    <p className='mt-4'>Accrington Stanley</p>
                  </div>
                  <div className='score text-center flex flex-col items-center gap-8  h-full'>
                    <p className='text-2xl font-bold'>3 : 7</p>
                    <p className='text-tertiary'>67'</p>
                  </div>
                  <div className='team flex flex-col items-center justify-center '>
                    <img src={one} alt='team logo' className='w-12' />
                    <p className='mt-4'>Plymouth Argyle</p>
                  </div>
                </div>
                <div className='score-card h-full flex justify-center gap-10 items-center border-b-2 border-primary  mt-8 bg-tertiary_dark/50 px-2 py-5 rounded-xl hover:cursor-pointer hover:bg-tertiary_dark'>
                  <div className='team flex flex-col items-center justify-center'>
                    <img src={two} alt='team logo' className='w-12' />
                    <p className='mt-4'>Accrington Stanley</p>
                  </div>
                  <div className='score text-center flex flex-col items-center gap-8  h-full'>
                    <p className='text-2xl font-bold'>3 : 7</p>
                    <p className='text-tertiary'>67'</p>
                  </div>
                  <div className='team flex flex-col items-center justify-center '>
                    <img src={one} alt='team logo' className='w-12' />
                    <p className='mt-4'>Plymouth Argyle</p>
                  </div>
                </div>
              </div>
            </div>

            {/* live matches session */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;
