import { STATIC_URLS } from '@/utils/constants';
import { Button } from '../general/Button';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

export const handleContact = () => {
  window.scroll({
    top: window.screen.height,
    behavior: 'smooth',
  });
};

export const HomePage = () => {
  return (
    <div className={'h-full w-full flex flex-col sm:flex-wrap sm:flex-row'}>
      <div
        className='h-1/2 sm:h-full w-full sm:w-1/2 flex flex-col justify-center space-y-8 p-4'>
        <div className='text-xl md:text-3xl font-semibold flex items-center sm:tracking-tighter'>
          {'Hi there, I\'m Duc-anh Bui'}
          <Image
            className='ml-2 md:ml-3 animate-shake'
            src={STATIC_URLS.WAVING_HAND}
            alt={STATIC_URLS.WAVING_HAND}
            height={36}
            width={36}
          />
        </div>
        <div className='text-base md:text-xl text-third italic'>
          {'I\'m into '}
          <TypeAnimation
            sequence={[
              'Frontend development',
              1000,
              'Backend development',
              1000,
              'Fullstack development',
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            style={{
              fontSize: '1.25rem',
              display: 'inline-block',
              color: '#e60022',
              fontWeight: 600,
            }
            }
          />
        </div>
        <div className='text:md sm:text-lg text-justify'>
          {'I am a Bachelor of Computer Science and a passionate web developer specializing in .NET and ReactJS. With 6 months of experience, I\'m excited for an entry-level position where I can grow my skills and contribute to a company\'s success.'}
        </div>
        <div className='flex space-x-2'>
          <Button
            name={'My CV'}
            action={() => window.open(STATIC_URLS.CV)}
            primary
          />
          <Button name={'Contact me'} action={handleContact} />
        </div>
      </div>

      <div className='sm:bg-primary h-1/2 sm:h-full w-full sm:w-1/2 p-4 rounded-l-2xl'>
        <div className='h-full sm:h-full flex items-center justify-center relative'>
          <div className='h-72 w-72 rounded-full overflow-hidden absolute animate-flip-front flip-card'>
            <Image
              src={STATIC_URLS.DUCANH}
              alt={STATIC_URLS.DUCANH}
              className='object-cover'
              fill
            />
          </div>
          <div className='h-72 w-72 rounded-full overflow-hidden absolute animate-flip-back flip-card'>
            <Image
              src={STATIC_URLS[22]}
              alt={STATIC_URLS[22]}
              className='object-cover'
              fill
            />
          </div>
          <div className='hidden sm:block h-24 w-24 absolute top-10 left-10 animate-bound-y-reverse'>
            <Image
              src={STATIC_URLS.CLOUD}
              alt={STATIC_URLS.CLOUD}
              className='object-cover'
              fill
            />
          </div>
          <div className='hidden sm:block h-12 w-12 absolute bottom-10 right-20 animate-bound-y'>
            <Image
              src={STATIC_URLS.CLOUD}
              alt={STATIC_URLS.CLOUD}
              className='object-cover'
              fill
            />
          </div>
          <div className='hidden sm:block h-16 w-16 absolute top-32 right-32 animate-bound-y'>
            <Image
              src={STATIC_URLS.CLOUD}
              alt={STATIC_URLS.CLOUD}
              className='object-cover'
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};