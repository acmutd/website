'use client';
import Link from 'next/link';
import { DivisionProps, isEducationDivision } from './divisionUtil';
import React, { useState, useEffect } from 'react';

const mentorLinks = ['directors', 'experience', 'workshops', 'faq'];
const altLinks = ['directors', 'experience', 'winning projects', 'faq'];
const tipLinks = ['directors', 'experience', 'structure', 'faq'];
const developmentLinks = ['directors', 'experience', 'faq'];
const mediaLinks = ['directors', 'experience', 'faq'];

const LINK_DICT = {
  research: altLinks,
  projects: altLinks,
  development: developmentLinks,
  education: {
    mentor: mentorLinks,
    tip: tipLinks,
  },
  media: mediaLinks,
  hackutd: altLinks,
  community: mediaLinks,
  industry: mediaLinks,
} as const;

export default function Navigator(props: DivisionProps) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  let routeLinks = [];

  if (isEducationDivision(props)) {
    routeLinks = LINK_DICT.education[props.sub];
  } else {
    routeLinks = LINK_DICT[props.division];
  }

  const isVisible = !isScrolling || isHovered;
  const opacity = isHovered ? 'opacity-100' : isScrolling ? 'opacity-20' : 'opacity-60';

  return (
    <div
      className={`fixed right-2 md:right-4 z-40 h-auto text-right hidden xl:block transition-all duration-500 ease-out ${
        props.division !== 'education' ? 'top-1/3' : 'top-2/3'
      } ${opacity} ${isVisible ? 'translate-x-0' : 'translate-x-4'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`backdrop-blur-sm rounded-lg px-2 py-3 border transition-all duration-500 ${
        isHovered
          ? 'bg-black/40 border-white/20 shadow-lg'
          : 'bg-black/10 border-white/5'
      }`}>
        {routeLinks.map((link, index) => (
          <div className={`${index > 0 ? 'pt-1.5' : ''}`} key={link}>
            <Link
              className={`block text-sm md:text-base font-medium transition-all duration-300 cursor-pointer ${
                isHovered
                  ? 'text-white hover:text-gray-200 hover:translate-x-[-2px]'
                  : 'text-white/60 hover:text-white/80'
              }`}
              href={`#${link.split(' ').join('-').toLowerCase()}`}
            >
              {link}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
