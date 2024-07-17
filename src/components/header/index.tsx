'use client';
import { Logo } from '../general/Logo';
import { MobileNav } from './MobileNav';
import { Nav } from './Nav';
import { ThemeSwitcher } from './ThemeSwitcher';
// import { ThemeSwitcher } from './ThemeSwitcher';

export const Header = () => {
  return (
    <header className="h-16 fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow z-50">
      <div className="w-screen-xl mx-auto px-4 flex h-full">
        <Logo />
        <Nav />
        <MobileNav />
        <ThemeSwitcher />
      </div>
    </header>
  );
};