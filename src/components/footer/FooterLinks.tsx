import Link from 'next/link';
import { PATH_NAME, TAB_NAME } from '@/utils/constants';

export const FooterLinks = () => {
  return (
    <ul className="flex flex-col space-y-2 mb-4 items-center justify-center font-medium md:flex-row md:space-y-0 md:mb-0">
      {
        Object.entries(PATH_NAME).map(([key, path]) => (
          <li key={key}>
            <Link href={path} className="hover:bg-fourth hover:text-secondary p-2 rounded-2xl">
              {TAB_NAME[key as keyof typeof TAB_NAME]}
            </Link>
          </li>
        ))
      }
    </ul>
  );
};