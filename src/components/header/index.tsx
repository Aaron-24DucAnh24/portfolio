'use client';

import { observer } from 'mobx-react-lite';
import { Logo } from '../general/Logo';
import { MobileNav } from './MobileNav';
import { Nav } from './Nav';
import { ThemeSwitcher } from './ThemeSwitcher';
import { THEME } from '@/utils/enums';
import { useStores } from '@/store';

export const Header = observer(() => {
  const { generalStore } = useStores();
  const { theme } = generalStore;

  return (
    <header className='h-16 fixed top-0 left-0 right-0 shadow z-50'>
      <div className={`w-screen-xl mx-auto px-4 flex h-full bg-opacity-90 border-b
        ${theme === THEME.DARK ? 'bg-secondary text-fourth border-third' : 'bg-white border-fourth'}
      `}>
        <Logo />
        <Nav />
        <MobileNav />
        <ThemeSwitcher />
      </div>
    </header>
  );
});