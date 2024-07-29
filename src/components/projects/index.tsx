'use client';

import { AiOutlineProject } from 'react-icons/ai';
import { STATIC_URLS } from '@/utils/constants';
import { observer } from 'mobx-react-lite';
import { PersonalProjectCard } from './PersonalProjectCard';
import { PetopiaDesc } from './PetopiaDesc';

export const ProjectsPage = observer(() => {
  return (
    <div className={'max-w-5xl px-4 py-4 sm:py-12 mx-auto flex flex-col'}>
      <h1 className='pb-4 sm:pb-12 text-xl sm:text-2xl font-medium flex items-center sm:tracking-tighter'>
        Personal Projects
        <AiOutlineProject color='#e60022' size={40} className='pl-2' />
      </h1>
      <div>
        <PersonalProjectCard
          name={'Petopia - An online pet adoption platform'}
          type={'University Capstone project'}
          techs={'NEXTJS, TAILWIND CSS, .NET CORE, EF CORE, MSSQL, REDIS, MOBX, CYPRESS'}
          source={'https://github.com/Aaron-24DucAnh24/Petopia-Backend'}
          image={STATIC_URLS.PETOPIA}
          desc={<PetopiaDesc />}
        />
      </div>
    </div>
  );
});