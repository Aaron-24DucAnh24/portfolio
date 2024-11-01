'use client';

import Image from 'next/image';
import { Button } from '../general/Button';
import { FaAngleDown, FaGithub, FaAngleUp } from 'react-icons/fa';
import { useState } from 'react';
import { ShrinkBorder } from '../general/ShrinkBorder';
import { THEME } from '@/utils/enums';
import { useAppSelector } from '@/utils/hooks';

interface IPersonalProjectCard {
  name: string;
  type: string;
  techs: string;
  source: string;
  image: string;
  desc?: JSX.Element;
}

export const PersonalProjectCard = (props: IPersonalProjectCard) => {
  const {
    name,
    type,
    techs,
    image,
    source,
    desc
  } = props;

  const [hideDesc, setHideDesc] = useState(true);
  const [isHover, setIsHover] = useState(false);
  const isDarkTheme = useAppSelector(x => x.theme.value === THEME.DARK);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={
        `shadow-md hover:shadow-2xl rounded-lg overflow-hidden border duration-1000 relative 
        ${isDarkTheme ? 'border-third bg-fifth' : ''}`
      }>
      <div className='px-4 py-4'>
        <div className='w-full flex flex-col items-center sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0'>
          <Image className='rounded-full w-32 h-32 object-cover shadow-lg'
            src={image}
            alt={name}
            width={128}
            height={128} />
          <div className='flex flex-col items-center text-center sm:text-start sm:items-start space-y-1 sm:space-y-2 flex-1'>
            <div className='text-base font-bold'>{name}</div>
            <div className='text-base uppercase font-medium'>{type}</div>
            <div className='text-third text-xs sm:text-sm italic font-semibold'>{techs}</div>
            <div className='space-x-2 flex'>
              {
                desc && <Button
                  action={() => setHideDesc(!hideDesc)}
                  icon={hideDesc ? <FaAngleDown /> : <FaAngleUp />} />
              }
              <Button
                name='Source'
                icon={<FaGithub size={22} />}
                action={() => window.open(source)}
                primary />
            </div>
          </div>
        </div>
        {!hideDesc && desc}
      </div>
      <ShrinkBorder isHover={isHover} />
    </div>
  );
};