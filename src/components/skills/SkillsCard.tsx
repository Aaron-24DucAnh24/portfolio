'use client';

import { useState } from 'react';
import { ShrinkBorder } from '../general/ShrinkBorder';
import Image from 'next/image';
import { THEME } from '@/utils/enums';
import { useAppSelector } from '@/utils/hooks';

interface ISkillsCard {
  name: string;
  image: string;
  items: string[];
  techNames: string[];
}

export const SkillsCard = (props: ISkillsCard) => {
  const {
    name,
    image,
    items,
    techNames,
  } = props;

  const [isHover, setIsHover] = useState(false);
  const isDarkTheme = useAppSelector(x => x.theme.value === THEME.DARK);

  return (
    <div className='w-full md:w-1/2 px-4 sm:pb-8'>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={
          `rounded-lg overflow-hidden shadow-md hover:shadow-2xl border relative
          ${isDarkTheme ? 'bg-fifth border-third' : ''}`
        }>
        <div className={'flex flex-col p-2 items-center space-y-2'}>
          <Image
            src={image}
            alt={name}
            width={96}
            height={96}
            className='object-contain' />
          <div className='text-xl font-semibold'>{name}</div>
          <div className='flex flex-wrap justify-center items-start -mx-2 space-x-3'>
            {
              items.map((item, i) => (
                <div
                  key={i}
                  className='flex flex-col justify-center items-center text-sm font-semibold tracking-tighter'>
                  <Image
                    src={item}
                    alt={item}
                    width={56}
                    height={56}
                    className='rounded-full mb-2 hover:animate-floating' />
                  {techNames[i]}
                </div>
              ))}
          </div>
        </div>
        <ShrinkBorder isHover={isHover} />
      </div>
    </div>
  );
};