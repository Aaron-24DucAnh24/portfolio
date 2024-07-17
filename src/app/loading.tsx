import { STATIC_URLS } from '@/utils/constants';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Aaron Portfolio',
  description: 'Loading',
};

export default function Page() {
  return (
    <main className="h-fit-screen mt-16 flex justify-center items-center flex-col animate-floating">
      <Image
        src={STATIC_URLS.LOGO}
        alt={STATIC_URLS.LOGO}
        width={300}
        height={150}
      />
    </main>
  );
}
