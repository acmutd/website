import Link from 'next/link';
import { DivisionProps, isEducationDivision } from './divisionUtil';
import React from 'react';

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
  let routeLinks = [];

  if (isEducationDivision(props)) {
    routeLinks = LINK_DICT.education[props.sub];
  } else {
    routeLinks = LINK_DICT[props.division];
  }

  return (
    <div
      className={`fixed right-5 z-50 h-auto pr-10 text-right ${
        props.division !== 'education' ? 'top-1/3' : 'top-2/3'
      }`}
    >
      {routeLinks.map((link) => (
        <div className="pb-5" key={link}>
          <Link
            className="pb-5 text-2xl font-semibold text-white transition-all duration-300 hover:text-gray-300"
            href={`#${link.split(' ').join('-').toLowerCase()}`}
          >
            {link}
          </Link>
        </div>
      ))}
    </div>
  );
}
