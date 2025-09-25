'use client';

import { useMemo, useState, type ChangeEvent } from 'react';
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
};

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

const OfficerCard = ({ officer }: { officer: Officer & { division?: string } }) => (
  <Card className="group border-gray-600/50 bg-black/20 backdrop-blur-sm transition-colors duration-200 hover:border-gray-500/70 hover:bg-black/40">
    <CardContent className="p-4">
      <div className="flex items-center space-x-4">
        <div className="relative h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20">
          <OfficerImageWithFallback
            src={officer.image}
            alt={officer.name}
            fallbackSrc="/assets/officer/OfficerImage.png"
            className="h-full w-full rounded-full object-cover ring-2 ring-gray-600/50 transition-colors duration-200 group-hover:ring-blue-400/50"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-medium text-white transition-colors duration-200 group-hover:text-blue-300">
            {officer.name}
          </h3>
          <p className="text-sm leading-tight text-gray-300">{officer.position}</p>
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
};

export default function OfficerClient({
  divisions,
  allDivisions,
  titleMap,
  divisionOfficerMap,
}: OfficerClientProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDivisionOfficerMap = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    if (!query) {
      return divisionOfficerMap;
    }

    return Object.fromEntries(
      Object.entries(divisionOfficerMap).map(([divisionKey, officers]) => [
        divisionKey,
        officers.filter((officer: Officer) => officer.name.toLowerCase().includes(query)),
      ]),
    );
  }, [divisionOfficerMap, searchQuery]);

  const groupedOfficersForAll = useMemo(() => {
    return divisions
      .map((division) => {
        const divisionKey = division.key as OfficerSections;
        const officers = filteredDivisionOfficerMap[divisionKey];

        return {
          division,
          officers: officers,
        };
      })
      .filter((group) => group.officers.length > 0);
  }, [divisions, filteredDivisionOfficerMap]);

  const totalOfficersForAll = useMemo(() => {
    return groupedOfficersForAll.reduce((sum, group) => sum + group.officers.length, 0);
  }, [groupedOfficersForAll]);

  return (
    <>
      <div className="mx-auto mb-8 max-w-md">
        <Input
          type="text"
          placeholder="Search officers by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="h-12 border-gray-600/50 bg-gray-800/40 text-white backdrop-blur-sm transition-colors duration-200 placeholder:text-gray-400 focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="mb-8">
          <div className="overflow-x-auto pb-2">
            <TabsList className="inline-flex h-auto w-max min-w-full rounded-lg bg-black/20 p-1 backdrop-blur-sm">
              {allDivisions.map((division: DivisionInfo) => (
                <TabsTrigger
                  key={division.key}
                  value={division.key}
                  className="flex flex-shrink-0 items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-colors duration-200 hover:bg-gray-700/60 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white"
                >
                  <DivisionIcon divisionKey={division.key} label={division.label} size="sm" />
                  {division.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>

        {allDivisions.map((division: DivisionInfo) => {
          const isAllTab = division.key === 'all';

          if (isAllTab) {
            return (
              <TabsContent key={division.key} value={division.key} className="mt-0">
                {totalOfficersForAll === 0 ? (
                  <div className="py-12 text-center">
                    <div className="text-lg text-gray-400">
                      No officers found matching your search criteria.
                    </div>
                  </div>
                ) : (
                  <div className="space-y-12">
                    {groupedOfficersForAll.map((group) => (
                      <div key={group.division.key} className="space-y-6">
                        <div className="text-center">
                          <div className="mb-4 flex justify-center">
                            {titleMap[group.division.key as OfficerSections]}
                          </div>
                          <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
                        </div>

                        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                          {group.officers.map((officer: Officer) => (
                            <OfficerCard
                              key={`${group.division.key}-${officer.name}`}
                              officer={officer}
                            />
                          ))}
                        </div>

                        <div className="text-center text-sm text-gray-400">
                          {group.officers.length} officer{group.officers.length !== 1 ? 's' : ''} in{' '}
                          {group.division.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {totalOfficersForAll > 0 && (
                  <div className="mt-16 border-t border-gray-700/50 pt-8 text-center text-gray-400">
                    {totalOfficersForAll} officer{totalOfficersForAll !== 1 ? 's' : ''} total
                  </div>
                )}
              </TabsContent>
            );
          } else {
            const officers = filteredDivisionOfficerMap[division.key as OfficerSections];
            return (
              <TabsContent key={division.key} value={division.key} className="mt-0">
                <div className="mb-8 text-center">
                  <div className="mb-4 flex justify-center">{titleMap[division.key]}</div>
                  <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
                </div>

                {officers?.length === 0 ? (
                  <div className="py-12 text-center">
                    <div className="text-lg text-gray-400">
                      No officers found matching your search criteria.
                    </div>
                  </div>
                ) : (
                  <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {officers?.map((officer: Officer) => (
                      <OfficerCard key={officer.name} officer={officer} />
                    ))}
                  </div>
                )}

                <div className="mt-8 text-center text-sm text-gray-400">
                  {officers?.length || 0} officer{officers?.length !== 1 ? 's' : ''} in{' '}
                  {division.label}
                </div>
              </TabsContent>
            );
          }
        })}
      </Tabs>
    </>
  );
}
