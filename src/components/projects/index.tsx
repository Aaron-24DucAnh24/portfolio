import { AiOutlineProject } from 'react-icons/ai';
import { STATIC_URLS } from '@/utils/constants';
import { PersonalProjectCard } from './PersonalProjectCard';
import { PetopiaDesc } from './PetopiaDesc';
import projectsData from '@/data/projectData.json';

const descComponents = {
  PetopiaDesc: <PetopiaDesc />,
};

type DescComponentKey = keyof typeof descComponents;

export const ProjectsPage = () => {
  return (
    <div className={'max-w-4xl px-4 py-4 sm:py-6 mx-auto flex flex-col'}>
      <h1 className='pb-4 sm:pb-6 text-xl sm:text-2xl font-medium flex items-center sm:tracking-tighter'>
        Personal Projects
        <AiOutlineProject color='#e60022' size={40} className='pl-2' />
      </h1>
      <div className='space-y-4'>
        {projectsData.map((project, index) => (
          <PersonalProjectCard
            key={index}
            name={project.name}
            type={project.type}
            techs={project.techs}
            source={project.source}
            image={STATIC_URLS[project.image as keyof typeof STATIC_URLS]}
            desc={project.descComponent ? descComponents[project.descComponent as DescComponentKey] : undefined}
          />
        ))}
      </div>
    </div>
  );
};