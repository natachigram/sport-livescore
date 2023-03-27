import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import NewsImage from './images/imgNews.png';

const League = () => {
  return (
    <div className='flex justify-start '>
      <div className='bg-black w-11/12 rounded-md  flex-col'>
        <div className='title text-white border-b border-secondary px-4 flex items-center justify-between'>
          <h3 className=' py-2'>Featured News</h3>
          <AiOutlineRight />
        </div>
        <div className='flex flex-col gap-3 justify-center'>
          <a href='/'>
            <div className='news-card-container mx-4 my-2 relative'>
              <div
                className='news-card bg-cover bg-center h-32 rounded-md '
                style={{ backgroundImage: `url(${NewsImage})` }}
              ></div>
              <div className='grad bg-gradient-to-b from-transparent to-black/60  absolute h-full w-full bottom-0 flex flex-col justify-end items-center hover:to-black/10 '>
                <h3 className='font-bold text-white mx-3 my-1 leading-tight'>
                  Ingle knows Blues must be flawless to tame Lyon
                </h3>
              </div>
            </div>
          </a>
          <a href='/'>
            <div className='news-card-container mx-4 my-2 relative '>
              <div
                className='news-card bg-cover bg-center h-32 rounded-md '
                style={{ backgroundImage: `url(${NewsImage})` }}
              ></div>
              <div className='grad bg-gradient-to-b from-transparent to-black/60  absolute h-full w-full bottom-0 flex flex-col justify-end items-center hover:to-black/10 '>
                <h3 className='font-bold text-white mx-3 my-1 leading-tight'>
                  Ingle knows Blues must be flawless to tame Lyon
                </h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default League;
