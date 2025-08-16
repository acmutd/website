import { ReactNode } from 'react';
import { Division, EducationSub } from './divisionUtil';
import Image from 'next/image';
import Link from 'next/link';

type ExtendedDivisions = Exclude<Division, 'education'> | `education.${EducationSub}`;

type DivisionHeaderProps = {
  children: ReactNode;
  division: ExtendedDivisions;
};
export default function DivisionHeader({ children, division }: DivisionHeaderProps) {
  return (
    <div className="pt-20 md:pt-40 font-sans w-full md:w-1/2">
      {images[division]}
      <p className="pt-5 text-lg md:text-2xl text-[#CACACA]">{children}</p>
      {typeof applicationUrl[division] === 'string' ? (
        <div className="mt-10 md:mt-20 flex items-center">
          <Link href={applicationUrl[division]}>
            <div className={`bg-${division.split('.')[0]}-gradient px-4 md:px-5 py-2 text-lg md:text-xl text-white rounded-lg border border-primary/50 bg-gray-300/10`}>
              apply
            </div>
          </Link>
        </div>
      ) : (
        // This was only used for the Education division for Mentor, you could apply for Mentor and Mentee so there would be two apply buttons
        <div className="mt-10 md:mt-20 flex flex-col md:flex-row items-center gap-y-3 md:gap-x-3">
          {Object.entries(applicationUrl[division] as Record<string, string>).map(
            ([roleName, appUrl]) => (
              <Link href={appUrl} key={roleName}>
                <div
                  className={`bg-${division.split('.')[0]}-gradient px-4 md:px-5 py-2 text-lg md:text-xl text-white rounded-lg border border-primary/50 bg-gray-300/10`}
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
  'education.mentor': 'https://portal.acmutd.co/opportunities',
  'education.tip': 'https://portal.acmutd.co/opportunities',
  projects: 'https://portal.acmutd.co/opportunities',
  research: 'https://portal.acmutd.co/opportunities',
  development: 'https://portal.acmutd.co/opportunities',
  media: 'https://portal.acmutd.co/opportunities',
  hackutd: 'https://portal.acmutd.co/opportunities',
  community: 'https://portal.acmutd.co/opportunities',
  industry: 'https://portal.acmutd.co/opportunities',
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
  development: (
    <Image src="/assets/about/development/development.png" alt="ACM Development" width={272} height={80} />
  ),
  media: (
    <Image src="/assets/about/media/media.png" alt="ACM Media" width={272} height={80} />
  ),
  hackutd: (
    <Image src="/assets/about/hackutd/hackutd.png" alt="ACM HackUTD" width={272} height={80} />
  ),
  community: (
    <Image src="/assets/about/community/community.png" alt="ACM Media" width={272} height={80} />
  ),
  industry: (
    <Image src="/assets/about/industry/industry.png" alt="ACM Industry" width={272} height={80} />
  ),
};