import React, { useState } from 'react';
import League from './League';
import LeagueMatches from './LeagueMatches';
import Matches from './Matches';
import Navbar from './Navbar';
import News from './News';

function App() {
  const [leagueClicked, setLeagueClicked] = useState(false);

  const handleLeagueClick = () => {
    setLeagueClicked(true);
  };

  return (
    <div className=' bg-secondary h-screen overflow-auto'>
      <Navbar />
      <div class='grid grid-cols-4 h-screen '>
        <div class='col-span-1 p-4'>
          <League handleLeagueClick={handleLeagueClick} />
        </div>
        <div class=' col-span-2 p-4'>
          {leagueClicked ? null : <Matches />}
          <LeagueMatches />
        </div>
        <div class='col-span-1 p-4'>
          <News />
        </div>
      </div>
    </div>
  );
}

export default App;
// import React, { useState } from 'react';
// import League from './League';
// import EnglandMatches from './components/EnglandMatches';
// import ItalyMatches from './components/ItalyMatches';
// import FranceMatches from './components/FranceMatches';
// import GermanyMatches from './components/GermanyMatches';
// import NetherlandsMatches from './components/NetherlandsMatches';
// import ScotlandMatches from './components/ScotlandMatches';
// import Matches from './Matches';
// import Navbar from './Navbar';
// import News from './News';

// function App() {
//   const [selectedLeague, setSelectedLeague] = useState('');

//   const handleLeagueClick = (league) => {
//     setSelectedLeague(league);
//   };

//   const onLeagueClick = (league) => {
//     setSelectedLeague(league);
//   };

//   let selectedComponent = null;

//   switch (selectedLeague) {
//     case 'England':
//       selectedComponent = <EnglandMatches />;
//       break;
//     case 'Italy':
//       selectedComponent = <ItalyMatches />;
//       break;
//     case 'France':
//       selectedComponent = <FranceMatches />;
//       break;
//     case 'Germany':
//       selectedComponent = <GermanyMatches />;
//       break;
//     case 'Netherlands':
//       selectedComponent = <NetherlandsMatches />;
//       break;
//     case 'Scotland':
//       selectedComponent = <ScotlandMatches />;
//       break;
//     default:
//       selectedComponent = <League onLeagueClick={onLeagueClick} />;
//   }

//   return (
//     <div className='bg-secondary h-screen overflow-auto'>
//       <Navbar />
//       <div className='grid grid-cols-4 h-screen'>
//         <div className='col-span-1 p-4'>{selectedComponent}</div>
//         <div className='col-span-2 p-4'>
//           <Matches />
//         </div>
//         <div className='col-span-1 p-4'>
//           <News />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
