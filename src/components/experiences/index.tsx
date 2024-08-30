import { AiOutlineProject } from 'react-icons/ai';
import { ExperienceCard } from './ExperienceCard';
import { NPInternDesc } from './NPInternDesc';
import { NPFullstackDesc } from './NPFullstackDesc';
import experiencesData from '@/data/experienceData.json';

type DescComponentKey = keyof typeof descComponents;

const descComponents = {
  NPFullstackDesc,
  NPInternDesc,
};

export const ExperiencePage = () => {
  return (
    <div className={'max-w-5xl px-4 py-4 sm:py-12 mx-auto flex flex-col'}>
      <h1 className='pb-4 sm:pb-12 text-xl sm:text-2xl font-medium flex items-center sm:tracking-tighter'>
        Working Experiences
        <AiOutlineProject color='#e60022' size={40} className='pl-2' />
      </h1>
      <div className='flex flex-wrap justify-between items-start -mx-4 sm:-mb-8 space-y-4 md:space-y-0'>
        {experiencesData.map((experience, index) => (
          <ExperienceCard
            key={index}
            name={experience.name}
            image={experience.image}
            position={experience.position}
            from={new Date(experience.from)}
            to={experience.to ? new Date(experience.to) : null}
            className={experience.className}
            desc={descComponents[experience.descComponent as DescComponentKey]()}
            companyUrl={experience.companyUrl}
          />
        ))}
      </div>
    </div>
  );
};