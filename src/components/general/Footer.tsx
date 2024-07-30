'use client';

import Link from 'next/link';
import {
  FaFacebook,
  FaPhone,
  FaGithub,
  FaHeart,
  FaLinkedin
} from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { Logo } from './Logo';
import { PATH_NAME, TAB_NAME } from '@/utils/constants';
import { THEME } from '@/utils/enums';
import { useAppSelector } from '@/utils/hooks';
import { StateProvider } from './StateProvider';

export const Footer = StateProvider(() => {
  const theme = useAppSelector(x => x.theme);

  return (
    <footer className={`shadow-2xl p-4 border-t
      ${theme.value === THEME.DARK ? 'bg-secondary text-fourth border-third' : 'border-fourth'}
    `}>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="md:flex md:items-center md:justify-between ">
          <ul className="flex flex-col space-y-2 mb-4 items-center justify-center font-medium  md:flex-row md:space-y-0 md:mb-0">
            <li>
              <Link href={PATH_NAME.HOME} className="hover:bg-fourth hover:text-secondary p-2 rounded-2xl">
                {TAB_NAME.HOME}
              </Link>
            </li>
            <li>
              <Link href={PATH_NAME.EDUCATION} className="hover:bg-fourth hover:text-secondary p-2 rounded-2xl">
                {TAB_NAME.EDUCATION}
              </Link>
            </li>
            <li>
              <Link href={PATH_NAME.SKILLS} className="hover:bg-fourth hover:text-secondary p-2 rounded-2xl">
                {TAB_NAME.SKILLS}
              </Link>
            </li>
            <li>
              <Link href={PATH_NAME.PROJECTS} className="hover:bg-fourth hover:text-secondary p-2 rounded-2xl">
                {TAB_NAME.PROJECTS}
              </Link>
            </li>
          </ul>

          {/* social icon */}
          <ul className="flex flex-wrap items-center justify-center text-sm font-medium ">
            <li>
              <Link
                href="https://www.facebook.com/ngocducanh.bui"
                className="hover:text-primary me-10"
              >
                <FaFacebook size={24} className='hover:animate-floating' />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Aaron-24DucAnh24"
                className="hover:text-primary me-10"
              >
                <FaGithub size={24} className='hover:animate-floating' />
              </Link>
            </li>
            <li>
              <Link
                href="mailto:buingocducanh24@gmail.com"
                className="hover:text-primary me-10"
              >
                <IoMdMail size={24} className='hover:animate-floating' />
              </Link>
            </li>
            <li>
              <Link
                href="tel:+84964778339"
                className="hover:text-primary me-10"
              >
                <FaPhone size={24} className='hover:animate-floating' />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/duc-anh-bui-2143b7275/"
                className="hover:text-primary me-10"
              >
                <FaLinkedin size={24} className='hover:animate-floating' />
              </Link>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-third sm:mx-auto lg:my-8" />

        <div className="flex justify-center">
          <Logo />
        </div>

        <div className="flex items-center justify-center text-sm  mt-4">
          Make with
          <FaHeart color='#e60022' className='mx-2 animate-floating' />
          by Duc Anh Bui.
        </div>
      </div>
    </footer>
  );
});
