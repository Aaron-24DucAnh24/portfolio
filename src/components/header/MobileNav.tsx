import { PATH_NAME, TAB_NAME } from '@/utils/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa';
import { SmoothUl } from '../general/SmoothUl';

export const MobileNav = () => {
  const pathName = usePathname();

  // STATES
  const [currTab, setCurrTab] = useState<string>(TAB_NAME.HOME);
  const [showNav, setShowNav] = useState<boolean>(false);

  // EFFECTS
  useEffect(() => {
    if (pathName === PATH_NAME.HOME) setCurrTab(TAB_NAME.HOME);
    else setCurrTab(pathName.charAt(1).toUpperCase() + pathName.slice(2));
    setShowNav(false);
  }, [pathName]);

  return (
    <nav className="h-full flex items-center md:hidden ml-auto font-medium relative">
      <SmoothUl
        className='flex flex-col justify-center absolute top-14 right-0 border border-fourth shadow rounded-2xl bg-white p-2 cursor-pointer'
        onShow={() => setShowNav(true)}
        onClose={() => setShowNav(false)}
        button={
          <div className={`flex h-fit px-4 py-2 items-center hover:bg-fourth rounded-full cursor-pointer
            ${showNav && 'bg-black text-white hover:bg-black'}
          `}>
            {currTab}
            {!showNav && <FaAngleDown className='ml-1' />}
            {showNav && <FaAngleUp className='ml-1 z-50' color='white' />}
          </div>
        }
      >
        <li>
          <Link className='p-2 w-40 rounded-2xl hover:bg-fourth flex justify-between items-center'
            href={PATH_NAME.HOME}>{TAB_NAME.HOME}
            {pathName === PATH_NAME.HOME && <FaCheck color={'#e60022'} />}
          </Link>
        </li>
        <li>
          <Link className='p-2 w-40 rounded-2xl hover:bg-fourth flex justify-between items-center'
            href={PATH_NAME.EDUCATION}>{TAB_NAME.EDUCATION}
            {pathName === PATH_NAME.EDUCATION && <FaCheck color={'#e60022'} />}
          </Link>
        </li>
        <li>
          <Link className='p-2 w-40 rounded-2xl hover:bg-fourth flex justify-between items-center'
            href={PATH_NAME.PROJECTS}>{TAB_NAME.PROJECTS}
            {pathName === PATH_NAME.PROJECTS && <FaCheck color={'#e60022'} />}
          </Link>
        </li>
        <li>
          <Link className='p-2 w-40 rounded-2xl hover:bg-fourth flex justify-between items-center'
            href={PATH_NAME.SKILLS}>{TAB_NAME.SKILLS}
            {pathName === PATH_NAME.SKILLS && <FaCheck color={'#e60022'} />}
          </Link>
        </li>
        <li>
          <Link className='p-2 w-40 rounded-2xl hover:bg-fourth flex justify-between items-center'
            href={PATH_NAME.CONTACT}>{TAB_NAME.CONTACT}
            {pathName === PATH_NAME.CONTACT && <FaCheck color={'#e60022'} />}
          </Link>
        </li>
      </SmoothUl>
    </nav>
  );
};