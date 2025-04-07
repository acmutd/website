import { IconMap } from '@/components/Events/WorkshopIcons';
import Image from 'next/image';
import Link from 'next/link';
import { getWinningProjects } from '../../../../config/divisions.config';

export default function WinningProjects({ division }: { division: 'projects' | 'research' | 'hackutd' }) {
  const projects = getWinningProjects(division);

  return (
    <div id="winning-projects" className="pt-12 text-[#CACACA] px-8 py-16">
      {projects.map((project, i) => (
        <div className="mb-16" key={i}>
          <h1 className="text-4xl font-bold mb-4">{project.placement}</h1>
          <div className="h-[1px] w-[300px] bg-[#cacacab0] mb-8" />

          <div className="flex flex-col md:flex-row gap-8">
            <div className="min-w-[400px]">
              <Image
                src={project.image}
                alt={project.name + ' Image'}
                width={400}
                height={400}
                className="rounded-md object-cover max-w-full h-auto bg-slate-300 max-h-[300px]"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold mb-6">{project.name}</h2>
                <p className="text-[#CACACA] text-lg mb-8 max-w-3xl leading-relaxed">{project.desc}</p>

                {project.links.length > 0 && (
                  <div className="flex gap-4 mb-6">
                    {project.links.map((link, i) => (
                      <Link
                        href={link.link}
                        target="_blank"
                        key={i}
                        className="hover:opacity-80 transition-opacity"
                      >
                        {IconMap[link.type]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-4">
                <p className="text-lg">
                  <span>members: </span>
                  {project.members.map((member, i) => (
                    <span key={i} className="font-medium">
                      {member}
                      {i !== project.members.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </p>

                {project.manager && (
                  <p className="text-lg mt-1">
                    <span>{division === 'projects' ? 'project lead ' : 'research lead '}</span>
                    <span className="font-medium">{project.manager}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
