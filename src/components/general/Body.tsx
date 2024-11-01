'use client';

import { CONTROL_KEY, THEME } from '@/utils/enums';
import { ReactNode } from 'react';
import { StateProvider } from './StateProvider';
import { useAppSelector, useCatchKeyPress } from '@/utils/hooks';

export const Body = StateProvider((({ children }: { children: ReactNode }) => {
  const { value } = useAppSelector(x => x.theme);

  // Show money information
  useCatchKeyPress(() => {
    alert('MONEY');
  }, CONTROL_KEY.CTRL, 'm');

  // Show banking informatiom
  useCatchKeyPress(() => {
    alert('BANK');
  }, CONTROL_KEY.CTRL, 'b');

  return (
    <div className={`animate-slide-in ${value === THEME.DARK && 'text-fourth'}`}>
      {children}
    </div>
  );
}));