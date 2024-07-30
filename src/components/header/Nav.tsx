import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PATH_NAME, TAB_NAME } from '@/utils/constants';
import { THEME } from '@/utils/enums';
import { handleContact } from '../home';
import { useAppSelector } from '@/utils/hooks';

export const Nav = () => {
  const theme = useAppSelector(x => x.theme);
  const pathName = usePathname();
  const activeStyle = theme.value === THEME.LIGHT
    ? 'bg-secondary rounded-full text-fourth px-4 py-2'
    : 'bg-white rounded-full text-secondary px-4 py-2';

  return (
    <nav className="h-full hidden md:flex ml-auto">
      <ul className="flex text-base font-medium h-full items-center">
        <li className={`items-center flex  ${pathName == PATH_NAME.EXPERIENCES && activeStyle} ml-8`}>
          <Link href={PATH_NAME.EXPERIENCES}>{TAB_NAME.EXPERIENCES}</Link>
        </li>
        <li className={`items-center flex  ${pathName == PATH_NAME.PROJECTS && activeStyle} ml-8`}>
          <Link href={PATH_NAME.PROJECTS}>{TAB_NAME.PROJECTS}</Link>
        </li>
        <li className={`flex items-center  ${pathName == PATH_NAME.EDUCATION && activeStyle} ml-8`}>
          <Link href={PATH_NAME.EDUCATION}>{TAB_NAME.EDUCATION}</Link>
        </li>
        <li className={`items-center flex  ${pathName == PATH_NAME.SKILLS && activeStyle} ml-8`}>
          <Link href={PATH_NAME.SKILLS}>{TAB_NAME.SKILLS}</Link>
        </li>
        <li
          className={'items-center flex ml-8 cursor-pointer'}
          onClick={handleContact}
        >
          {TAB_NAME.CONTACT}
        </li>
      </ul>
    </nav>
  );
};