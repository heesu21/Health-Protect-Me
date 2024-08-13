import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/icons/Vector.svg';
import githubIcon from '@/assets/icons/icon_git.png';
import instagramIcon from '@/assets/icons/icon_instar.png';

const Footer = () => {
  return (
    <footer className="w-full bg-white z-10 p-6">
      <div className="inner_wrap flex flex-col justify-start px-10 py-4">
        <div className="flex items-start justify-between w-[280px]">
          <Link href={'/'}>
            <Image src={logo} alt="logo" width={100} height={28} />
          </Link>
          <div className="flex">
            <Link href={'https://github.com/B-09-NBC-Final/Health-Protect-Me'}>
              <Image src={githubIcon} alt="GitHub" width={24} height={24} />
            </Link>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray600">P리부는P리</p>
          <p className="text-sm text-gray600">Copyright 2024. HELPME. All right reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
