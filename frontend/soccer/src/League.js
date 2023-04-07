// import React, { useState, useEffect } from 'react';
// import Flag from 'react-world-flags';
// import axios from 'axios';

// const League = ({ handleLeagueClick }) => {
//   const [fixtures, setFixtures] = useState([]);

//   useEffect(() => {
//     const fetchFixtures = async () => {
//       const response = await axios.get(
//         'https://livescore-api.com/api-client/fixtures/matches.json?&key=uxt8HDH0yM2cJZjq&secret=KN31VFxk1gQjCSF6p8f7MW7lI9xs9QTU'
//       );
//       // setIsLoading(false);
//       setFixtures(response.data.data.fixtures);
//     };

//     fetchFixtures();
//   }, []);

//   return (
//     <div className='flex justify-end '>
//       <div className='bg-black basis-3/4 rounded-md  flex-col'>
//         <div className='title text-white border-b border-secondary '>
//           <h3 className='px-6 py-2'>Leagues</h3>
//         </div>
//         {fixtures.map((fixture, index) => (
//           <div className='title text-tertiary ' key={index}>
//             <h3
//               className='px-6 py-2 flex items-center'
//               onClick={handleLeagueClick}
//             >
//               <Flag code='GB_ENG' width='28' className='rounded-sm' />
//               <span className='flag pl-2 text-white'>{fixture.competition.name}</span>
//             </h3>
//           </div>
//         ))}

//         <div className='footer text-white border-t border-secondary  '>
//           <h3 className='px-6 py-2'>See More</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default League;

import React, { useState, useEffect } from 'react';
import Flag from 'react-world-flags';
import axios from 'axios';

const League = ({ handleLeagueClick }) => {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    const fetchFixtures = async () => {
      const response = await axios.get(
        'https://livescore-api.com/api-client/fixtures/matches.json?&key=uxt8HDH0yM2cJZjq&secret=KN31VFxk1gQjCSF6p8f7MW7lI9xs9QTU'
      );
      setFixtures(response.data.data.fixtures);
    };

    fetchFixtures();
  }, []);

  // Create an array of unique competition names
  const competitionNames = [
    ...new Set(fixtures.map((fixture) => fixture.competition.name)),
  ];

  return (
    <div className='flex justify-end '>
      <div className='bg-black basis-3/4 rounded-md  flex-col'>
        <div className='title text-white border-b border-secondary '>
          <h3 className='px-6 py-2'>Leagues</h3>
        </div>
        {competitionNames.map((name, index) => (
          <div className='title text-tertiary ' key={index}>
            <h3
              className='px-6 py-2 flex items-center'
              onClick={handleLeagueClick}
            >
              <Flag code='GB_ENG' width='28' className='rounded-sm' />
              <span className='flag pl-2 text-white text-sm'>{name}</span>
            </h3>
          </div>
        ))}

        <div className='footer text-white border-t border-secondary  '>
          <h3 className='px-6 py-2'>See More</h3>
        </div>
      </div>
    </div>
  );
};

export default League;
