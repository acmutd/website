import Image from 'next/image';
import { type ReactNode } from 'react';

type Layout =
  | 'board'
  | 'media'
  | 'research'
  | 'development'
  | 'projects'
  | 'education'
  | 'community'
  | 'hackutd'
  | 'industry';

type GridProps = {
  type: Layout;
  count: number;
};

type Officer = {
  name: string;
  position: string;
  image: string;
};

type PillProps = {
  officer: Officer;
};

const defaultOfficer: Officer = {
  name: 'Saksham Sangrula',
  position: 'President',
  image: '/assets/officer/OfficerImage.png',
};

const titleMap: Record<Layout, ReactNode> = {
  board: <h1 className="text-4xl font-bold">the board</h1>,
  media: <Image src="/assets/about/media/media.png" alt="ACM Media" width={186} height={75} />,
  research: (
    <Image src="/assets/about/research/research.png" alt="ACM Research" width={186} height={75} />
  ),
  development: (
    <Image
      src="/assets/about/development/development.png"
      alt="ACM Development"
      width={186}
      height={75}
    />
  ),
  projects: (
    <Image src="/assets/about/projects/projects.png" alt="ACM Projects" width={186} height={75} />
  ),
  education: (
    <Image
      src="/assets/about/education/education.png"
      alt="ACM Education"
      width={186}
      height={75}
    />
  ),
  community: (
    <Image
      src="/assets/about/community/community.png"
      alt="ACM Community"
      width={186}
      height={75}
    />
  ),
  hackutd: <Image src="/assets/about/hackutd/hackutd.png" alt="ACM Hack" width={186} height={75} />,
  industry: (
    <Image src="/assets/about/industry/industry.png" alt="ACM Industry" width={186} height={75} />
  ),
};

const OfficerGrid = (props: GridProps) => {
  return (
    <div className="flex flex-col p-16 lg:px-[11.5rem] lg:pb-32">
      <div className="text-[#cacaca]">{titleMap[props.type]}</div>
      <div className="flex flex-wrap pt-8">
        {Array.from({ length: props.count }, (_, i) => (
          <OfficerPill key={i} officer={defaultOfficer} />
        ))}
      </div>
    </div>
  );
};

const OfficerPill = ({ officer }: PillProps) => (
  <div className="m-3 flex justify-center align-middle text-[#cacaca]">
    <Image
      src={officer.image}
      alt={officer.name}
      width={80}
      height={80}
      className="mx-6 lg:mx-10"
    />
    <div className="flex-col self-center">
      <h1 className="md:text-xl">{officer.name}</h1>
      <p>{officer.position}</p>
    </div>
  </div>
);

export default OfficerGrid;
