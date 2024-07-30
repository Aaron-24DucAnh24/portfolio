import { MODE, STORAGE_KEY } from '@/utils/constants';
import { THEME } from '@/utils/enums';
import { useAppDispatch, useAppSelector, useRunOnce } from '@/utils/hooks';
import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import {
  MdOutlineDarkMode as DarkIcon,
  MdOutlineLightMode as LightIcon,
  MdOutlineDesktopMac as SystemIcon,
} from 'react-icons/md';
import { SmoothUl } from '../general/SmoothUl';
import { setTheme } from '@/store/themeSlide';
import { setMode } from '@/store/modeSlide';

export const ThemeSwitcher = () => {
  const theme = useAppSelector(x => x.theme);
  const mode = useAppSelector(x => x.mode);
  const dispatch = useAppDispatch();


  const [showCover, setShowCover] = useState(false);
  const [coverHidden, setCoverHidden] = useState(true);
  const [currentMode, setCurrentMode] = useState(mode.value);

  // HANDLERS
  const handleSysemTheme = (e: MediaQueryListEvent) => {
    e.matches && mode.value === MODE.SYSTEM && dispatch(setTheme(THEME.DARK));
    !e.matches && mode.value === MODE.SYSTEM && dispatch(setTheme(THEME.LIGHT));
  };

  const handleOnClickOption = (currentMode: string) => {
    setCurrentMode(currentMode);
    setShowCover(true);
  };

  const handleOnAnimatedEnd = () => {
    if (coverHidden) {
      dispatch(setMode(currentMode));
      setCoverHidden(false);
    }
    else {
      setShowCover(false);
      setCoverHidden(true);
    }
  };

  // EFFECTS
  // Preseting currentMode
  useRunOnce(() => {
    const currentMode = localStorage.getItem(STORAGE_KEY.MODE);
    if (!currentMode) localStorage.setItem(STORAGE_KEY.MODE, mode.value);
    dispatch(setMode(currentMode));
  });

  // Preseting body bg
  useEffect(() => {
    if (theme.value === THEME.LIGHT) {
      document.body.classList.add('bg-white');
      document.body.classList.remove('bg-secondary');
    }
    else {
      document.body.classList.remove('bg-white');
      document.body.classList.add('bg-secondary');
    }
  }, [theme.value]);

  // Handling change currentMode
  useEffect(() => {
    switch (mode.value) {
      case MODE.DARK:
        dispatch(setTheme(THEME.DARK));
        localStorage.setItem(STORAGE_KEY.MODE, MODE.DARK);
        break;

      case MODE.LIGHT:
        dispatch(setTheme(THEME.LIGHT));
        localStorage.setItem(STORAGE_KEY.MODE, MODE.LIGHT);
        break;

      default:
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          dispatch(setTheme(THEME.DARK));
        }
        else {
          dispatch(setTheme(THEME.LIGHT));
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
  }, [mode.value]);

  return (
    <div className={'h-full ml-2 md:ml-8 flex items-center relative'}>
      <SmoothUl
        className={`flex flex-col justify-center absolute top-14 right-0 border shadow rounded-2xl p-2 cursor-pointer
          ${theme.value === THEME.DARK ? 'bg-secondary border-third' : 'bg-white border-fourth'}
        `}
        button={
          <div className='h-fit hover:bg-fourth cursor-pointer p-2 rounded-2xl'>
            {theme.value === THEME.DARK && <DarkIcon color='#e60022' size={30} />}
            {theme.value === THEME.LIGHT && <LightIcon color='#e60022' size={30} />}
          </div>
        }
      >
        <li
          className='p-2 w-40 rounded-2xl hover:bg-fourth hover:text-secondary flex items-center'
          onClick={() => handleOnClickOption(MODE.SYSTEM)}
        >
          <SystemIcon color='#e60022' size={20} className='mr-2' />
          {MODE.SYSTEM}
          {mode.value === MODE.SYSTEM && <FaCheck className='ml-auto' color='#e60022' />}
        </li>
        <li
          className='p-2 w-40 rounded-2xl hover:bg-fourth hover:text-secondary flex items-center'
          onClick={() => handleOnClickOption(MODE.LIGHT)}
        >
          <LightIcon color='#e60022' size={20} className='mr-2' />
          {MODE.LIGHT}
          {mode.value === MODE.LIGHT && <FaCheck className='ml-auto' color='#e60022' />}
        </li>
        <li
          className='p-2 w-40 rounded-2xl hover:bg-fourth hover:text-secondary flex items-center'
          onClick={() => handleOnClickOption(MODE.DARK)}
        >
          <DarkIcon color='#e60022' size={20} className='mr-2' />
          {MODE.DARK}
          {mode.value === MODE.DARK && <FaCheck className='ml-auto' color='#e60022' />}
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
};