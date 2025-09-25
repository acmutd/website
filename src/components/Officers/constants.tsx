import Image from 'next/image';
import { OfficerSections } from '../../../lib/types';
import DivisionIcon from './DivisionIcon';

export type DivisionInfo = { key: OfficerSections | 'all'; label: string };

export const divisions: DivisionInfo[] = [
  { key: 'board', label: 'Board' },
  { key: 'media', label: 'Media' },
  { key: 'research', label: 'Research' },
  { key: 'development', label: 'Development' },
  { key: 'projects', label: 'Projects' },
  { key: 'education', label: 'Education' },
  { key: 'community', label: 'Community' },
  { key: 'hackutd', label: 'HackUTD' },
  { key: 'industry', label: 'Industry' },
  { key: 'advisor', label: 'Advisor' },
];

export const allDivisions: DivisionInfo[] = [
  { key: 'all' as OfficerSections, label: 'All' },
  ...divisions,
];

export const titleMap: Record<OfficerSections | 'all', React.ReactNode> = {
  all: <></>,
  advisor: <h1 className="text-2xl font-semibold text-white">the advisor</h1>,
  board: <div className="flex items-center gap-2"><DivisionIcon divisionKey='board' size='sm' label='board' /> <h1 className="text-2xl font-semibold text-white">the board</h1></div>,
  media: <Image src="/assets/about/media/media.png" alt="ACM Media" width={140} height={56} />,
  research: (
    <Image src="/assets/about/research/research.png" alt="ACM Research" width={140} height={56} />
  ),
  development: (
    <Image
      src="/assets/about/development/development.png"
      alt="ACM Development"
      width={140}
      height={56}
    />
  ),
  projects: (
    <Image src="/assets/about/projects/projects.png" alt="ACM Projects" width={140} height={56} />
  ),
  education: (
    <Image
      src="/assets/about/education/education.png"
      alt="ACM Education"
      width={140}
      height={56}
    />
  ),
  community: (
    <Image
      src="/assets/about/community/community.png"
      alt="ACM Community"
      width={140}
      height={56}
    />
  ),
  hackutd: <Image src="/assets/about/hackutd/hackutd.png" alt="HackUTD" width={140} height={56} />,
  industry: (
    <Image src="/assets/about/industry/industry.png" alt="ACM Industry" width={140} height={56} />
  ),
};
