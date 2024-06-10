import { IconMap } from '@/components/Events/WorkshopIcons';
import Image from 'next/image';
import Link from 'next/link';
import { getWinningProjects } from '../../../../config/divisions.config';

export default function WinningProjects({ division }: { division: 'projects' | 'research' }) {
  const projects = getWinningProjects(division);
  return (
    <div id="winning-projects" className="pt-12 text-[#CACACA]">
      <h1 className="text-4xl">winning projects</h1>
      <div className="mb-20 h-[1px] w-40 bg-[#cacacab0]" />

      {projects.map((project, i) => (
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
                    <div className="flex w-20 flex-col justify-between" key={i}>
                      <Link href={link.link} target="_blank">
                        {IconMap[link.type]}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex w-[40rem] flex-col">
                <div className="flex space-x-1">
                  <p>members:</p>
                  {project.members.map((member, i) => (
                    <p key={i}>
                      {member}
                      {i !== project.members.length - 1 ? ',' : ''}
                    </p>
                  ))}
                </div>
                <p>
                  {division === 'projects' ? 'project manager' : 'research lead'} {project.manager}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
