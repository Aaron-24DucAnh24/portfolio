'use client';

import { useStores } from '@/store';
import { THEME } from '@/utils/enums';
import { observer } from 'mobx-react-lite';
import { ReactNode } from 'react';

export const Body = observer(({ children }: { children: ReactNode }) => {
  const { generalStore } = useStores();
  const { theme } = generalStore;

  return (
    <div className={`animate-slide-in font-normal ${theme === THEME.DARK && 'text-fourth'}`}>
      {children}
    </div>
  );
});