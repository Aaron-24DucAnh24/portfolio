import { STATIC_URLS } from '@/utils/constants';
import { EducationCard } from './EducationCard';
import { HiOutlineBookOpen } from 'react-icons/hi';

export const EducationPage = () => {
  return (
    <div className='w-full p-4 flex flex-col'>
      <h1 className='py-8 sm:py-12 text-xl sm:text-3xl font-medium flex items-center sm:tracking-tighter'>
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
};