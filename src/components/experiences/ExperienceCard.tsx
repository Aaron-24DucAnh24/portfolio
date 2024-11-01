'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ShrinkBorder } from '../general/ShrinkBorder';
import { THEME } from '@/utils/enums';
import { useAppSelector } from '@/utils/hooks';
import { formatDateRange, calculateDuration } from '@/utils/dateUtils';
import { usePalette } from 'color-thief-react';

interface IExperienceCard {
  name: string;
  image: string;
  position: string;
  from: Date;
  to: Date | null;
  desc: JSX.Element;
  companyUrl: string;
}

export const ExperienceCard = (props: IExperienceCard) => {
  const {
    name,
    image,
    position,
    from,
    to,
    desc,
    companyUrl
  } = props;

  const [isHover, setIsHover] = useState(false);
  const isDarkTheme = useAppSelector(x => x.theme.value === THEME.DARK);
  const { data: dominantColor } = usePalette(
    image,
    2,
    'hex',
    { crossOrigin: 'anonymous' }
  );

  const dateRange = formatDateRange(from, to);
  const duration = calculateDuration(from, to);

  return (
    <div className='w-full'>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={
          `flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-2xl border relative
          ${isDarkTheme ? 'bg-fifth border-third' : ''}`
        }>
        <div className='relative w-full text-fourth'>
          <div
            className='absolute top-0 left-0 right-0 bottom-0 brightness-90'
            style={{
              backgroundColor: dominantColor && dominantColor[0] || 'transparent'
            }} />
          <div
            className='relative w-full h-24 flex justify-center items-center'
            onClick={e => e.stopPropagation()}>
            <Link
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className='absolute -bottom-10 hover:animate-floating'>
              <Image
                className='object-cover rounded-full shadow-xl'
                src={image}
                alt={image}
                width={72}
                height={72} />
            </Link>
            <Link
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer">
              {name}
            </Link>
          </div>
        </div>
        <div className='mt-12 flex flex-col items-center px-8 space-y-2 text-justify'>
          <div className='text-lg font-medium'>
            {position}
          </div>
          <div className='italic font-light text-sm tracking-tighter flex items-center flex-col space-y-3 sm:flex-row sm:space-y-0'>
            <span>{dateRange}</span>
            <span className='ml-2 px-2 py-1 bg-primary text-fourth rounded-full'>
              {duration}
            </span>
          </div>
        </div>
        <div className='mx-4 my-4 text-justify'>
          {desc}
        </div>
        <ShrinkBorder isHover={isHover} />
      </div>
    </div >
  );
};