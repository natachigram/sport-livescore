import React from 'react';
import { useState, useEffect } from 'react';
// import Flag from 'react-world-flags';
import backAngle from './images/back_arrow.svg';
import one from './images/one.svg';
import two from './images/two.svg';
import axios from 'axios';

const LeagueMatches = ({
  leagueId,
  leagueName,
  leagueCountry,
  setLeagueClicked,
}) => {
  const [activeBtn, setActiveBtn] = useState('table');
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://apiv3.apifootball.com/?action=get_standings&league_id=${leagueId}&APIkey=9f48e7b126b0365fb1b37e9c077cd6dbd6ea7c7bbd4d3944b217dddde75cc362`
      )
      .then((response) => {
        const sortedStandings = response.data.sort(
          (a, b) => a.overall_league_position - b.overall_league_position
        );
        setStandings(sortedStandings);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [leagueId]);

  const handleActiveBtn = (btn) => {
    setActiveBtn(btn);
  };

  const handleGoback = () => {setLeagueClicked(false)};

  return (
    <div className='flex justify-center'>
      <div className='bg-black w-full rounded-xl  flex-col px-8 py-2 h-full'>
        <div className='league flex justify-between items-center'>
          <div className='left-side flex justify-between items-center gap-3'>
            <button onClick={handleGoback}>
              <img src={backAngle} alt='' className='mr-8' />
            </button>
            <div>
              <h1 className='league-title font-bold text-sm text-white'>
                {leagueName}
              </h1>
              <p className='text-xs text-tertiary'>{leagueCountry}</p>
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
          className={activeBtn === 'table' ? 'table-content mb-8' : 'hidden'}
        >
          <div className=' rounded-md p-4'>
            <table className='w-full'>
              <thead>
                <tr className='text-tertiary '>
                  <th className='py-2 text-left'>#</th>
                  <th className='py-2 text-left'>Team</th>
                  <th className='py-2 text-left'>PTS</th>
                  <th className='py-2 text-left'>P</th>
                  <th className='py-2 text-left'>W</th>
                  <th className='py-2 text-left'>D</th>
                  <th className='py-2 text-left'>L</th>
                  <th className='py-2 text-left'>F</th>
                  <th className='py-2 text-left'>A</th>
                  <th className='py-2 text-left'>GD</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((standing) => (
                  <tr className='' key={standing.team_id}>
                    <td className='py-2 text-white'>
                      {standing.overall_league_position}
                    </td>
                    <td className='py-2 text-white flex items-center'>
                      {!standing.team_badge ? (
                        ''
                      ) : (
                        <img
                          src={standing.team_badge}
                          className='w-6 h-5 mr-2'
                          alt=''
                        />
                      )}

                      {standing.team_name}
                    </td>
                    <td className='py-2 text-tertiary'>
                      {standing.overall_league_PTS}
                    </td>
                    <td className='py-2 text-tertiary'>
                      {standing.overall_league_payed}
                    </td>
                    <td className='py-2 text-tertiary'>
                      {standing.overall_league_W}
                    </td>
                    <td className='py-2 text-tertiary'>
                      {standing.overall_league_D}
                    </td>
                    <td className='py-2 text-tertiary'>
                      {standing.overall_league_L}
                    </td>
                    <td className='py-2 text-tertiary'>
                      {standing.overall_league_GF}
                    </td>
                    <td className='py-2 text-tertiary'>
                      {standing.overall_league_GA}
                    </td>
                    <td className='py-2 text-tertiary'>
                      {standing.overall_league_GD}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* table tab-content */}
      </div>
    </div>
  );
};

export default LeagueMatches;
