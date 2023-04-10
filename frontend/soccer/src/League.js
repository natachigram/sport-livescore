import React, { useState, useEffect } from 'react';
import axios from 'axios';

const League = ({ handleLeagueClick }) => {
  const [leagues, setLeagues] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://apiv3.apifootball.com/?action=get_leagues&APIkey=9f48e7b126b0365fb1b37e9c077cd6dbd6ea7c7bbd4d3944b217dddde75cc362'
      )
      .then((response) => {
        const sortedLeagues = response.data.sort(
          (a, b) => a.league_id - b.league_id
        );
        setLeagues(sortedLeagues);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='flex justify-end '>
      <div className='bg-black basis-3/4 rounded-md  flex-col'>
        <div className='title text-white border-b border-secondary '>
          <h3 className='px-6 py-2'>Leagues</h3>
        </div>
        <div className='leagues-data text-white'>
          {leagues.map((league) => (
            <div>
              <button onClick={()=> handleLeagueClick(league.league_id, league.league_name, league.country_name)} className='py-2 px-5'>
                <div
                  className=' text-left font-bold text-sm flex items-center gap-2'
                  key={league.league_id}
                >
                  {!league.league_logo ? (
                    ''
                  ) : (
                    <img
                      src={league.league_logo}
                      alt='league logo'
                      className='w-5 h-4 '
                    />
                  )}
                  {league.league_name}
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className='footer text-white border-t border-secondary  '>
          <h3 className='px-6 py-2'>See More</h3>
        </div>
      </div>
    </div>
  );
};

export default League;
