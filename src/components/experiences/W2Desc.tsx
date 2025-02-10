'use client';

import { THEME } from '@/utils/enums';
import { useAppSelector } from '@/utils/hooks';

export const W2Desc = () => {
  const theme = useAppSelector(x => x.theme);

  return (
    <ul className="leading-6 space-y-2 text-sm text-third">
      <li className="dotted-li">
        <p>
          {'Worked on '}
          <i className={`text-black not-italic ${theme.value === THEME.DARK ? 'text-fourth' : 'text-fifth'}`}>
            <b>{'w2Commerce V5'}</b>
          </i>
          {', a comprehensive eCommerce platform designed to support businesses in establishing and managing online stores, '}
          {'using ASP.NET, ASP.NET MVC.'}
        </p>
      </li>
      <li className="dotted-li">
        <p>
          {'Our partners: '}
          <i
            className={`cursor-pointer text-black underline ${theme.value === THEME.DARK ? 'text-fourth' : 'text-fifth'}`}
            onClick={() => window.open('https://www.wakudoki.ne.jp/ec/cmShopTopPage1.html')}>
            <b>{'Shirohato'}</b>
          </i>
          {', '}
          <i
            className={`cursor-pointer text-black underline ${theme.value === THEME.DARK ? 'text-fourth' : 'text-fifth'}`}
            onClick={() => window.open('https://www.morinagamilk.co.jp/english/')}>
            <b>{'Morigana'}</b>
          </i>
          {', '}
          <i
            className={`cursor-pointer text-black underline ${theme.value === THEME.DARK ? 'text-fourth' : 'text-fifth'}`}
            onClick={() => window.open('https://www.fukutaro.co.jp/en/')}>
            <b>{'Fukutaro'}</b>
          </i>
          {', ...'}
        </p>
      </li>
      <li className="dotted-li">
        {''}
      </li>
    </ul>
  );
};