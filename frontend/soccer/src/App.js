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

  const handleLeagueClick = (id, name, country) => {
    setLeagueClicked(true);
    setLeagueId(id);
    setLeagueName(name);
    setLeagueCountry(country);
  };

  return (
    <div className=' bg-secondary h-screen overflow-auto'>
      <Navbar />
      <div className='grid grid-cols-4 h-screen '>
        <div className='col-span-1 p-4'>
          <League handleLeagueClick={handleLeagueClick} />
        </div>
        <div className=' col-span-2 p-4'>
          {leagueClicked ? <LeagueMatches leagueId={leagueId} leagueName={leagueName} leagueCountry={leagueCountry} setLeagueClicked={setLeagueClicked} /> : <Matches />}
        </div>
        <div className='col-span-1 p-4'>
          <News />
        </div>
      </div>
    </div>
  );
}

export default App;
