'use client';

import Image from 'next/image';
import { useState } from 'react';

interface IEducationCard {
  image: string,
  orgName: string,
  degreeName: string,
  score: string,
  from: string,
  to: string,
}

export const EducationCard = (props: IEducationCard) => {
  const { image, orgName, degreeName, score, from, to } = props;
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className='mb-4 sm:mb-8 shadow-lg hover:bg-fourth rounded-lg'
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="h-fit w-full flex flex-col sm:flex-row">
        <div className='relative mb-4 sm:mb-0 w-80 h-40 sm:w-96 sm:h-60 rounded-lg overflow-hidden mr-0 sm:mr-12 shadow-lg'>
          <Image
            className='object-cover'
            src={image}
            alt={image}
            fill
          />
        </div>

        <div className='flex flex-col space-y-2 sm:space-y-4 justify-center'>
          <div className='text-lg sm:text-xl uppercase font-semibold'>
            {orgName}
          </div>
          <div className='uppercase text-base sm:text-lg'>
            {degreeName}
          </div>
          <div className='text-primary text-base sm:text-lg font-semibold'>
            {score}
          </div>
          <div className='italic text-third text-base sm:text-lg'>
            {`From ${from} to ${to}`}
          </div>
        </div>
      </div>
      <hr className={`border-2 mt-4 sm:mt-8
        ${isHover ? 'border-primary animate-shrink-out w-full' : 'border-fourth animate-shrink-in w-3/4'}`}
      />
    </div>
  );
};