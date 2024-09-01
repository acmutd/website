import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-acm-gradient',
    'bg-media-gradient',
    'bg-research-gradient',
    'bg-education-gradient',
    'bg-projects-gradient',
    'bg-development-gradient',
    'bg-community-gradient',
    'bg-hackutd-gradient',
    'bg-industry-gradient',
    'bg-[url(/assets/about/development/development-bg.png)]',
    'bg-[url(/assets/about/research/research-bg.png)]',
    'bg-[url(/assets/about/projects/projects-bg.png)]',
    'bg-[url(/assets/about/education/education-bg.png)]',
    'bg-[url(/assets/about/media/media-bg.png)]',
    'bg-[url(/assets/about/hackutd/hackutd-bg.png)]',
    'bg-[url(/assets/about/industry/industry-bg.png)]',
    'bg-[url(/assets/about/community/community-bg.png)]',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gilroy', 'sans-serif'],
      },
      colors: {
        background: '#151515',
        primary: '#FFFFFF',
        primaryDark: '#CACACA',
      },
      backgroundImage: {
        'acm-gradient': 'linear-gradient(94deg, #E10087 10.67%, #4004C0 93.37%)',
        'media-gradient': 'linear-gradient(98deg, #E10087 7.24%, #FFD600 95.11%)',
        'research-gradient': 'linear-gradient(98deg, #EA5400 18.05%, #FFC700 94.8%)',
        'education-gradient': 'linear-gradient(98deg, #56E100 7.24%, #00EAC0 95.11%)',
        'projects-gradient': 'linear-gradient(98deg, #008CF1 7.24%, #00ECEC 95.11%)',
        'development-gradient': 'linear-gradient(97deg, #9900E1 7.31%, #5200FF 59.32%)',
        'community-gradient': 'linear-gradient(98deg, #FFB800 18.05%, #ADFF00 94.8%)',
        'hackutd-gradient': 'linear-gradient(98deg, #FE002E 7.24%, #AD00FF 95.11%)',
         'apply-gradient':
          'linear-gradient(128deg, rgba(255, 255, 255, 0.12) 3.07%, rgba(255, 255, 255, 0.03) 96.39%)',
        'industry-gradient': 'linear-gradient(98deg, #6F6F6F 7.24%, #FFFFFF 95.11%)',
        'about-graident':
        'linear-gradient(128deg, rgba(255, 255, 255, 0.12) 3.07%, rgba(255, 255, 255, 0.03) 96.39%)',
        'gold-gradient': 'linear-gradient(128deg, rgba(227, 160, 73, 0.12) 3.07%, rgba(227, 160, 73, 0.03) 96.39%)',
        'silver-gradient': 'linear-gradient(128deg, rgba(143, 155, 166, 0.12) 3.07%, rgba(143, 155, 166, 0.03) 96.39%)',
        'bronze-gradient': 'linear-gradient(128deg, rgba(219, 114, 64, 0.12) 3.07%, rgba(219, 114, 64, 0.03) 96.39%)',
        'green-gradient': 'linear-gradient(128deg, rgba(34, 193, 195, 0.12) 3.07%, rgba(34, 193, 195, 0.03) 96.39%)',
      },
    },
  },
  plugins: [],
};
export default config;
