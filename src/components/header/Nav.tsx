import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PATH_NAME, TAB_NAME } from '@/utils/constants';

export const Nav = () => {
  const activeStyle = 'bg-secondary rounded-full text-white px-4 py-2';
  const pathName = usePathname();

  return (
    <nav className="h-full hidden md:flex ml-auto">
      <ul className="flex text-base font-medium h-full items-center">
        <li className={`flex items-center ${pathName == PATH_NAME.HOME && activeStyle}`}>
          <Link href={PATH_NAME.HOME}>{TAB_NAME.HOME}</Link>
        </li>
        <li className={`flex items-center ${pathName == PATH_NAME.EDUCATION && activeStyle} ml-8`}>
          <Link href={PATH_NAME.EDUCATION}>{TAB_NAME.EDUCATION}</Link>
        </li>
        <li className={`items-center flex ${pathName == PATH_NAME.PROJECTS && activeStyle} ml-8`}>
          <Link href={PATH_NAME.PROJECTS}>{TAB_NAME.PROJECTS}</Link>
        </li>
        <li className={`items-center flex ${pathName == PATH_NAME.SKILLS && activeStyle} ml-8`}>
          <Link href={PATH_NAME.SKILLS}>{TAB_NAME.SKILLS}</Link>
        </li>
        <li className={`items-center flex ${pathName == PATH_NAME.CONTACT && activeStyle} ml-8`}>
          <Link href={PATH_NAME.CONTACT}>{TAB_NAME.CONTACT}</Link>
        </li>
      </ul>
    </nav>
  );
};