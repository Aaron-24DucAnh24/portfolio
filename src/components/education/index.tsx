'use client';

import { EducationCard } from './EducationCard';
import { GrCertificate } from 'react-icons/gr';
import { useAppSelector } from '@/utils/hooks';
import { THEME } from '@/utils/enums';
import educationData from '@/data/educationData.json';
import certificationData from '@/data/certificationData.json';

export const EducationPage = () => {
  const { value } = useAppSelector(x => x.theme);

  return (
    <div className={'max-w-4xl px-4 py-4 sm:py-6 mx-auto flex flex-col'}>
      <h1 className='pb-2 sm:pb-6 text-xl sm:text-2xl font-medium flex items-center sm:tracking-tighter'>
        Education and Certificates <GrCertificate color='#e60022' size={40} className='pl-2' />
      </h1>

      <div className='space-y-4'>
        {educationData.map((edu, index) => (
          <EducationCard
            key={index}
            image={edu.image}
            orgName={edu.orgName}
            degreeName={edu.degreeName}
            score={edu.score}
            from={edu.from}
            to={edu.to}
          />
        ))}
      </div>

      <div className={`
        my-4 sm:my-8 border shadow-sm mx-12 
        ${value === THEME.DARK && 'border-third'}`
      } />

      <div className='space-y-4'>
        {certificationData.map((edu, index) => (
          <EducationCard
            key={index}
            image={edu.image}
            orgName={edu.orgName}
            degreeName={edu.degreeName}
            score={edu.score}
            from={edu.from}
            to={edu.to}
          />
        ))}
      </div>
    </div>
  );
};