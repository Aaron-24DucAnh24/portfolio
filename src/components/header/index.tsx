'use client';

import { Logo } from '../general/Logo';
import { MobileNav } from './MobileNav';
import { Nav } from './Nav';
import { ThemeSwitcher } from './ThemeSwitcher';
import { THEME } from '@/utils/enums';
import { StateProvider } from '../general/StateProvider';
import { useAppSelector } from '@/utils/hooks';

export const Header = StateProvider(() => {
  const isDarkTheme = useAppSelector(x => x.theme.value === THEME.DARK);

  return (
    <header className='h-16 fixed top-0 left-0 right-0 shadow z-50'>
      <div className={`w-screen-xl mx-auto px-4 flex h-full bg-opacity-90 border-b
        ${isDarkTheme ? 'bg-secondary text-fourth border-third' : 'bg-white border-fourth'}
      `}>
        <Logo />
        <Nav />
        <MobileNav />
        <ThemeSwitcher />
      </div>
    </header>
  );
});