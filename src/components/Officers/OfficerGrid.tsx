'use client';

import Image from 'next/image';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { type ReactNode } from 'react';
import { useState } from 'react';
import { divisionOfficerMap } from '../../../config/officers.config';

type Layout =
  | 'advisor'
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
};

type Officer = {
  name: string;
  position: string;
  image: string;
  socialLinks?: Record<string, string>;
};

type PillProps = {
  officer: Officer;
};

const titleMap: Record<Layout, ReactNode> = {
  advisor: <h1 className="text-4xl font-bold">the advisor</h1>,
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
  hackutd: <Image src="/assets/about/hackutd/hackutd.png" alt="HackUTD" width={186} height={75} />,
  industry: (
    <Image src="/assets/about/industry/industry.png" alt="ACM Industry" width={186} height={75} />
  ),
};

interface OfficerImageWithFallbackProps {
  src: string;
  fallbackSrc: string;
  alt: string;
  className: string;
  style: React.CSSProperties;
  isJCole: boolean;
}

const OfficerImageWithFallback = (props: OfficerImageWithFallbackProps) => {
  const { src, fallbackSrc, alt, isJCole, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
      width={isJCole ? 110 : 80}
      height={isJCole ? 110 : 80}
      sizes="(max-width: 768px) 80px, 110px"
    />
  );
};

const OfficerGrid = (props: GridProps) => {
  const officers = divisionOfficerMap[props.type];
  return (
    <div className="flex flex-col p-10 lg:px-[11.5rem] lg:pb-32">
      <div className="text-[#cacaca]">{titleMap[props.type]}</div>
      <div className="flex flex-wrap justify-center gap-8 pt-8">
        {officers.map((officer) => (
          <OfficerPill key={officer.name} officer={officer} />
        ))}
      </div>
    </div>
  );
};

function getSocialIconLinks(socialLinks?: Record<string, string>) {
  if (!socialLinks) {
    return [];
  }

  const links = {
    linkedin: '',
    github: '',
    instagram: '',
  };

  for (const [key, value] of Object.entries(socialLinks)) {
    if (typeof value !== 'string' || value.trim() === '') {
      continue;
    }

    const normalizedKey = key.trim().toLowerCase();

    if (normalizedKey === 'linkedin' || normalizedKey === 'linkedinurl') {
      links.linkedin = value;
      continue;
    }

    if (normalizedKey === 'github' || normalizedKey === 'githuburl') {
      links.github = value;
      continue;
    }

    if (normalizedKey === 'instagram' || normalizedKey === 'instagramurl') {
      links.instagram = value;
    }
  }

  return [
    {
      key: 'linkedin',
      href: links.linkedin,
      icon: Linkedin,
      label: 'LinkedIn',
    },
    {
      key: 'github',
      href: links.github,
      icon: Github,
      label: 'GitHub',
    },
    {
      key: 'instagram',
      href: links.instagram,
      icon: Instagram,
      label: 'Instagram',
    },
  ].filter((link) => link.href);
}

const OfficerPill = ({ officer }: PillProps) => (
  <div className="m-2 flex rounded-lg p-2 text-[#cacaca]">
    <div
      className={`relative ${
        officer.name === 'John Cole' ? `h-[110px] w-[110px]` : `h-[80px] w-[80px]`
      } `}
    >
      <OfficerImageWithFallback
        style={{ objectFit: 'cover' }}
        src={officer.image}
        alt={officer.name}
        fallbackSrc="/assets/OfficerImage.png"
        className={`rounded-full ${
          officer.name === 'John Cole' ? `h-[110px] w-[110px]` : `h-[80px] w-[80px]`
        } `}
        isJCole={officer.name === 'John Cole'}
      />
    </div>
    <div className="ml-4 flex flex-col justify-center">
      <h1 className="text-xl font-semibold">{officer.name}</h1>
      <p className="text-sm">{officer.position}</p>
      {getSocialIconLinks(officer.socialLinks).length > 0 ? (
        <div className="mt-2 flex items-center gap-3">
          {getSocialIconLinks(officer.socialLinks).map((socialLink) => {
            const Icon = socialLink.icon;

            return (
              <a
                key={socialLink.key}
                href={socialLink.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialLink.label}
                className="transition-opacity hover:opacity-80"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      ) : null}
    </div>
  </div>
);

export default OfficerGrid;
