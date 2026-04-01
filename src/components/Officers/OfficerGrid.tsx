'use client';

import Image from 'next/image';
import { Github, Linkedin } from 'lucide-react';
import { type CSSProperties, type ReactNode } from 'react';
import { useState } from 'react';
import { divisionOfficerMap, type Officer } from '../../../config/officers.config';

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
  style: CSSProperties;
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
    <div className="mb-14 flex flex-col">
      <div className="mb-6 flex justify-center text-[#cacaca]">{titleMap[props.type]}</div>
      <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
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
  ].filter((link) => link.href);
}

const OfficerPill = ({ officer }: PillProps) => {
  const socialIconLinks = getSocialIconLinks(officer.socialLinks);
  const isJCole = officer.name === 'John Cole';

  return (
    <div className="m-2 flex p-2 text-[#cacaca]">
      <div className="flex items-start">
        <div className={`relative ${isJCole ? 'h-[110px] w-[110px]' : 'h-[80px] w-[80px]'} flex-shrink-0`}>
          <OfficerImageWithFallback
            style={{ objectFit: 'cover' }}
            src={officer.image}
            alt={officer.name}
            fallbackSrc="/assets/OfficerImage.png"
            className={`rounded-full ${
              isJCole ? 'h-[110px] w-[110px]' : 'h-[80px] w-[80px]'
            }`}
            isJCole={isJCole}
          />
        </div>
        <div className="ml-4 flex min-h-[92px] flex-1 flex-col">
          <div>
            <h1 className="line-clamp-2 text-lg font-semibold text-white">
              {officer.name}
            </h1>
            <p className="mt-0.5 line-clamp-2 text-sm leading-tight text-gray-200/90">{officer.position}</p>
          </div>

          <div className="mt-1.5 min-h-[24px]">
            {socialIconLinks.length > 0 ? (
              <div className="flex items-center justify-start gap-3 ml-1">
                {socialIconLinks.map((socialLink) => {
                  const Icon = socialLink.icon;

                  return (
                    <a
                      key={socialLink.key}
                      href={socialLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={socialLink.label}
                      className="text-gray-300 transition-colors hover:text-white"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficerGrid;
