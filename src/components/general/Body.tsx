'use client';

import { THEME } from '@/utils/enums';
import { ReactNode } from 'react';
import { StateProvider } from './StateProvider';
import { useAppSelector } from '@/utils/hooks';

export const Body = StateProvider((({ children }: { children: ReactNode }) => {
  const { value } = useAppSelector(x => x.theme);

  return (
    <div className={`animate-slide-in ${value === THEME.DARK && 'text-fourth'}`}>
      {children}
    </div>
  );
}));