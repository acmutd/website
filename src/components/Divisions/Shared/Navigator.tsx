import Link from 'next/link';
import { Division } from './divisionUtil';

const links = ['directors', 'experience', 'workshops', 'faq'];
const altLinks = ['directors', 'experience', 'winning projects', 'faq'];

type Props = {
  division: Division;
};

export default function Navigator({ division }: Props) {
  const routeLinks = division === 'research' || division === 'projects' ? altLinks : links;
  return (
    <div className="sticky right-5 top-1/3 z-50 flex h-full w-full flex-col space-y-5 pr-10 text-right">
      {routeLinks.map((link) => (
        <Link
          className="text-2xl font-semibold text-white transition-all duration-300 hover:text-[#F3F3F3]"
          key={link}
          href={`#${link.split(' ').join('-').toLowerCase()}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
