import { Question } from '../lib/types';

export const sponsorFaqs: Question[] = [
  {
    question: 'What impact has ACM UTD had on the tech community?',
    answer:
      'ACM is the largest student-run tech organization on campus, driving innovation and industry engagement. We host HackUTD, the largest university hackathon in Texas, attracting 1,000+ participants and nationwide sponsor attention. We run technical and developmental workshops each semester, allowing companies to connect with the top motivated students. Our alumni have gone on to work at FAANG companies, launch startups, and contribute to open-source communities.',
  },
  {
    question: 'What sponsorships opportunities are available?',
    answer:
      'ACM UTD offers four tiers of sponsorships(Bronze, Silver, Gold, Platinum). Some of the perks include logo placement on ACM’s website, accessed by 100s of UTD students and visitors everyday; exclusive access to ACM member resumes; social media spotlights across all our platforms reaching about 2000+ followers; industry event participation that connect sponsors with top UTD students, kickoff speaking opportunities to promote your company to new members, and ACM promotions of open opportunities.',
  },
  {
    question: "How large is ACM UTD's reach?",
    answer:
      'ACM UTD is the largest student tech organization at UT Dallas, with over 2,000 members and a mailing list reaching thousands more. Our events usually draw 100+ students, giving sponsors access to a large and active student tech community.',
  },
  {
    question: 'What outcomes can we expect from sponsoring ACM UTD?',
    answer:
      'Sponsors have achieved direct recruiting success, strong brand recognition on campus, and meaningful engagement with future industry leaders. Many of our partners have reported internship hires and lasting relationships with students after collaborating with us.',
  },
  {
    question: 'What types of students engage with ACM at UTD?',
    answer:
      'While most members are computer science majors, our events attract students from engineering, ITS, math, and other STEM fields. Members range from first-year students eager to learn to graduates with multiple internships and research experience, providing sponsors with access to a wide talent pool.',
  },
];

export const sponsorImages = [
  '/assets/sponsors/pics/state-farm.jpg',
  '/assets/sponsors/pics/paycom-sponsor.jpg',
  '/assets/sponsors/pics/a-guy.jpg',
  '/assets/sponsors/pics/sponsor-speech.jpg',
  '/assets/sponsors/pics/people-staring2.jpg',
  '/assets/sponsors/pics/twilight-tunes.jpg',
  '/assets/sponsors/pics/people-staring1.jpg',
  '/assets/sponsors/pics/people-staring3.jpg',
];

export type Sponsor = {
  name: string;
  tier: 'gold' | 'silver' | 'bronze' | 'custom';
  logo: string;
  link: string;
};

export const sponsors: Sponsor[] = [
  {
    name: 'Paycom',
    tier: 'gold',
    logo: '/assets/sponsors/logos/paycom.png',
    link: 'https://www.paycom.com/about/',
  },
  {
    name: 'CBRE',
    tier: 'silver',
    logo: '/assets/sponsors/logos/CBRE.png',
    link: 'https://www.cbre.com/about',
  },
  {
    name: 'G-Research',
    tier: 'silver',
    logo: '/assets/sponsors/logos/gresearch.png',
    link: 'https://www.gresearch.com/about/about-us/',
  },
  {
    name: 'Nokia',
    tier: 'silver',
    logo: '/assets/sponsors/logos/nokia.png',
    link: 'https://www.nokia.com/we-are-nokia/',
  },
  {
    name: 'Verizon',
    tier: 'silver',
    logo: '/assets/sponsors/logos/verizon.png',
    link: 'https://mycareer.verizon.com/life-at-verizon/our-culture/',
  },
];
