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
      className={`shadow-md hover:shadow-2xl rounded-lg overflow-hidden border relative
        ${theme.value === THEME.DARK && 'bg-fifth border-third'}
      `}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="px-4 py-4 w-full flex flex-col sm:flex-row items-center space-y-4 sm:space-x-4 sm:space-y-0">
        <div className='relative w-32 h-32 overflow-hidden shadow-lg rounded-full border'>
          <Image
            className='object-cover'
            src={image}
            alt={image}
            fill
          />
        </div>

        <div className='flex flex-col space-y-1 justify-center items-center sm:items-start text-center'>
          <div className='text-base uppercase font-semibold'>
            {orgName}
          </div>
          <div className='uppercase text-base'>
            {degreeName}
          </div>
          <div className='text-primary text-base font-semibold'>
            {score}
          </div>
          <div className='italic text-third text-base'>
            {`From ${from} to ${to}`}
          </div>
        </div>
      </div>
      <ShrinkBorder isHover={isHover} />
    </div>
  );
};