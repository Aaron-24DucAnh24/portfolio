'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ShrinkBorder } from '../general/ShrinkBorder';
import { THEME } from '@/utils/enums';
import { useAppSelector } from '@/utils/hooks';
import { formatDateRange, calculateDuration } from '@/utils/dateUtils';

interface IExperienceCard {
  name: string;
  image: string;
  position: string;
  from: Date;
  to: Date | null;
  desc: JSX.Element;
  className: string;
  companyUrl: string;
}

export const ExperienceCard = ({ name, image, position, from, to, desc, className, companyUrl }: IExperienceCard) => {
  const [isHover, setIsHover] = useState(false);
  const isDarkTheme = useAppSelector(x => x.theme.value === THEME.DARK);

  const dateRange = formatDateRange(from, to);
  const duration = calculateDuration(from, to);

  return (
    <div className='w-full md:w-1/2 px-4 sm:pb-8'>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={`flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-2xl border relative
          ${isDarkTheme ? 'bg-fifth border-third' : ''}
        `}
      >
        <div className='relative w-full h-36 flex justify-center items-center text-fourth font-medium'>
          <div className={`${className} absolute top-0 left-0 right-0 bottom-0 brightness-90`}></div>
          <p className='absolute'>{name}</p>
          <div className='absolute h-24 w-24 rounded-full overflow-hidden -bottom-12 shadow-xl'>
            <Link href={companyUrl} target="_blank" rel="noopener noreferrer">
              <Image
                src={image}
                alt={name}
                fill
                className='object-cover cursor-pointer'
              />
            </Link>
          </div>
        </div>

        <div className='mt-8 flex flex-col items-center p-8 space-y-3 text-justify'>
          <div className='text-lg font-medium'>
            {position}
          </div>
          <div className='italic font-light text-sm tracking-tighter flex items-center flex-col space-y-3 sm:flex-row sm:space-y-0'>
            <span>{dateRange}</span>
            <span className='ml-2 px-2 py-1 bg-primary text-fourth rounded-full'>
              {duration}
            </span>
          </div>
          {desc}
        </div>
        <ShrinkBorder isHover={isHover} />
      </div>
    </div>
  );
};