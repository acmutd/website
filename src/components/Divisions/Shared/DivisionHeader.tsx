import { ReactNode } from 'react';
import { ExtendedDivisions } from './divisionUtil';
import Image from 'next/image';

type DivisionHeaderProps = {
  children: ReactNode;
  division: ExtendedDivisions;
};
export default function DivisionHeader({ children, division }: DivisionHeaderProps) {
  return (
    <div className="pt-40 font-sans">
      {images[division]}
      <p className="w-[55rem] pt-5 text-2xl text-[#CACACA]">{children}</p>
      <button className={`mt-20 bg-${division}-gradient px-5 py-2 text-xl text-white`}>
        apply today
      </button>
    </div>
  );
}

const images: Record<ExtendedDivisions, ReactNode> = {
  projects: (
    <Image src="/assets/about/projects/projects.png" alt="ACM Projects" width={272} height={80} />
  ),
  research: (
    <Image src="/assets/about/research/research.png" alt="ACM Research" width={272} height={80} />
  ),
  'education.mentor': (
    <Image
      src="/assets/about/education/education.png"
      alt="ACM Mentorship"
      width={272}
      height={80}
    />
  ),
  'education.tip': (
    <Image src="/assets/about/education/education.png" alt="ACM TIP" width={272} height={80} />
  ),
};
