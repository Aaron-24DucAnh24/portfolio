import { AiOutlineProject } from 'react-icons/ai';
import { ExperienceCard } from './ExperienceCard';
import { NPInternDesc } from './NPInternDesc';
import { NPFullstackDesc } from './NPFullstackDesc';
import experiencesData from '@/data/experienceData.json';
import { W2Desc } from './W2Desc';

type DescComponentKey = keyof typeof descComponents;

const descComponents = {
  NPFullstackDesc: <NPFullstackDesc />,
  NPInternDesc: <NPInternDesc />,
  W2Desc: <W2Desc />
};

export const ExperiencePage = () => {
  return (
    <div className={'max-w-4xl px-4 py-4 sm:py-6 mx-auto flex flex-col'}>
      <h1 className='pb-4 sm:pb-6 text-xl sm:text-2xl font-medium flex items-center sm:tracking-tighter'>
        {'Working Experiences'}
        <AiOutlineProject color='#e60022' size={40} className='pl-2' />
      </h1>
      <div className='flex flex-col space-y-4'>
        {
          experiencesData.map((experience, index) => (
            <ExperienceCard
              key={index}
              name={experience.name}
              image={experience.image}
              position={experience.position}
              from={new Date(experience.from)}
              to={experience.to ? new Date(experience.to) : null}
              desc={descComponents[experience.descComponent as DescComponentKey]}
              companyUrl={experience.companyUrl} />
          ))
        }
      </div>
    </div>
  );
};