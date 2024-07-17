'use client';

import { useState } from 'react';
import { ShrinkBorder } from '../general/ShrinkBorder';
import Image from 'next/image';
import { THEME } from '@/utils/enums';
import { useStores } from '@/store';
import { observer } from 'mobx-react-lite';

interface ISkillsCard {
  name: string,
  image: string,
  items: string[],
}

export const SkillsCard = observer((props: ISkillsCard) => {
  const { name, image, items } = props;
  const [isHover, setIsHover] = useState<boolean>(false);
  const { generalStore } = useStores();

  return (
    <div className='w-full md:w-1/2 px-4 sm:pb-8'>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={`rounded-lg overflow-hidden shadow-md hover:shadow-2xl border
          ${generalStore.theme === THEME.DARK ? 'text-fourth border-third bg-fifth' : 'border-fourth'}
        `}
      >
        <div className={'flex flex-col p-2 items-center space-y-2'}>
          <div className='relative h-24 w-24'>
            <Image
              fill
              src={image}
              alt={image}
              className='object-contain'
            />
          </div>
          <div className='text-xl font-semibold'>
            {name}
          </div>
          <div className='flex flex-wrap justify-center items-start -mx-2 space-x-2'>
            {items.map((item, i) =>
              <div
                key={i}
                className='relative h-14 w-14 rounded-full overflow-hidden mb-2 hover:animate-floating'
              >
                <Image
                  fill
                  src={item}
                  alt={item}
                  className='object-cover'
                />
              </div>
            )}
          </div>
        </div>
        <ShrinkBorder isHover={isHover} />
      </div>
    </div>
  );
});