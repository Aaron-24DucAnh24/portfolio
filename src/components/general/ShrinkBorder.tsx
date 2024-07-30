'use client';

import { THEME } from '@/utils/enums';
import { useAppSelector } from '@/utils/hooks';
import { useEffect, useState } from 'react';

export const ShrinkBorder = ({ isHover }: { isHover: boolean }) => {
  const theme = useAppSelector(x => x.theme);
  const [className, setClassName] = useState('');

  useEffect(() => {
    theme.value === THEME.DARK && setClassName('border-third w-3/4');
    theme.value === THEME.LIGHT && setClassName('border-fourth w-3/4');
  }, [theme.value]);

  return (
    <hr className={`border-2 duration-1000 bottom-0 absolute
      ${isHover ? 'border-primary w-full' : className}`}
    />
  );
};