import { developmentProjects } from '../../../../config/development.config';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { ProjectLink } from '../../../../lib/types';

// Icon components for project links
const GitHubIcon = (
  <div className="relative w-5 h-5 md:w-6 md:h-6">
    <Image
      src="/assets/home/icons/github.png"
      alt="Github"
      fill
      className="object-contain filter brightness-0 invert opacity-80 group-hover/link:opacity-100 transition-opacity duration-200"
    />
  </div>
);

const SiteIcon = (
  <div className="relative w-5 h-5 md:w-6 md:h-6">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full text-white/80 group-hover/link:text-white transition-colors duration-200"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
        fill="currentColor"
      />
    </svg>
  </div>
);

const ProjectIconMap: Record<ProjectLink['type'], ReactNode> = {
  github: GitHubIcon,
  site: SiteIcon,
};

export default function DevProjects() {
  return (
    <div className="pt-12 text-primaryDark px-4 md:px-8 xl:pr-32 2xl:pr-40 py-8 md:py-16" id="our-projects">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
        {developmentProjects.map((project, index) => (
          <div
            key={index}
            className="group relative h-full transform transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-white/[0.03] backdrop-blur-md rounded-2xl border border-white/15 transition-all duration-500 group-hover:border-white/25 group-hover:shadow-2xl group-hover:shadow-white/10" />

            <div className="relative p-6 md:p-8 h-full flex flex-col">
              <div className="relative overflow-hidden rounded-xl mb-6 bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-500 group-hover:shadow-2xl">
                <div className="aspect-video w-full flex items-center justify-center p-4">
                  <Image
                    src={project.image}
                    alt={project.title + ' Image'}
                    width={800}
                    height={600}
                    className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col space-y-4">
                <div className="relative">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight">
                    {project.title}
                  </h2>
                  <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-white/40 to-transparent rounded-full" />
                </div>

                <p className="text-primaryDark/75 text-sm md:text-base leading-relaxed flex-1 font-light">
                  {project.description}
                </p>

                {project.links.length > 0 && (
                  <div className="flex items-center gap-3 pt-4 mt-auto border-t border-white/8">
                    <span className="text-primaryDark/50 text-xs font-medium uppercase tracking-wider">
                      Links
                    </span>
                    <div className="flex gap-2">
                      {project.links.map((link, linkIndex) => (
                        <Link
                          href={link.link.startsWith('http') ? link.link : `https://${link.link}`}
                          target="_blank"
                          key={linkIndex}
                          className="group/link relative inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white/5 backdrop-blur-sm border border-white/15 transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:shadow-lg"
                        >
                          <div className="transform transition-transform duration-200 group-hover/link:scale-110">
                            {ProjectIconMap[link.type]}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}