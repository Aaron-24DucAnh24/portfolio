import { AiOutlineProject } from 'react-icons/ai';
import { STATIC_URLS } from '@/utils/constants';
import { PersonalProjectCard } from './PersonalProjectCard';
import { PetopiaDesc } from './PetopiaDesc';

export const ProjectsPage = () => {
  return (
    <div className={'max-w-5xl px-4 py-4 sm:py-12 mx-auto flex flex-col'}>
      <h1 className='pb-4 sm:pb-12 text-xl sm:text-2xl font-medium flex items-center sm:tracking-tighter'>
        Personal Projects
        <AiOutlineProject color='#e60022' size={40} className='pl-2' />
      </h1>
      <div className='space-y-4 mb-4'>
        <PersonalProjectCard
          name={'Petopia - An online pet adoption platform (2024)'}
          type={'University Capstone project'}
          techs={'NEXTJS, TAILWINDCSS, .NET CORE, MSSQL, REDIS, MOBX, CYPRESS'}
          source={'https://github.com/Aaron-24DucAnh24/Petopia-Backend'}
          image={STATIC_URLS.PETOPIA}
          desc={<PetopiaDesc />}
        />
        <PersonalProjectCard
          name={'Duc-anh Portfolio (2024)'}
          type={'Personal page'}
          techs={'NEXTJS, TAILWINDCSS, REDUX'}
          source={'https://github.com/Aaron-24DucAnh24/Portfolio'}
          image={STATIC_URLS.LOGO}
        />
      </div>
    </div>
  );
};