import React from 'react';
import Flag from 'react-world-flags';

const League = () => {
  return (
    <div className='flex justify-end '>
      <div className='bg-black basis-3/4 rounded-md  flex-col'>
        <div className='title text-white border-b border-secondary '>
          <h3 className='px-6 py-2'>Leagues</h3>
        </div>
        
        <div className='title text-tertiary '>
          <h3 className='px-6 py-2 flex items-center'>
            <Flag code='GB_ENG' width='28' className='rounded-sm' />
            <span className='flag pl-2'>England</span>
          </h3>
        </div>
        <div className='title text-tertiary '>
          <h3 className='px-6 py-2 flex items-center'>
            <Flag code='it' width='28' className='rounded-sm' />
            <span className='flag pl-2'>Italy</span>
          </h3>
        </div>
        <div className='title text-tertiary '>
          <h3 className='px-6 py-2 flex items-center'>
            <Flag code='fr' width='28' className='rounded-sm' />
            <span className='flag pl-2'>France</span>
          </h3>
        </div>
        <div className='title text-tertiary '>
          <h3 className='px-6 py-2 flex items-center'>
            <Flag code='de' width='28' className='rounded-sm' />
            <span className='flag pl-2'>Germany</span>
          </h3>
        </div>
        <div className='title text-tertiary '>
          <h3 className='px-6 py-2 flex items-center'>
            <Flag code='NL' width='28' className='rounded-sm' />
            <span className='flag pl-2'>Netherland</span>
          </h3>
        </div>
        <div className='title text-tertiary '>
          <h3 className='px-6 py-2 flex items-center'>
            <Flag code='GB_SCT' width='28' className='rounded-sm' />
            <span className='flag pl-2'>Scotland</span>
          </h3>
        </div>

        <div className='footer text-white border-t border-secondary  '>
          <h3 className='px-6 py-2'>See More</h3>
        </div>
      </div>
    </div>
  );
};

export default League;
