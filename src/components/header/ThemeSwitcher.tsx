import { useStores } from '@/store';
import { MODE, STORAGE_KEY } from '@/utils/constants';
import { THEME } from '@/utils/enums';
import { useRunOnce } from '@/utils/hooks';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa6';
import {
  MdOutlineDarkMode as DarkIcon,
  MdOutlineLightMode as LightIcon,
  MdOutlineDesktopMac as SystemIcon,
} from 'react-icons/md';
import { SmoothUl } from '../general/SmoothUl';

export const ThemeSwitcher = observer(() => {
  const { generalStore } = useStores();

  // HANDLERS
  const handleSysemTheme = (e: MediaQueryListEvent) => {
    e.matches && generalStore.mode === MODE.SYSTEM && generalStore.setTheme(THEME.DARK);
    !e.matches && generalStore.mode === MODE.SYSTEM && generalStore.setTheme(THEME.LIGHT);
  };

  // EFFECTS
  // Preseting mode
  useRunOnce(() => {
    const mode = localStorage.getItem(STORAGE_KEY.MODE);
    if (!mode) localStorage.setItem(STORAGE_KEY.MODE, generalStore.mode);
    else generalStore.setSystemMode(mode);
  });

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
          localStorage.setItem(STORAGE_KEY.MODE, MODE.LIGHT);
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
    <div className='h-full ml-2 md:ml-8 flex items-center relative'>
      <SmoothUl
        className={'flex flex-col justify-center absolute top-14 right-0 border border-fourth shadow rounded-2xl bg-white p-2 cursor-pointer'}
        button={
          <div className='h-fit hover:bg-fourth cursor-pointer p-2 rounded-2xl'>
            {generalStore.theme === THEME.DARK && <DarkIcon color='#e60022' size={30} />}
            {generalStore.theme === THEME.LIGHT && <LightIcon color='#e60022' size={30} />}
          </div>
        }
      >
        <li
          className='p-2 w-40 rounded-2xl hover:bg-fourth flex items-center'
          onClick={() => generalStore.setSystemMode(MODE.SYSTEM)}
        >
          <SystemIcon color='#e60022' size={20} className='mr-2' />
          {MODE.SYSTEM}
          {generalStore.mode === MODE.SYSTEM && <FaCheck className='ml-auto' color='#e60022' />}
        </li>
        <li
          className='p-2 w-40 rounded-2xl hover:bg-fourth flex items-center'
          onClick={() => generalStore.setSystemMode(MODE.LIGHT)}
        >
          <LightIcon color='#e60022' size={20} className='mr-2' />
          {MODE.LIGHT}
          {generalStore.mode === MODE.LIGHT && <FaCheck className='ml-auto' color='#e60022' />}
        </li>
        <li
          className='p-2 w-40 rounded-2xl hover:bg-fourth flex items-center'
          onClick={() => generalStore.setSystemMode(MODE.DARK)}
        >
          <DarkIcon color='#e60022' size={20} className='mr-2' />
          {MODE.DARK}
          {generalStore.mode === MODE.DARK && <FaCheck className='ml-auto' color='#e60022' />}

        </li>
      </SmoothUl>
    </div>
  );
});