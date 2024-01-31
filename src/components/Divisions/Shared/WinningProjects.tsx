import { IconMap } from '@/components/Events/WorkshopIcons';
import Image from 'next/image';
import Link from 'next/link';

type ProjectLink = {
  type: 'github' | 'video';
  link: string;
};

type Projects = {
  placement: string;
  name: string;
  desc: string;
  image: string;
  members: string[];
  links: ProjectLink[];
  manager: string;
};

type ProjectMap = Record<'projects' | 'research', Projects[]>;

const PROJECTS_MAP: ProjectMap = {
  projects: [
    {
      placement: 'SP22 1st Place',
      image: '/assets/divisions/shared/proj_image.png',
      name: 'project name',
      desc: 'app that blah blah blah',
      members: ['Vy Lam', 'Nhi Hunyh', 'Neha Thomas', 'Vyshnavi Nalla'],
      links: [
        {
          link: '',
          type: 'github',
        },
        {
          link: '',
          type: 'video',
        },
      ],
      manager: 'Vy Lam',
    },
    {
      placement: 'F22 1st Place',
      image: '/assets/divisions/shared/proj_image.png',
      name: 'project name',
      desc: 'app that blah blah blah',
      members: ['Vy Lam', 'Nhi Hunyh', 'Neha Thomas', 'Vyshnavi Nalla'],
      links: [
        {
          link: '',
          type: 'github',
        },
        {
          link: '',
          type: 'video',
        },
      ],
      manager: 'Vy Lam',
    },
  ],
  research: [],
};

export default function WinningProjects({ division }: { division: 'projects' | 'research' }) {
  return (
    <div id="winning-projects" className="pt-12 text-[#CACACA]">
      <h1 className="text-4xl">winning projects</h1>
      <div className="mb-20 h-[1px] w-40 bg-[#cacacab0]" />

      {PROJECTS_MAP[division].map((project, i) => (
        <div className="p-5" key={i}>
          <h1 className="text-2xl text-[#CACACA]">{project.placement}</h1>
          <div className="flex">
            <Image src={project.image} alt={project.name + ' Image'} width="400" height="400" />
            <div className="flex flex-col justify-between pl-5">
              <div className="flex w-[40rem] justify-between">
                <div className="flex-col">
                  <h1 className="pb-4 text-2xl font-semibold">{project.name}</h1>
                  <p className="text-[#9C9C9C]">{project.desc}</p>
                </div>
                <div className="flex">
                  {project.links.map((link, i) => (
                    <div className="flex flex-col justify-between" key={i}>
                      <Link href={link.link} target="_blank">
                        {IconMap[link.type]}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex w-[40rem] flex-col">
                <div className="flex space-x-1">
                  members:{'   '}
                  {project.members.map((member, i) => (
                    <p key={i}>{member}</p>
                  ))}
                </div>
                <p>project manager: {project.manager}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
