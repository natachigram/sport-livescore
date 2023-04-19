import React from 'react';
import { useState, useEffect } from 'react';
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
  const [liveMatches, setLiveMatches] = useState([]);
  const [loaders, setLoaders] = useState(true);


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

  useEffect(() => {
    axios
      .get(
        `https://apiv3.apifootball.com/?action=get_events&match_live=1&league_id=${leagueId}&APIkey=9f48e7b126b0365fb1b37e9c077cd6dbd6ea7c7bbd4d3944b217dddde75cc362`
      )
      .then((response) => {
        const sortedLiveMatches = response.data.sort(
          (a, b) => a.match_id - b.match_id
        );
        setLiveMatches(sortedLiveMatches);
        setLoaders(false);
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
      <div className='bg-black w-full rounded-xl p-4  flex-col md:px-8 py-2 h-full'>
        <div className='league flex justify-between items-center'>
          <div className='left-side flex justify-between items-center gap-3'>
            <button onClick={handleGoback}>
              <img src={backAngle} alt='' className=' mr-2 md:mr-8' />
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
          {/* <button
            onClick={() => handleActiveBtn('results')}
            className={` ${
              activeBtn === 'results'
                ? 'bg-primary w-20  rounded-md font-bold text-sm h-7 '
                : 'text-white w-20  rounded-md font-bold text-sm h-7'
            } `}
          >
            Results
          </button> */}
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
          <div lassName='score-card h-full flex justify-center gap-10 items-center  mt-8 bg-tertiary_dark/50 px-2 py-5 rounded-xl '>
            {loaders ? (
              <p className='text-primary font-bold w-full text-center pt-4'>
                No Matches Found
              </p>
            ) : (
              <>
                {liveMatches.map((match) => (
                  <div
                    key={match.match_id}
                    className={'result-per-league  w-full mb-14'}
                  >
                    <div className='score-card h-32 flex justify-center items-center  border-b-2 border-primary  mt-8 bg-tertiary_dark/50  rounded-xl'>
                      <div className='team text-center flex flex-col items-center w-40 h-full justify-evenly '>
                        <img
                          src={match.team_home_badge}
                          alt='team logo'
                          className='w-12'
                        />
                        <p className='mt-4 text-white'>
                          {match.match_hometeam_name}
                        </p>
                      </div>
                      <div className='score text-center flex flex-col items-center w-32 h-full justify-evenly'>
                        <p className='text-2xl text-white font-bold'>
                          {match.match_hometeam_score +
                            ' - ' +
                            match.match_awayteam_score}
                        </p>
                        <p className='text-tertiary'>{match.match_status}'</p>
                      </div>
                      <div className='team text-center flex flex-col items-center w-40 h-full justify-evenly '>
                        <img
                          src={match.team_away_badge}
                          alt='team logo'
                          className='w-12'
                        />
                        <p className='mt-4 text-white'>
                          {match.match_awayteam_name}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
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
          <div className=' rounded-md md:p-4'>
            <table className='w-full'>
              <thead>
                <tr className='text-tertiary '>
                  <th className='py-2 text-left pr-1'>#</th>
                  <th className='py-2 text-left pr-1'>Team</th>
                  <th className='py-2 text-left pr-1'>PTS</th>
                  <th className='py-2 text-left pr-1'>P</th>
                  <th className='py-2 text-left pr-1'>W</th>
                  <th className='py-2 text-left pr-1'>D</th>
                  <th className='py-2 text-left pr-1'>L</th>
                  <th className='py-2 text-left pr-1'>F</th>
                  <th className='py-2 text-left'>A</th>
                  {/* <th className='py-2 text-left'>GD</th> */}
                </tr>
              </thead>
              <tbody>
                {standings.map((standing) => (
                  <tr className='' key={standing.league_id}>
                    <td className='py-2 pr-1 text-white'>
                      {standing.overall_league_position}
                    </td>
                    <td className='py-2 text-white pr-1 flex items-center'>
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
                    <td className='py-2 pr-1 text-tertiary'>
                      {standing.overall_league_PTS}
                    </td>
                    <td className='py-2 pr-1 text-tertiary'>
                      {standing.overall_league_payed}
                    </td>
                    <td className='py-2 pr-1 text-tertiary'>
                      {standing.overall_league_W}
                    </td>
                    <td className='py-2 pr-1 text-tertiary'>
                      {standing.overall_league_D}
                    </td>
                    <td className='py-2 pr-1 text-tertiary'>
                      {standing.overall_league_L}
                    </td>
                    <td className='py-2 pr-1 text-tertiary'>
                      {standing.overall_league_GF}
                    </td>
                    <td className='py-2 pr-1 text-tertiary'>
                      {standing.overall_league_GA}
                    </td>
                    {/* <td className='py-2 pr-1 text-tertiary'>
                      {standing.overall_league_GD}
                    </td> */}
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
