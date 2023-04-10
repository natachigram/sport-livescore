import React, { useRef, useState, useEffect } from 'react';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import Flag from 'react-world-flags';
import one from './images/one.svg';
import two from './images/two.svg';
import angleLeft from './images/angle-right.svg';
import angleRight from './images/angle-left.svg';
import LiveMatchInfo from './LiveMatchInfo';
import axios from 'axios';
import { Orbit } from '@uiball/loaders';

const Matches = () => {
  const [isLive, setIsLive] = useState(true);
  const [isAll, setIsAll] = useState(false);
  const [fixture, setFixture] = useState(true);
  const [selectMatchDay, setSelectMatchDay] = useState('today');
  const [show, setShow] = useState(true);
  const [isLiveMatchInfo, setIsLiveMatchInfo] = useState(true);
  const matchDayRef = useRef(null);
  const [liveMatches, setLiveMatches] = useState([]);
  const [fixtures, setFixtures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLiveLoading, setIsLiveLoading] = useState(true);
  const [selectedMatch, setSelectedMatch] = useState(null);

  const handleIsLive = () => {
    setIsLive(true);
    setFixture(false);
    setIsAll(false);
    
    setSelectMatchDay('');
    // handleGetLiveMatches();
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
    setIsLiveMatchInfo(false);
  };



  useEffect(() => {
    axios
      .get(
        'https://apiv3.apifootball.com/?action=get_events&match_live=1&APIkey=9f48e7b126b0365fb1b37e9c077cd6dbd6ea7c7bbd4d3944b217dddde75cc362'
      )
      .then((response) => {
        setIsLiveLoading(false);
        setFixture(false);
        console.log(response.data)
        setLiveMatches(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const fetchFixtures = async () => {
      const response = await axios.get(
        'https://livescore-api.com/api-client/fixtures/matches.json?&key=uxt8HDH0yM2cJZjq&secret=KN31VFxk1gQjCSF6p8f7MW7lI9xs9QTU'
      );
      setIsLoading(false);
      setFixtures(response.data.data.fixtures);
    };

    fetchFixtures();
  }, []);

  const handleMatchClick = (matchId) => {
    setSelectedMatch(matchId);
  };

  const getDayOfWeek = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  return (
    <div>
      <div className='flex justify-center '>
        <div className='bg-black w-full rounded-xl  flex-col'>
          <div className={isLiveMatchInfo ? 'hidden' : ''}>
            {selectedMatch && (
              <LiveMatchInfo
                match={liveMatches.find(
                  (match) => match.match_id === selectedMatch
                )}
                setIsLiveMatchInfo={setIsLiveMatchInfo}
                setShow={setShow}
              />
            )}
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
            {isLoading ? (
              <div className='h-20 flex justify-center items-center'>
                <Orbit size={35} speed={1.5} color='#121511' />
              </div>
            ) : (
              <div className={fixture ? 'matches w-full ' : 'hidden'}>
                {fixtures.map((fixed) => (
                  <div
                    key={fixed.id}
                    className='result-per-league  w-full mb-14'
                  >
                    <div className='league flex justify-between items-center'>
                      <div className='left-side flex justify-between items-center gap-3'>
                        <Flag code='IRN' width='28' className='rounded-sm' />
                        <div>
                          <h1 className='league-title font-bold text-sm'>
                            {fixed.competition.name}
                          </h1>
                          <p className='text-xs text-tertiary'>
                            {fixed.location}
                          </p>
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
                    <div className='score-card h-32 flex justify-center items-center mt-8 bg-tertiary_dark/50 px-2 py-5 rounded-xl hover:cursor-pointer hover:bg-tertiary_dark'>
                      <div className='team text-center flex flex-col items-center w-40 h-full justify-evenly'>
                        <img src={two} alt='team logo' className='w-12' />
                        <p className='mt-4'>{fixed.home_name}</p>
                      </div>
                      <div className='score text-center flex flex-col items-center w-32 h-full justify-evenly'>
                        <p className='text-2xl font-bold'>
                          {' '}
                          {fixed.date.substring(5)}{' '}
                        </p>
                        <p className='text-tertiary'>
                          {getDayOfWeek(fixed.date)}
                        </p>
                      </div>
                      <div className='team text-center flex flex-col items-center w-40 h-full justify-evenly '>
                        <img src={one} alt='team logo' className='w-12' />
                        <p className='mt-4'>{fixed.away_name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* live matches session */}
            {isLiveLoading ? (
              <div className='h-20 flex justify-center items-center'>
                <Orbit size={35} speed={1.5} color='#121511' />
              </div>
            ) : (
              <div className={!fixture ? 'matches w-full ' : 'hidden'}>
                {liveMatches.map((match) => (
                  <div
                    key={match.match_id}
                    className={
                      show ? 'result-per-league  w-full mb-14' : 'hidden'
                    }
                    onClick={() => handleMatchClick(match.match_id)}
                  >
                    <div className='league flex justify-between items-center'>
                      <div className='left-side flex justify-between items-center gap-3'>
                        <img
                          src={match.country_logo}
                          className='w-6 h-4 rounded-sm'
                          alt=''
                        />
                        <div>
                          <h1 className='league-title font-bold text-sm'>
                            {match.league_name}
                          </h1>
                          <p className='text-xs text-tertiary'>
                            {match.country_name}
                          </p>
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
                      className='score-card h-32 flex justify-center items-center  border-b-2 border-primary  mt-8 bg-tertiary_dark/50  rounded-xl hover:cursor-pointer hover:bg-tertiary_dark'
                    >
                      <div className='team text-center flex flex-col items-center w-40 h-full justify-evenly '>
                        <img
                          src={match.team_home_badge}
                          alt='team logo'
                          className='w-12'
                        />
                        <p className='mt-4'>{match.match_hometeam_name}</p>
                      </div>
                      <div className='score text-center flex flex-col items-center w-32 h-full justify-evenly'>
                        <p className='text-2xl font-bold'>
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
                        <p className='mt-4'>{match.match_awayteam_name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* live matches session */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Matches;
