import React, { useState } from 'react';
import League from './League';
import LeagueMatches from './LeagueMatches';
import Matches from './Matches';
import Navbar from './Navbar';
import News from './News';

function App() {
  const [leagueClicked, setLeagueClicked] = useState(false);
  const [leagueId, setLeagueId] = useState(null);
  const [leagueName, setLeagueName] = useState(null);
  const [leagueCountry, setLeagueCountry] = useState(null);
  const [showLeague, setShowLeague] = useState(false);
  const [ham, setHam] = useState(true);

  const handleLeagueClick = (id, name, country) => {
    setLeagueClicked(true);
    setLeagueId(id);
    setLeagueName(name);
    setLeagueCountry(country);
  };

  const handleBtn = () => {
    console.log(showLeague);
    setShowLeague(true);
    setHam(false);
  };

  return (
    <div className=' bg-secondary h-screen overflow-auto'>
      <Navbar
        handleBtn={handleBtn}
        setShowLeague={setShowLeague}
        ham={ham}
      />
      <div className='grid grid-cols-4 h-screen '>
        <div
          className={
            showLeague
              ? 'block pt-4  col-span-1 md:relative absolute ml-0 md:right-0 top-0 md:top-auto w-full'
              : 'hidden  md:block col-span-1 md:p-4'
          }
        >
          <League
            handleLeagueClick={handleLeagueClick}
            setHam={setHam}
            setShowLeague={setShowLeague}
            // ham={ham}
          />
        </div>
        <div className='col-span-4 mt-2 md:col-span-2 md:p-4 '>
          {leagueClicked ? (
            <LeagueMatches
              leagueId={leagueId}
              leagueName={leagueName}
              leagueCountry={leagueCountry}
              setLeagueClicked={setLeagueClicked}
            />
          ) : (
            <Matches />
          )}
        </div>
        <div className='hidden '>
          <News />
        </div>
      </div>
    </div>
  );
}

export default App;
