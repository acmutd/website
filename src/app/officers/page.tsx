'use client';

import OfficerHeader from '@/components/Officers/OfficerHeader';
import Image from 'next/image';
import { OfficerSections } from '../../../lib/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { useState, type ChangeEvent } from 'react';
import { divisionOfficerMap, type Officer } from '../../../config/officers.config';
import { Card, CardContent } from '@/components/ui/card';

type DivisionInfo = { key: OfficerSections | 'all'; label: string; icon?: string };

const divisions: DivisionInfo[] = [
  { key: 'board', label: 'Board' },
  { key: 'media', label: 'Media' },
  { key: 'research', label: 'Research' },
  { key: 'development', label: 'Development' },
  { key: 'projects', label: 'Projects' },
  { key: 'education', label: 'Education' },
  { key: 'community', label: 'Community' },
  { key: 'hackutd', label: 'HackUTD' },
  { key: 'industry', label: 'Industry' },
  { key: 'advisor', label: 'Advisor' },
];

// Create a special "all" division for displaying all officers
const allDivisions: DivisionInfo[] = [
  { key: 'all' as OfficerSections, label: 'All' },
  ...divisions,
];

const titleMap: Record<OfficerSections | 'all', React.ReactNode> = {
  all: <></>,
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
  style: React.CSSProperties;
}

const OfficerImageWithFallback = (props: OfficerImageWithFallbackProps) => {
  const { src, fallbackSrc, alt, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
      height={110}
      width={110}
    />
  );
};

