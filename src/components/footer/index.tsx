'use client';

import { FooterLinks } from './FooterLinks';
import { Logo } from '../general/Logo';
import { SocialLinks } from './SocialLinks';
import { StateProvider } from '../general/StateProvider';
import { THEME } from '@/utils/enums';
import { useAppSelector } from '@/utils/hooks';
import { FaHeart } from 'react-icons/fa6';

export const Footer = StateProvider(() => {
  const isDarkTheme = useAppSelector(x => x.theme.value === THEME.DARK);

  return (
    <footer className={
      `shadow-2xl p-4 border-t
      ${isDarkTheme ? 'bg-secondary text-fourth border-third' : 'border-fourth'}`
    }>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="md:flex md:items-center md:justify-between ">
          <FooterLinks />
          <SocialLinks />
        </div>

        <hr className="my-6 border-third sm:mx-auto lg:my-8" />

        <div className="flex justify-center">
          <Logo />
        </div>

        <div className="flex items-center justify-center text-sm  mt-4">
          {'Make with'}
          <FaHeart color='#e60022' className='mx-2 animate-floating' />
          {'by Duc Anh Bui.'}
        </div>
      </div>
    </footer>
  );
});
