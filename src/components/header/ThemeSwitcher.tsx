import { useStores } from '@/store';
import { MODE, STORAGE_KEY } from '@/utils/constants';
import { THEME } from '@/utils/enums';
import { useRunOnce } from '@/utils/hooks';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import {
  MdOutlineDarkMode as DarkIcon,
  MdOutlineLightMode as LightIcon,
  MdOutlineDesktopMac as SystemIcon,
} from 'react-icons/md';
import { SmoothUl } from '../general/SmoothUl';

export const ThemeSwitcher = observer(() => {
  const { generalStore } = useStores();
  const [showCover, setShowCover] = useState(false);
  const [coverHidden, setCoverHidden] = useState(true);
  const [mode, setMode] = useState(generalStore.mode);

  // HANDLERS
  const handleSysemTheme = (e: MediaQueryListEvent) => {
    e.matches && generalStore.mode === MODE.SYSTEM && generalStore.setTheme(THEME.DARK);
    !e.matches && generalStore.mode === MODE.SYSTEM && generalStore.setTheme(THEME.LIGHT);
  };

  const handleOnClickOption = (mode: string) => {
    setMode(mode);
    setShowCover(true);
  };

  const handleOnAnimatedEnd = () => {
    if (coverHidden) {
      generalStore.setSystemMode(mode);
      setCoverHidden(false);
    }
    else {
      setShowCover(false);
      setCoverHidden(true);
    }
  };

  // EFFECTS
  // Preseting mode
  useRunOnce(() => {
    const mode = localStorage.getItem(STORAGE_KEY.MODE);
    if (!mode) localStorage.setItem(STORAGE_KEY.MODE, generalStore.mode);
    else generalStore.setSystemMode(mode);
  });

  // Preseting body bg
  useEffect(() => {
    if (generalStore.theme === THEME.LIGHT) {
      document.body.classList.add('bg-white');
      document.body.classList.remove('bg-secondary');
    }
    else {
      document.body.classList.remove('bg-white');
      document.body.classList.add('bg-secondary');
    }
  }, [generalStore.theme]);

  // Handling change mode
  useEffect(() => {
    switch (generalStore.mode) {
      case MODE.DARK:
        generalStore.setTheme(THEME.DARK);
        localStorage.setItem(STORAGE_KEY.MODE, MODE.DARK);
        break;

      case MODE.LIGHT:
        generalStore.setTheme(THEME.LIGHT);
        localStorage.setItem(STORAGE_KEY.MODE, MODE.LIGHT);
        break;

      default:
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          generalStore.setTheme(THEME.DARK);
        }
        else {
          generalStore.setTheme(THEME.LIGHT);
        }
        window
          .matchMedia('(prefers-color-scheme: dark)')
          .addEventListener('change', handleSysemTheme);
        localStorage.setItem(STORAGE_KEY.MODE, MODE.SYSTEM);
        break;
    }

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handleSysemTheme);
    };
  }, [generalStore.mode]);

  return (
    <div className={'h-full ml-2 md:ml-8 flex items-center relative'}>
      <SmoothUl
        className={`flex flex-col justify-center absolute top-14 right-0 border shadow rounded-2xl p-2 cursor-pointer
          ${generalStore.theme === THEME.DARK ? 'bg-secondary border-third' : 'bg-white border-fourth'}
        `}
        button={
          <div className='h-fit hover:bg-fourth cursor-pointer p-2 rounded-2xl'>
            {generalStore.theme === THEME.DARK && <DarkIcon color='#e60022' size={30} />}
            {generalStore.theme === THEME.LIGHT && <LightIcon color='#e60022' size={30} />}
          </div>
        }
      >
        <li
          className='p-2 w-40 rounded-2xl hover:bg-fourth hover:text-secondary flex items-center'
          onClick={() => handleOnClickOption(MODE.SYSTEM)}
        >
          <SystemIcon color='#e60022' size={20} className='mr-2' />
          {MODE.SYSTEM}
          {generalStore.mode === MODE.SYSTEM && <FaCheck className='ml-auto' color='#e60022' />}
        </li>
        <li
          className='p-2 w-40 rounded-2xl hover:bg-fourth hover:text-secondary flex items-center'
          onClick={() => handleOnClickOption(MODE.LIGHT)}
        >
          <LightIcon color='#e60022' size={20} className='mr-2' />
          {MODE.LIGHT}
          {generalStore.mode === MODE.LIGHT && <FaCheck className='ml-auto' color='#e60022' />}
        </li>
        <li
          className='p-2 w-40 rounded-2xl hover:bg-fourth hover:text-secondary flex items-center'
          onClick={() => handleOnClickOption(MODE.DARK)}
        >
          <DarkIcon color='#e60022' size={20} className='mr-2' />
          {MODE.DARK}
          {generalStore.mode === MODE.DARK && <FaCheck className='ml-auto' color='#e60022' />}
        </li>
      </SmoothUl>
      {
        showCover && <div
          onAnimationEnd={handleOnAnimatedEnd}
          className={`
            fixed rounded-3xl rounded-r-none bg-primary brightness-95
            ${coverHidden ? 'animate-cover-out' : 'animate-cover-in'}
          `}
        />
      }
    </div>
  );
});