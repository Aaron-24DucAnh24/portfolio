'use client';

import { STATIC_URLS } from '@/utils/constants';
import { EducationCard } from './EducationCard';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { THEME } from '@/utils/enums';
import { useStores } from '@/store';
import { observer } from 'mobx-react-lite';

export const EducationPage = observer(() => {
  const { generalStore } = useStores();

  return (
    <div className={`max-w-5xl px-4 py-4 sm:py-12 mx-auto flex flex-col
      ${generalStore.theme === THEME.DARK && 'text-fourth'}
    `}>
      <h1 className='pb-2 sm:pb-12 text-xl sm:text-2xl font-medium flex items-center sm:tracking-tighter'>
        Education and Certificates
        <HiOutlineBookOpen color='#e60022' size={40} className='pl-2' />
      </h1>
      <div>
        <EducationCard
          image={STATIC_URLS.HCMUT}
          orgName={'hcm university of technology'}
          degreeName={'bachelor of computer science'}
          score={'GPA: 3.1'}
          from={'2020'}
          to={'2024'}
        />
        <EducationCard
          image={STATIC_URLS.IDP}
          orgName={'IDP education Vietnam'}
          degreeName={'IELTS'}
          score={'Band 6.0'}
          from={'2022'}
          to={'2024'}
        />
      </div>
    </div>
  );
});