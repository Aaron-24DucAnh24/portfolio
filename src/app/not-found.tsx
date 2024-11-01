import { STATIC_URLS } from '@/utils/constants';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Aaron Portfolio',
  description: 'Not found',
};

export default function Page() {
  return (
    <main className="h-fit-screen mt-16 flex justify-center items-center flex-col">
      <Image
        src={STATIC_URLS.ERROR_404}
        alt={'404'}
        width={300}
        height={150} />
      <div className='mt-10 text-lg'>
        {'The page you\'re looking for doesn\'t exist.'}
      </div>
    </main>
  );
}
