import React, { useState,  useEffect } from 'react';
import Flag from 'react-world-flags';
import one from './images/one.svg';
import two from './images/two.svg';
import backAngle from './images/back_arrow.svg';
const LiveMatchInfo = ({ matchId }) => {
  const [selectTab, setSelectTab] = useState('Table');
  const [matchData, setMatchData] = useState(null);

  const handleTab = (tab) => {
    setSelectTab(tab);
  };

  useEffect(() => {
    if (matchId) {
      // Fetch data for the selected match using the matchId
      fetch(`/api/matches/${matchId}`)
        .then((response) => response.json())
        .then((data) => setMatchData(data));
    }
  }, [matchId]);

  return (
    <div className='liveMatchInfo  '>
      <div className='result-per-league  w-full px-4 py-2'>
        <div className='league flex items-center justify-start gap-12'>
          <button className=''>
            <img src={backAngle} alt='back arrow' className='' />
          </button>
          <div className='left-side flex gap-4'>
            <Flag code='GB_ENG' width='28' className='rounded-sm' />
            <div>
              <h1 className='league-title font-bold text-sm text-white'>
                League 2
              </h1>
              <p className='text-xs text-tertiary'>England</p>
            </div>
          </div>
        </div>
        <div className='score-card h-full flex justify-center gap-10 items-center  mt-8 bg-tertiary_dark/50 px-2 py-5 rounded-xl hover:cursor-pointer hover:bg-tertiary_dark'>
          <div className='team flex flex-col items-center justify-center'>
            <img src={two} alt='team logo' className='w-12' />
            <p className='mt-4 text-white'>Accrington Stanley</p>
          </div>
          <div className='score text-center flex flex-col items-center gap-8  h-full'>
            <p className='text-2xl font-bold text-white'>3 : 7</p>
            <p className='text-tertiary'>67'</p>
          </div>
          <div className='team flex flex-col items-center justify-center '>
            <img src={one} alt='team logo' className='w-12' />
            <p className='mt-4 text-white'>Plymouth Argyle</p>
          </div>
        </div>
      </div>
      <div className='mx-4 mt-10 flex items-center w-full justify-start'>
        <button
          onClick={() => handleTab('summary')}
          className={`text-white py-2  w-24 text-center font-bold ${
            selectTab === 'summary' ? 'border-b-2 border-primary' : ''
          }`}
        >
          Summary
        </button>
        <button
          onClick={() => handleTab('line-ups')}
          className={`text-white py-2  w-24 text-center font-bold ${
            selectTab === 'line-ups' ? 'border-b-2 border-primary' : ''
          }`}
        >
          Line-ups
        </button>
        <button
          onClick={() => handleTab('Table')}
          className={`text-white py-2  w-24 text-center font-bold ${
            selectTab === 'Table' ? 'border-b-2 border-primary' : ''
          }`}
        >
          Table
        </button>
        <button
          onClick={() => handleTab('News')}
          className={`text-white py-2  w-24 text-center font-bold ${
            selectTab === 'News' ? 'border-b-2 border-primary' : ''
          }`}
        >
          News
        </button>
        <button
          onClick={() => handleTab('H2H')}
          className={`text-white py-2  w-24 text-center font-bold ${
            selectTab === 'H2H' ? 'border-b-2 border-primary' : ''
          }`}
        >
          H2H
        </button>
      </div>
      <div className='tab-content w-full'>
        <div className='mx-4 flex items-center  justify-start text-center border border-secondary mt-4 rounded-md '>
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
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LiveMatchInfo;