const OfficerCard = ({
  officer,
  showDivision = false,
  index = 0,
}: {
  officer: Officer & { division?: string };
  showDivision?: boolean;
  index?: number;
}) => (
  <Card
    className="group border-gray-700 bg-black/20 transition-all duration-300 hover:scale-105 hover:bg-black/40 animate-in fade-in-0 slide-in-from-bottom-2"
    style={{
      animationDelay: `${index * 50}ms`,
      animationDuration: '400ms',
      animationFillMode: 'both'
    }}
  >
    <CardContent className="p-3 sm:p-4">
      <div className="flex items-center space-x-3 sm:space-x-4">
        <div className="relative h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20 md:h-24 md:w-24">
          <OfficerImageWithFallback
            style={{ objectFit: 'cover' }}
            src={officer.image}
            alt={officer.name}
            fallbackSrc="/assets/officer/OfficerImage.png"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-semibold text-white transition-colors group-hover:text-blue-300 sm:text-base md:text-lg">
            {officer.name}
          </h3>
          <p className="text-xs leading-tight text-gray-300 sm:text-sm">{officer.position}</p>
          {showDivision && officer.division && (
            <p className="mt-1 text-xs text-gray-400">{officer.division}</p>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

function Officers() {
  const [searchQuery, setSearchQuery] = useState('');

  const getFilteredOfficers = (divisionKey: OfficerSections | 'all') => {
    if (divisionKey !== 'all') {
      const officers = divisionOfficerMap[divisionKey];
      if (!searchQuery.trim()) return officers;

      return officers.filter((officer: Officer) =>
        officer.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    return null;
  };

  const getGroupedOfficersForAll = () => {
    return divisions
      .map((division) => {
        const officers = divisionOfficerMap[division.key as OfficerSections];
        const filteredOfficers = !searchQuery.trim()
          ? officers
          : officers.filter((officer: Officer) =>
              officer.name.toLowerCase().includes(searchQuery.toLowerCase()),
            );

        return {
          division,
          officers: filteredOfficers,
        };
      })
      .filter((group) => group.officers.length > 0);
  };

  return (
    <div className="relative h-full w-full bg-[url(/assets/officer/officer-bg.png)] bg-cover py-8 sm:py-12 md:py-20">
      <div className="absolute right-4 top-16 hidden h-[105rem] w-0 flex-shrink-0 text-center text-[0.625rem] font-bold leading-[99.99%] tracking-[-0.01875rem] text-[#8A8A8A] sm:right-20 sm:top-28 md:block">
        <p>
          0 1 0 0 0 0 0 1 0 1 0 0 0 0 1 1 0 1 0 0 1 1 0 1 0 0 1 0 0 0 0 0 0 1 0 1 0 0 0 0 0 1 0 1 0
          0 1 0 0 1 0 0 1 1 1 1 0 1 0 0 1 0 1 0 0 1 0 0 0 1 0 1 0 1 0 0 0 0 1 1 0 1 0 1 0 1 0 0 0 1
          0 1 0 0 1 1 0 0 1 0 0 0 0 0 0 1 0 0 0 0 0 1 0 1 0 0 0 0 1 1 0 1 0 0 1 1 0 1 0 0 1 0 0 0 0
          0 0 1 0 1 0 0 0 0 0 1 0 1 0 0 1 0 0 1 0 0 1 1 1 1 0 1 0 0 1 0 1 0 0 1 0 0 0 1 0 1 0 1 0 0
          0 0 1 1 0 1 0 1 0 1 0 0 0 1 0 1 0 0 1 1
        </p>
        <p>
          0 1 0 0 0 0 0 1 0 1 0 0 0 0 1 1 0 1 0 0 1 1 0 1 0 0 1 0 0 0 0 0 0 1 0 1 0 0 0 0 0 1 0 1 0
          0 1 0 0 1 0 0 1 1 1 1 0 1 0 0 1 0 1 0 0 1 0 0 0 1 0 1 0 1 0 0 0 0 1 1 0 1 0 1 0 1 0 0 0 1
          0 1 0 0 1 1 0 0 1 0 0 0 0 0 0 1 0 0 0 0 0 1 0 1 0 0 0 0 1 1 0 1 0 0 1 1 0 1 0 0 1 0 0 0 0
          0 0 1 0 1 0 0 0 0 0 1 0 1 0 0 1 0 0 1 0 0 1 1 1 1 0 1 0 0 1 0 1 0 0 1 0 0 0 1 0 1 0 1 0 0
          0 0 1 1 0 1 0 1 0 1 0 0 0 1 0 1 0 0 1 1
        </p>
        <p>
          0 1 0 0 0 0 0 1 0 1 0 0 0 0 1 1 0 1 0 0 1 1 0 1 0 0 1 0 0 0 0 0 0 1 0 1 0 0 0 0 0 1 0 1 0
          0 1 0 0 1 0 0 1 1 1 1 0 1 0 0 1 0 1 0 0 1 0 0 0 1 0 1 0 1 0 0 0 0 1 1 0 1 0 1 0 1 0 0 0 1
          0 1 0 0 1 1 0 0 1 0 0 0 0 0 0 1 0 0 0 0 0 1 0 1 0 0 0 0 1 1 0 1 0 0 1 1 0 1 0 0 1 0 0 0 0
          0 0 1 0 1 0 0 0 0 0 1 0 1 0 0 1 0 0 1 0 0 1 1 1 1 0 1 0 0 1 0 1 0 0 1 0 0 0 1 0 1 0 1 0 0
          0 0 1 1 0 1 0 1 0 1 0 0 0 1 0 1 0 0 1 1
        </p>
      </div>
      <div className="absolute right-4 top-48 hidden sm:right-12 sm:top-60 md:right-24 md:top-72 md:block">
        <Image src="/assets/officer/divisions.png" alt="Division" width={40} height={463} />
      </div>
      <OfficerHeader />

      <div className="container mx-auto mt-4 px-3 sm:mt-8 sm:px-4 lg:px-16">
        <div className="mx-auto mb-6 max-w-sm sm:mb-8 sm:max-w-md">
          <Input
            type="text"
            placeholder="Search officers by name"
            value={searchQuery}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchQuery((e.target as HTMLInputElement).value)
            }
            className="h-10 border-gray-600 bg-black/20 text-sm text-white placeholder:text-gray-400 focus:border-blue-500 sm:h-11 sm:text-base"
          />
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="mb-8 overflow-x-auto">
            <TabsList className="inline-flex h-auto w-max min-w-full bg-black/30 p-1">
              {allDivisions.map((division: DivisionInfo) => (
                <TabsTrigger
                  key={division.key}
                  value={division.key}
                  className="flex-shrink-0 px-3 py-2 text-xs font-medium transition-all duration-300 ease-in-out data-[state=active]:bg-acm-gradient data-[state=active]:text-white data-[state=active]:scale-105 hover:scale-105 hover:bg-white/10 sm:px-4 sm:text-sm"
                >
                  {division.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {allDivisions.map((division: DivisionInfo) => {
            const isAllTab = division.key === 'all';

            if (isAllTab) {
              const groupedOfficers = getGroupedOfficersForAll();
              const totalOfficers = groupedOfficers.reduce(
                (sum, group) => sum + group.officers.length,
                0,
              );

              return (
                <TabsContent key={division.key} value={division.key} className="mt-0">
                  <div className="mb-6 animate-in fade-in-0 slide-in-from-top-2 duration-500">{titleMap[division.key]}</div>

                  {totalOfficers === 0 ? (
                    <div className="py-8 text-center text-gray-400">
                      No officers found matching your search criteria.
                    </div>
                  ) : (
                    <div className="space-y-8 sm:space-y-12">
                      {groupedOfficers.map((group) => (
                        <div key={group.division.key} className="space-y-4 sm:space-y-6">
                          <div className="sm:text-left animate-in fade-in-0 slide-in-from-left-2 duration-500" style={{ animationDelay: '200ms' }}>
                            <div className="mb-3 text-[#cacaca] sm:mb-4">
                              {titleMap[group.division.key as OfficerSections]}
                            </div>
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                          </div>

                          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2 xl:grid-cols-3">
                            {group.officers.map((officer: Officer, index: number) => (
                              <OfficerCard
                                key={`${group.division.key}-${officer.name}`}
                                officer={officer}
                                showDivision={false}
                                index={index}
                              />
                            ))}
                          </div>

                          <div className="text-center text-xs text-gray-400 sm:text-sm">
                            {group.officers.length} officer{group.officers.length !== 1 ? 's' : ''}{' '}
                            in {group.division.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                    {totalOfficers} officer{totalOfficers !== 1 ? 's' : ''} total
                  </div>
                </TabsContent>
              );
              } else {
                const officers = getFilteredOfficers(division.key);
                return (
                  <TabsContent key={division.key} value={division.key} className="mt-0">
                    <div className="mb-4 sm:mb-6 animate-in fade-in-0 slide-in-from-top-2 duration-500">{titleMap[division.key]}</div>

                    {officers?.length === 0 ? (
                      <div className="py-8 text-center text-gray-400">
                        No officers found matching your search criteria.
                      </div>
                    ) : (
                      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2 xl:grid-cols-3">
                        {officers?.map((officer: Officer, index: number) => (
                          <OfficerCard
                            key={`${division.key}-${officer.name}`}
                            officer={officer}
                            showDivision={false}
                            index={index}
                          />
                        ))}
                      </div>
                    )}

                    <div className="mt-4 text-center text-xs text-gray-400 sm:mt-6 sm:text-sm">
                      {officers?.length || 0} officer{officers?.length !== 1 ? 's' : ''} in{' '}
                      {division.label}
                    </div>
                  </TabsContent>
                );
              }
          })}
        </Tabs>
      </div>
    </div>
  );
}

export default Officers;
