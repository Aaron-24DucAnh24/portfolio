import Link from 'next/link';
import {
  FaFacebook,
  FaPhone,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { SOCIAL_LINKS } from '@/utils/constants';

const socialIcons = [
  { href: SOCIAL_LINKS.FACEBOOK, Icon: FaFacebook },
  { href: SOCIAL_LINKS.GITHUB, Icon: FaGithub },
  { href: SOCIAL_LINKS.EMAIL, Icon: IoMdMail },
  { href: SOCIAL_LINKS.PHONE, Icon: FaPhone },
  { href: SOCIAL_LINKS.LINKEDIN, Icon: FaLinkedin },
];

export const SocialLinks = () => (
  <ul className="flex flex-wrap items-center justify-center text-sm font-medium">
    {socialIcons.map(({ href, Icon }) => (
      <li key={href}>
        <Link href={href} className="hover:text-primary me-10">
          <Icon size={24} className='hover:animate-floating' />
        </Link>
      </li>
    ))}
  </ul>
);