'use client';

import Image from 'next/image';
import { Button } from '../general/Button';
import { FaAngleDown, FaGithub, FaAngleUp } from 'react-icons/fa';
import { useState } from 'react';

interface IPersonalProjectCard {
  name: string,
  type: string,
  techs: string,
  source: string,
  image: string,
  desc: JSX.Element,
}

export const PersonalProjectCard = (props: IPersonalProjectCard) => {
  const { name, type, techs, image, source, desc } = props;
  const [hideDesc, setHideDesc] = useState<boolean>(true);

  return (
    <div className={'shadow-md hover:shadow-2xl rounded-lg h-fit'
    }>
      <div className="h-fit w-full flex flex-col sm:flex-row" >
        <div className='relative m-4 sm:m-0 w-72 h-40 sm:w-80 sm:h-56 md:w-96 md:h-60 rounded-lg overflow-hidden shadow-lg'>
          <Image
            className='object-cover'
            src={image}
            alt={image}
            fill
          />
        </div>

        <div className='flex flex-col p-4 space-y-1 sm:space-y-2 flex-1'>
          <div className='text-base font-semibold'>
            {name}
          </div>
          <div className='text-base'>
            {type}
          </div>
          <div className='text-third text-xs sm:text-sm italic font-semibold'>
            {techs}
          </div>
          <div className='pt-4 space-x-2 flex'>
            <Button
              action={() => setHideDesc(pre => !pre)}
              icon={!hideDesc ? <FaAngleUp /> : <FaAngleDown />}
            />
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
    </div>
  );
};