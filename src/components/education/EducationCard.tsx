'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ShrinkBorder } from '../general/ShrinkBorder';
import { THEME } from '@/utils/enums';
import { useAppSelector } from '@/utils/hooks';

interface IEducationCard {
  image: string;
  orgName: string;
  degreeName: string;
  score: string;
  from: string;
  to: string;
}

export const EducationCard = ({ image, orgName, degreeName, score, from, to }: IEducationCard) => {
  const isDarkTheme = useAppSelector(x => x.theme.value === THEME.DARK);
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`shadow-md hover:shadow-2xl rounded-lg overflow-hidden border relative
        ${isDarkTheme ? 'bg-fifth border-third' : ''}
      `}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="px-4 py-4 w-full flex flex-col sm:flex-row items-center space-y-4 sm:space-x-4 sm:space-y-0">
        <Image
          className='object-cover shadow-lg rounded-full border'
          src={image}
          alt={orgName}
          width={128}
          height={128}
        />
        <div className='flex flex-col space-y-1 justify-center items-center sm:items-start text-center sm:text-start'>
          <div className='text-base uppercase font-semibold'>{orgName}</div>
          <div className='uppercase text-base'>{degreeName}</div>
          <div className='text-primary text-base font-semibold'>{score}</div>
          <div className='italic text-third text-base'>{`From ${from} to ${to}`}</div>
        </div>
      </div>
      <ShrinkBorder isHover={isHover} />
    </div>
  );
};