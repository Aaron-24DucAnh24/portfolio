import { STATIC_URLS } from '@/utils/constants';
import Image from 'next/image';

export const Logo = () => {
  return (
    <a href="/" className="!font-special text-2xl font-bold h-full flex items-center relative justify-self-start">
      <Image
        src={STATIC_URLS.LOGO}
        alt={'22-logo'}
        width={60}
        height={40}
        className="-mr-1"
      />
      <div>imducanh</div>
    </a>
  );
};