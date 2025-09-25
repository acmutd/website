'use client';

import { useState, type ChangeEvent } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { OfficerSections } from '../../../lib/types';
import { type Officer } from '../../../config/officers.config';
import { type DivisionInfo } from './constants';
import DivisionIcon from './DivisionIcon';

type OfficerImageWithFallbackProps = {
  src: string;
  fallbackSrc: string;
  alt: string;
  className: string;
}

const OfficerImageWithFallback = (props: OfficerImageWithFallbackProps) => {
  const { src, fallbackSrc, alt, className } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
      height={80}
      width={80}
      className={className}
    />
  );
};

const OfficerCard = ({
  officer,
}: {
  officer: Officer & { division?: string };
}) => (
  <Card className="group border-gray-600/50 bg-black/20 backdrop-blur-sm transition-colors duration-200 hover:bg-black/40 hover:border-gray-500/70">
    <CardContent className="p-4">
      <div className="flex items-center space-x-4">
        <div className="relative h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20">
          <OfficerImageWithFallback
            src={officer.image}
            alt={officer.name}
            fallbackSrc="/assets/officer/OfficerImage.png"
            className="h-full w-full rounded-full object-cover ring-2 ring-gray-600/50 group-hover:ring-blue-400/50 transition-colors duration-200"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-medium text-white group-hover:text-blue-300 transition-colors duration-200">
            {officer.name}
          </h3>
          <p className="text-sm text-gray-300 leading-tight">{officer.position}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

type OfficerClientProps = {
  divisions: DivisionInfo[];
  allDivisions: DivisionInfo[];
  titleMap: Record<OfficerSections | 'all', React.ReactNode>;
  divisionOfficerMap: Record<string, Officer[]>;
}

export default function OfficerClient({
  divisions,
  allDivisions,
  titleMap,
  divisionOfficerMap,
}: OfficerClientProps) {
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
    <>
      <div className="mx-auto mb-8 max-w-md">
        <Input
          type="text"
          placeholder="Search officers by name..."
          value={searchQuery}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchQuery((e.target as HTMLInputElement).value)
          }
          className="h-12 border-gray-600/50 bg-gray-800/40 backdrop-blur-sm text-white placeholder:text-gray-400 focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-200"
        />
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="mb-8">
          <div className="overflow-x-auto pb-2">
            <TabsList className="inline-flex h-auto w-max min-w-full bg-black/20 backdrop-blur-sm p-1 rounded-lg">
              {allDivisions.map((division: DivisionInfo) => (
                <TabsTrigger
                  key={division.key}
                  value={division.key}
                  className="flex items-center gap-2 flex-shrink-0 px-4 py-2.5 text-sm font-medium transition-colors duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white hover:bg-gray-700/60 rounded-md"
                >
                  <DivisionIcon
                    divisionKey={division.key}
                    label={division.label}
                    size="sm"
                  />
                  {division.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
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
                {totalOfficers === 0 ? (
                  <div className="py-12 text-center">
                    <div className="text-gray-400 text-lg">
                      No officers found matching your search criteria.
                    </div>
                  </div>
                ) : (
                  <div className="space-y-12">
                    {groupedOfficers.map((group) => (
                      <div key={group.division.key} className="space-y-6">
                        <div className="text-center">
                          <div className="mb-4 flex justify-center">
                            {titleMap[group.division.key as OfficerSections]}
                          </div>
                          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
                          {group.officers.map((officer: Officer) => (
                            <OfficerCard
                              key={`${group.division.key}-${officer.name}`}
                              officer={officer}
                            />
                          ))}
                        </div>

                        <div className="text-center text-sm text-gray-400">
                          {group.officers.length} officer{group.officers.length !== 1 ? 's' : ''} in {group.division.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {totalOfficers > 0 && (
                  <div className="mt-16 pt-8 border-t border-gray-700/50 text-center text-gray-400">
                    {totalOfficers} officer{totalOfficers !== 1 ? 's' : ''} total
                  </div>
                )}
              </TabsContent>
            );
          } else {
            const officers = getFilteredOfficers(division.key);
            return (
              <TabsContent key={division.key} value={division.key} className="mt-0">
                <div className="text-center mb-8">
                  <div className="mb-4 flex justify-center">
                    {titleMap[division.key]}
                  </div>
                  <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
                </div>

                {officers?.length === 0 ? (
                  <div className="py-12 text-center">
                    <div className="text-gray-400 text-lg">
                      No officers found matching your search criteria.
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
                    {officers?.map((officer: Officer) => (
                      <OfficerCard
                        key={`${division.key}-${officer.name}`}
                        officer={officer}
                      />
                    ))}
                  </div>
                )}

                <div className="mt-8 text-center text-sm text-gray-400">
                  {officers?.length || 0} officer{officers?.length !== 1 ? 's' : ''} in {division.label}
                </div>
              </TabsContent>
            );
          }
        })}
      </Tabs>
    </>
  );
}
