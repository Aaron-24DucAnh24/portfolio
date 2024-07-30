'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ShrinkBorder } from '../general/ShrinkBorder';
import { THEME } from '@/utils/enums';
import { useAppSelector } from '@/utils/hooks';

interface IEducationCard {
  image: string,
  orgName: string,
  degreeName: string,
  score: string,
  from: string,
  to: string,
}

export const EducationCard = (props: IEducationCard) => {
  const theme = useAppSelector(x => x.theme);
  const { image, orgName, degreeName, score, from, to } = props;
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      className={`mb-4 shadow-md hover:shadow-2xl rounded-lg overflow-hidden border relative
        ${theme.value === THEME.DARK && 'bg-fifth border-third'}
      `}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="p-4 sm:p-0 h-fit w-full flex flex-col sm:flex-row">
        <div className='relative mb-4 sm:mb-0 mr-0 sm:mr-12 w-72 h-32 sm:w-80 sm:h-40 overflow-hidden shadow-lg'>
          <Image
            className='object-cover'
            src={image}
            alt={image}
            fill
          />
        </div>

        <div className='flex flex-col space-y-1 sm:space-y-2 justify-center'>
          <div className='text-base md:text-lg uppercase font-semibold'>
            {orgName}
          </div>
          <div className='uppercase text-sm md:text-base'>
            {degreeName}
          </div>
          <div className='text-primary text-sm md:text-base font-semibold'>
            {score}
          </div>
          <div className='italic text-third text-sm md:text-base'>
            {`From ${from} to ${to}`}
          </div>
        </div>
      </div>
      <ShrinkBorder isHover={isHover} />
    </div>
  );
};