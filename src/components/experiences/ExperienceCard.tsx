'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ShrinkBorder } from '../general/ShrinkBorder';
import { THEME } from '@/utils/enums';
import { useAppSelector } from '@/utils/hooks';

interface IExperienceCard {
  name: string;
  image: string;
  position: string;
  time: string;
  desc: JSX.Element;
  className: string;
  duration: number;
  companyUrl: string;
}

export const ExperienceCard = ({ name, image, position, time, desc, className, duration, companyUrl }: IExperienceCard) => {
  const [isHover, setIsHover] = useState(false);
  const isDarkTheme = useAppSelector(x => x.theme.value === THEME.DARK);

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
            <span>{time}</span>
            <span className='ml-2 px-2 py-1 bg-primary text-fourth rounded-full'>
              {`${duration} ${duration === 1 ? 'month' : 'months'}`}
            </span>
          </div>
          {desc}
        </div>
        <ShrinkBorder isHover={isHover} />
      </div>
    </div>
  );
};