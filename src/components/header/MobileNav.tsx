import { PATH_NAME, TAB_NAME } from '@/utils/constants';
import { useClickOutside } from '@/utils/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
import { FaCheck } from 'react-icons/fa';

export const MobileNav = () => {
  const pathName = usePathname();
  const buttonRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // STATES
  const [currTab, setCurrTab] = useState<string>(TAB_NAME.HOME);
  const [showNav, setShowNav] = useState<boolean>(false);

  // EFFECTS
  useClickOutside(() => {
    setShowNav(false);
  }, [buttonRef, listRef]);

  useEffect(() => {
    if (pathName === PATH_NAME.HOME)
      setCurrTab(TAB_NAME.HOME);
    else
      setCurrTab(pathName.charAt(1).toUpperCase() + pathName.slice(2));
  }, [pathName]);

  return (
    <nav className="h-full flex items-center md:hidden ml-auto font-medium relative">
      <div
        ref={buttonRef}
        onClick={() => setShowNav(pre => !pre)}
        className={`flex h-fit px-4 py-2 items-center hover:bg-fourth rounded-full cursor-pointer 
          ${showNav && 'bg-secondary text-white hover:bg-secondary'}`
        }
      >
        {currTab}
        {!showNav && <FaAngleDown className='ml-1' />}
        {showNav && <FaAngleDown className='ml-1 z-50' color='white' />}
      </div>
      {
        showNav &&
        <ul
          className="flex flex-col justify-center absolute top-14 right-0 border border-fourth shadow rounded-2xl bg-white p-2 cursor-pointer"
          ref={listRef}
        >
          <li>
            <Link className='p-2 w-40 rounded-2xl hover:bg-fourth flex justify-between items-center'
              href={PATH_NAME.HOME}>{TAB_NAME.HOME}
              {pathName === PATH_NAME.HOME && <FaCheck />}
            </Link>
          </li>
          <li>
            <Link className='p-2 w-40 rounded-2xl hover:bg-fourth flex justify-between items-center'
              href={PATH_NAME.EDUCATION}>{TAB_NAME.EDUCATION}
              {pathName === PATH_NAME.EDUCATION && <FaCheck />}
            </Link>
          </li>
          <li>
            <Link className='p-2 w-40 rounded-2xl hover:bg-fourth flex justify-between items-center'
              href={PATH_NAME.PROJECTS}>{TAB_NAME.PROJECTS}
              {pathName === PATH_NAME.PROJECTS && <FaCheck />}
            </Link>
          </li>
          <li>
            <Link className='p-2 w-40 rounded-2xl hover:bg-fourth flex justify-between items-center'
              href={PATH_NAME.SKILLS}>{TAB_NAME.SKILLS}
              {pathName === PATH_NAME.SKILLS && <FaCheck />}
            </Link>
          </li>
          <li>
            <Link className='p-2 w-40 rounded-2xl hover:bg-fourth flex justify-between items-center'
              href={PATH_NAME.CONTACT}>{TAB_NAME.CONTACT}
              {pathName === PATH_NAME.CONTACT && <FaCheck />}
            </Link>
          </li>
        </ul>
      }
    </nav>
  );
};