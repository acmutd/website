import { ReactNode } from 'react';
import { Division, EducationSub  } from './divisionUtil';
import Image from 'next/image';
import Link from 'next/link';

type ExtendedDivisions = Exclude<Division, 'education'> | `education.${EducationSub}`;

type DivisionHeaderProps = {
  children: ReactNode;
  division: ExtendedDivisions;
};
export default function DivisionHeader({ children, division }: DivisionHeaderProps) {
  return (
    <div className="pt-40 font-sans w-1/2">
      {images[division]}
      <p className="pt-5 text-2xl text-[#CACACA]">{children}</p>
      {typeof applicationUrl[division] === 'string' ? (
        <div className="mt-20 flex items-center">
          <Link href={applicationUrl[division]}>
            <div className={`bg-${division.split('.')[0]}-gradient px-5 py-2 text-xl text-white rounded-lg border border-primary/50 bg-gray-300/10`}>
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
                  className={`bg-${division.split('.')[0]}-gradient px-5 py-2 text-xl text-white rounded-lg border border-primary/50 bg-gray-300/10`}
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
    Mentor: 'https://portal.acmutd.co/typeform/mentor-app-s25',
    Mentee: 'https://portal.acmutd.co/typeform/mentee-app-s25',
  },
  'education.tip': 'https://portal.acmutd.co/typeform/tip-app-s25',
  projects: 'https://portal.acmutd.co/typeform/projects-apply-s25',
  research: 'https://portal.acmutd.co/typeform/research-apply-s25',
  development: 'https://portal.acmutd.co/typeform/development-apply-s25',
  media: 'https://portal.acmutd.co/typeform/media-apply-s25',
  community: 'https://portal.acmutd.co/typeform/community-apply-s25',
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
  community: (
    <Image src="/assets/about/community/community.png" alt="ACM Media" width={272} height={80} />
  )
};