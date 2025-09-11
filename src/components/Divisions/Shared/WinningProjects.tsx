import { IconMap } from '@/components/Events/WorkshopIcons';
import Image from 'next/image';
import Link from 'next/link';
import { getWinningProjects } from '../../../../config/divisions.config';

export default function WinningProjects({ division }: { division: 'projects' | 'research' | 'hackutd' }) {
  const projects = getWinningProjects(division);

  return (
    <div id="winning-projects" className="pt-12 text-primaryDark px-4 md:px-8 xl:pr-32 2xl:pr-40 py-8 md:py-16 space-y-12 md:space-y-20">
      {projects.map((project, i) => {
        const badgeStyle = getPlacementBadge(project.placement);

        return (
          <div
            key={i}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-500 group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-white/10" />

            <div className="relative p-6 md:p-10">
              <div className="flex items-center mb-8">
                <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${badgeStyle.gradient} ${badgeStyle.glow} transform transition-all duration-300 group-hover:scale-105 shadow-lg`}>
                  <span className={`text-lg md:text-xl font-bold ${badgeStyle.text} text-center`}>
                    {project.placement}
                  </span>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="w-full lg:w-2/5 xl:w-1/3">
                  <div className="relative overflow-hidden rounded-xl group-hover:shadow-2xl transition-all duration-500">
                    <Image
                      src={project.image}
                      alt={project.name + ' Image'}
                      width={400}
                      height={300}
                      className="w-full h-64 md:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight group-hover:text-white/90 transition-colors duration-300">
                      {project.name}
                    </h2>

                    <p className="text-primaryDark/90 text-lg md:text-xl leading-relaxed max-w-4xl">
                      {project.desc}
                    </p>

                    {project.links.length > 0 && (
                      <div className="flex gap-4 flex-wrap">
                        {project.links.map((link, linkIndex) => (
                          <Link
                            href={link.link}
                            target="_blank"
                            key={linkIndex}
                            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 hover:scale-110 transition-all duration-300 group/link"
                          >
                            <div className="transition-transform duration-300 group-hover/link:scale-110">
                              {IconMap[link.type]}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 pt-6 border-t border-white/10">
                    <div className="text-base md:text-lg">
                      <span className="text-primaryDark/70 font-medium">Members: </span>
                      <span className="text-white font-medium">
                        {project.members.join(', ')}
                      </span>
                    </div>

                    {project.manager && (
                      <div className="text-base md:text-lg">
                        <span className="text-primaryDark/70 font-medium">
                          {division === 'projects' ? 'Project Lead: ' : 'Research Lead: '}
                        </span>
                        <span className="text-white font-medium">{project.manager}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}


function getPlacementBadge(placement: string) {
  const placementLower = placement.toLowerCase();
  if (placementLower.includes('1st') || placementLower.includes('first')) {
    return {
      gradient: 'from-yellow-400 to-yellow-600',
      glow: 'shadow-yellow-500/25',
      text: 'text-yellow-900'
    };
  } else if (placementLower.includes('2nd') || placementLower.includes('second')) {
    return {
      gradient: 'from-gray-300 to-gray-500',
      glow: 'shadow-gray-400/25',
      text: 'text-gray-900'
    };
  } else if (placementLower.includes('3rd') || placementLower.includes('third')) {
    return {
      gradient: 'from-orange-400 to-orange-600',
      glow: 'shadow-orange-500/25',
      text: 'text-orange-900'
    };
  }
  return {
    gradient: 'from-blue-400 to-blue-600',
    glow: 'shadow-blue-500/25',
    text: 'text-blue-900'
  };
};