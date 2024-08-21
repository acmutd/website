import { ReactNode } from 'react';
import { ExtendedDivisions } from './divisionUtil';
import Image from 'next/image';
import Link from 'next/link';

type DivisionHeaderProps = {
  children: ReactNode;
  division: ExtendedDivisions;
};
export default function DivisionHeader({ children, division }: DivisionHeaderProps) {
  return (
    <div className="pt-40 font-sans">
      {images[division]}
      <p className="w-[55rem] pt-5 text-2xl text-[#CACACA]">{children}</p>
      {typeof applicationUrl[division] === 'string' ? (
        <div className="mt-20 flex items-center">
          <Link href={applicationUrl[division]}>
            <div className={`bg-${division.split('.')[0]}-gradient px-5 py-2 text-xl text-white`}>
              apply today
            </div>
          </Link>
        </div>
      ) : (
        <div className="mt-20 flex items-center gap-x-3">
          {Object.entries(applicationUrl[division] as Record<string, string>).map(
            ([roleName, appUrl]) => (
              <Link href={appUrl} key={roleName}>
                <div
                  className={`bg-${division.split('.')[0]}-gradient px-5 py-2 text-xl text-white`}
                >
                  apply today as {roleName}
                </div>
              </Link>
            ),
          )}
        </div>
      )}
    </div>
  );
}

// NOTE: This will need to be changed every semester until we have a database
const applicationUrl: Record<ExtendedDivisions, string | Record<string, string>> = {
  'education.mentor': {
    Mentor: 'https://portal.acmutd.co/typeform/mentor-app-f24',
    Mentee: 'https://portal.acmutd.co/typeform/mentee-app-f24',
  },
  'education.tip': 'https://portal.acmutd.co/typeform/tip-app-f24',
  projects: 'https://portal.acmutd.co/typeform/projects-apply-f24',
  research: 'https://portal.acmutd.co/typeform/research-apply-f24',
};

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
