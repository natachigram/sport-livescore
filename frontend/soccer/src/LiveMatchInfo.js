import React, { useState, useEffect } from 'react';
import backAngle from './images/back_arrow.svg';
import ball from './images/ball.svg';
import yellow from './images/yellow_card.svg';
import red from './images/red_card.svg';
const LiveMatchInfo = ({ match, setIsLiveMatchInfo, setShow }) => {
  const [selectTab, setSelectTab] = useState('summary');
  const [h2hData, setH2hData] = useState(null);

  const handleTab = (tab) => {
    setSelectTab(tab);
  };

  const handleGoback = () => {
    setIsLiveMatchInfo(true);
    setShow(true);
  };

  useEffect(() => {
    async function fetchH2hData() {
      const response = await fetch(
        `https://apiv3.apifootball.com/?action=get_H2H&firstTeamId=${match.match_hometeam_id}&secondTeamId=${match.match_awayteam_id}&APIkey=9f48e7b126b0365fb1b37e9c077cd6dbd6ea7c7bbd4d3944b217dddde75cc362`
      );
      const data = await response.json();
      setH2hData(data);
      console.log(data);
    }
    fetchH2hData();
  }, []);

  return (
    <div className='liveMatchInfo  '>
      <div
        key={match.match_id}
        className='result-per-league  w-full mb-14 px-4 py-2 '
      >
        <div className='league flex justify-between items-center '>
          <div className='left-side flex justify-between  items-center gap-3'>
            <button onClick={handleGoback}>
              <img src={backAngle} alt='' className='mr-8' />
            </button>
            <img
              src={match.country_logo}
              className='w-6 h-4 rounded-sm'
              alt=''
            />
            <div>
              <h1 className='league-title font-bold text-sm text-white'>
                {match.league_name}
              </h1>
              <p className='text-xs text-tertiary'>{match.country_name}</p>
            </div>
          </div>
        </div>
        <div className='score-card h-32 flex justify-center items-center   mt-8 bg-tertiary_dark/50  rounded-xl '>
          <div className='team text-center flex flex-col items-center w-40 h-full justify-evenly '>
            <img src={match.team_home_badge} alt='team logo' className='w-12' />
            <p className='mt-4 text-white font-bold'>
              {match.match_hometeam_name}
            </p>
          </div>
          <div className='score text-center flex flex-col items-center w-32 h-full justify-evenly'>
            <p className='text-2xl font-bold text-white'>
              {' '}
              {match.match_hometeam_score + ' - ' + match.match_awayteam_score}
            </p>
            <p className='text-primary'>{match.match_status}'</p>
          </div>
          <div className='team text-center flex flex-col items-center w-40 h-full justify-evenly '>
            <img src={match.team_away_badge} alt='team logo' className='w-12' />
            <p className='mt-4 text-white font-bold'>
              {match.match_awayteam_name}
            </p>
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
        {/* <button
          onClick={() => handleTab('Table')}
          className={`text-white py-2  w-24 text-center font-bold ${
            selectTab === 'Table' ? 'border-b-2 border-primary' : ''
          }`}
        >
          Table
        </button> */}

        <button
          onClick={() => handleTab('H2H')}
          className={`text-white py-2  w-24 text-center font-bold ${
            selectTab === 'H2H' ? 'border-b-2 border-primary' : ''
          }`}
        >
          H2H
        </button>
      </div>
      {/* output lineups*/}

      {selectTab === 'line-ups' && (
        <div className='lineups-container flex justify-between py-4 px-8'>
          <div className='home-lineups text-white '>
            <h2 className='text-center mb-4  font-bold'>Home</h2>
            <div className='starting mb-10 text-sm'>
              <h3 className='text-center mb-2 text-tertiary'>
                Starting Lineups
              </h3>
              {match.lineup.home.starting_lineups.map((player) => (
                <p
                  key={player.player_key}
                  className='text-primary flex flex-col justify-center items-center mb-4'
                >
                  <div className='bg-secondary rounded-full w-10 text-primary text-center py-2 font-bold w-10 '>
                    {player.lineup_number}
                  </div>{' '}
                  <span>{player.lineup_player}</span>
                </p>
              ))}
            </div>
            <div className='sub mb-10 text-sm'>
              <h3 className='text-center text-tertiary mb-2'>Substitutes</h3>
              {match.lineup.home.substitutes.map((player) => (
                <p
                  key={player.player_key}
                  className='text-primary flex flex-col justify-center items-center mb-4'
                >
                  <div className='bg-secondary rounded-full w-10 text-primary text-center py-2 font-bold w-10 '>
                    {player.lineup_number}
                  </div>{' '}
                  <span>{player.lineup_player}</span>
                </p>
              ))}
            </div>

            <div className='coach text-sm'>
              <h3 className='text-center mb-1 '>Coach</h3>
              {match.lineup.home.coach.map((player) => (
                <p key={player.player_key} className='text-primary text-center'>
                  {player.lineup_player}
                </p>
              ))}
            </div>
          </div>
          {/* away side */}
          <div className='home-lineups text-white '>
            <h2 className='text-center mb-4 font-bold'>Away</h2>
            <div className='starting mb-10 text-sm'>
              <h3 className='text-center mb-2 text-tertiary'>
                Starting Lineups
              </h3>
              {match.lineup.away.starting_lineups.map((player) => (
                <p
                  key={player.player_key}
                  className='text-primary flex flex-col justify-center items-center mb-4'
                >
                  <div className='bg-secondary rounded-full w-10 text-primary text-center py-2 font-bold w-10 '>
                    {player.lineup_number}
                  </div>{' '}
                  <span>{player.lineup_player}</span>
                </p>
              ))}
            </div>
            <div className='sub mb-10 text-sm'>
              <h3 className='text-center text-tertiary mb-2 '>Substitutes</h3>
              {match.lineup.away.substitutes.map((player) => (
                <p
                  key={player.player_key}
                  className='text-primary flex flex-col justify-center items-center mb-4'
                >
                  <div className='bg-secondary rounded-full w-10 text-primary text-center py-2 font-bold w-10 '>
                    {player.lineup_number}
                  </div>{' '}
                  <span>{player.lineup_player}</span>
                </p>
              ))}
            </div>

            <div className='coach text-sm '>
              <h3 className='text-center mb-1'>Coach</h3>
              {match.lineup.away.coach.map((player) => (
                <p key={player.player_key} className='text-primary text-center'>
                  {player.lineup_player}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* output summary */}
      {selectTab === 'summary' && (
        <div
          className='summary-container flex flex-col items-center my-4 mx-4 rounded-lg border border-secondary '
          // style={{ height: '700px' }}
        >
          <div className='summary-header w-full h-14 flex items-center py-8 '>
            <div className='text-tertiary basis-1/2 pl-20 text-xs '>TIME</div>
            <div className='flex items-center space-x-28'>
              <img
                src={match.team_home_badge}
                alt='team logo'
                className='w-8 h-8 basis-1/2'
              />
              <img
                src={match.team_away_badge}
                alt='team logo'
                className='w-8 h-8 basis-1/2'
              />
            </div>
          </div>
          <div className='summary-data bg-tertiary_dark w-11/12 h-full rounded-lg mb-4 flex flex-col text-sm '>
            <div>
              {match.goalscorer.map((goal) => (
                <div className='w-full flex items-center  py-4 px-2'>
                  <div className='basis-1/2 flex items-center justify-evenly'>
                    <span className='mr-4 text-tertiary'>{goal.time}'</span>
                    <span className='text-white font-bold'>{goal.score}</span>
                  </div>
                  {goal.home_scorer ? (
                    <span className='flex items-center justify-start font-bold text-white  basis-1/2'>
                      <img src={ball} alt='ball' className='mr-2' />{' '}
                      {goal.home_scorer}
                    </span>
                  ) : (
                    <span className='flex items-center justify-end font-bold text-white  basis-1/2'>
                      <img src={ball} alt='ball' className='mr-2' />
                      {goal.away_scorer}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className='my-4'>
              {match.cards.map((card) => (
                <div className='flex items-center'>
                  <span className='pl-16 text-tertiary basis-1/2  '>
                    {card.time}'
                  </span>

                  <span className='font-bold text-white flex items-center justify-end basis-1/2'>
                    {card.info === 'home' ? (
                      <span className=' flex w-full'>
                        {card.card === 'red card' ? (
                          <span className='flex items-center'>
                            <img src={red} alt='card' /> {card.info}
                            {card.home_fault}
                          </span>
                        ) : (
                          <span className='flex items-center'>
                            <img src={yellow} alt='card' /> {card.info}
                            {card.home_fault}
                          </span>
                        )}
                      </span>
                    ) : (
                      <span className='mr-4'>
                        {card.card === 'red card' ? (
                          <span className='flex items-center'>
                            <img src={red} alt='card' /> {card.info}
                            {card.away_fault}
                          </span>
                        ) : (
                          <span className='flex items-center'>
                            <img src={yellow} alt='card' /> {card.info}
                            {card.away_fault}
                          </span>
                        )}
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* output head2head */}
      {selectTab === 'H2H' && (
        <div className='h2h-container'>
          {h2hData ? (
            <div className='score-card h-32 flex justify-center gap-10 items-center  mt-8 bg-tertiary_dark/50 rounded-xl mx-5'>
              <div
                key={match.match_id}
                className='team flex flex-col items-center justify-center'
              >
                <img
                  src={match.team_home_badge}
                  alt='team logo'
                  className='w-12'
                />
                <p className='mt-4 text-white'>{match.match_hometeam_name}</p>
              </div>
              <div className='score text-center flex flex-col items-center justify-center gap-2  h-full'>
                <p className='text-tertiary text-xs md:text-sm'>{match.match_date}</p>
                <p className='text-2xl font-bold text-white'>
                  {match.match_hometeam_score + ' : ' + match.match_awayteam_score}
                </p>
                <p className='text-tertiary text-xs md:text-sm'> {match.match_status} </p>
              </div>
              <div className='team flex flex-col items-center justify-center '>
                <img
                  src={match.team_away_badge}
                  alt='team logo'
                  className='w-12'
                />
                <p className='mt-4 text-white'>{match.match_awayteam_name}</p>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    </div>
  );
};

export default LiveMatchInfo;
