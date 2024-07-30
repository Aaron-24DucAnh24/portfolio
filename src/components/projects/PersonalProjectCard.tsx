'use client';

import Image from 'next/image';
import { Button } from '../general/Button';
import { FaAngleDown, FaGithub, FaAngleUp } from 'react-icons/fa';
import { useState } from 'react';
import { ShrinkBorder } from '../general/ShrinkBorder';
import { THEME } from '@/utils/enums';
import { useAppSelector } from '@/utils/hooks';

interface IPersonalProjectCard {
  name: string,
  type: string,
  techs: string,
  source: string,
  image: string,
  desc?: JSX.Element,
}

export const PersonalProjectCard = (props: IPersonalProjectCard) => {
  const { name, type, techs, image, source, desc } = props;
  const [hideDesc, setHideDesc] = useState<boolean>(true);
  const [isHover, setIsHover] = useState<boolean>(false);
  const theme = useAppSelector(x => x.theme);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`shadow-md hover:shadow-2xl rounded-lg overflow-hidden border duration-1000 relative
        ${theme.value === THEME.DARK && 'border-third bg-fifth'}
      `}
    >
      <div className={'w-full flex flex-col items-center sm:flex-row sm:items-start'}>
        <div className='relative rounded-lg sm:rounded-none m-4 mb-0 sm:m-0 w-72 h-40 sm:w-80 sm:h-56 md:w-96 md:h-60 overflow-hidden shadow-lg'>
          <Image
            className='object-cover'
            src={image}
            alt={image}
            fill
          />
        </div>

        <div className='flex flex-col items-center text-center sm:text-start sm:items-start p-4 space-y-2 flex-1'>
          <div className='text-base font-bold'>
            {name}
          </div>
          <div className='text-base uppercase font-medium'>
            {type}
          </div>
          <div className='text-third text-xs sm:text-sm italic font-semibold'>
            {techs}
          </div>
          <div className='space-x-2 flex'>
            {
              desc && <Button
                action={() => setHideDesc(pre => !pre)}
                icon={!hideDesc ? <FaAngleUp /> : <FaAngleDown />}
              />
            }
            <Button
              name={'Source'}
              icon={<FaGithub size={22} />}
              action={() => window.open(source)}
              primary
            />
          </div>
        </div>
      </div>
      {!hideDesc && desc}
      <ShrinkBorder isHover={isHover} />
    </div>
  );
};