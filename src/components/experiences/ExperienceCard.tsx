'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ShrinkBorder } from '../general/ShrinkBorder';
import { THEME } from '@/utils/enums';
import { useAppSelector } from '@/utils/hooks';
import { formatDateRange, calculateDuration } from '@/utils/dateUtils';
import { usePalette } from 'color-thief-react';
import { DescPopup } from './DescPopup';

interface IExperienceCard {
  name: string;
  image: string;
  position: string;
  from: Date;
  to: Date | null;
  desc: JSX.Element;
  companyUrl: string;
}

export const ExperienceCard = ({ name, image, position, from, to, desc, companyUrl }: IExperienceCard) => {
  const [isHover, setIsHover] = useState(false);
  const [isDescVisible, setIsDescVisible] = useState(false);
  const isDarkTheme = useAppSelector(x => x.theme.value === THEME.DARK);
  const { data: dominantColor } = usePalette(image, 2, 'hex', { crossOrigin: 'anonymous' });

  const dateRange = formatDateRange(from, to);
  const duration = calculateDuration(from, to);

  useEffect(() => {
    !isDescVisible && setIsHover(false);
  }, [isDescVisible]);

  return (
    <div className='w-full md:w-1/2 px-4 sm:pb-8'>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => setIsDescVisible(true)}
        className={`flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-2xl border relative cursor-pointer
          ${isDarkTheme ? 'bg-fifth border-third' : ''}
        `}
      >
        <div className='relative w-full h-36 flex justify-center items-center text-fourth font-medium'>
          <div
            className='absolute top-0 left-0 right-0 bottom-0 brightness-90'
            style={{ backgroundColor: dominantColor && dominantColor[0] || 'transparent' }}
          ></div>
          <p className='absolute'>{name}</p>
          <div className='absolute h-24 w-24 rounded-full overflow-hidden -bottom-12 shadow-xl hover:animate-floating'
            onClick={e => e.stopPropagation()}
          >
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

        <div className='mt-8 flex flex-col items-center p-8 space-y-2 text-justify'>
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
        <DescPopup show={isDescVisible} setShow={setIsDescVisible} desc={desc} />
        <ShrinkBorder isHover={isHover} />
      </div>
    </div >
  );
};