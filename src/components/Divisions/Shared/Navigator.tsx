import Link from 'next/link';
import { Division } from './divisionUtil';

const mentorLinks = ['directors', 'experience', 'workshops', 'faq'];
const altLinks = ['directors', 'experience', 'winning projects', 'faq'];
const tipLinks = ['directors', 'experience', 'structure', 'faq'];

const LINK_DICT = {
  research: altLinks,
  projects: altLinks,
  education: {
    mentor: mentorLinks,
    tip: tipLinks,
  },
} as const;

type Props =
  | {
      division: Exclude<Division, 'education'>;
    }
  | {
      division: 'education';
      sub: 'mentor' | 'tip';
    };

export default function Navigator(props: Props) {
  let routeLinks = [];
  if (props.division === 'education') routeLinks = LINK_DICT.education[props.sub];
  else routeLinks = LINK_DICT[props.division];
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
