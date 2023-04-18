import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import axios from 'axios';

const League = ({ handleLeagueClick, setShowLeague, setHam }) => {
  const [leagues, setLeagues] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredLeagues = leagues.filter((league) =>
    league.league_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBtnClick =()=>{
    setShowLeague(false);
    setHam(true);
  }

  return (
    <div className='flex md:justify-end w-full md:w-auto'>
      <div className='w-full md:w-auto bg-black basis-3/4 rounded-md flex-col max-h-screen overflow-y-scroll '>
        <div className='title text-white border-b border-secondary md:block flex justify-between items-center'>
          <h3 className='px-6 py-2 '>Leagues</h3>
          <span className='md:hidden mr-4 text-xl cursor-pointer font-bold' onClick={handleBtnClick} >
            <IoClose />
          </span>
        </div>
        <div className='flex items-center justify-center bg-secondary text-tertiary  font-medium  p-2 rounded-md mx-3 mt-2'>
          <span className=' ml-4 flex justify-end items-center text-xl font-bold'>
            <AiOutlineSearch />
          </span>
          <input
            className='bg-transparent ml-2 border-none outline-none'
            type='text'
            placeholder='Search leagues...'
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className='leagues-data text-white'>
          {filteredLeagues.map((league) => (
            <div key={league.league_id}>
              <button
                onClick={() =>
                  handleLeagueClick(
                    league.league_id,
                    league.league_name,
                    league.country_name
                  )
                }
                className='py-2 px-5'
              >
                <div className=' text-left font-bold text-sm flex items-center gap-2'>
                  {league.league_logo === '' ? (
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

        <div className='footer text-white border-t border-secondary'>
          <h3 className='px-6 py-2'>See More</h3>
        </div>
      </div>
    </div>
  );
};

export default League;
