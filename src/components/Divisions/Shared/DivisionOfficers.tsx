import Image from 'next/image';
import { Division } from './divisionUtil';
import { getDirectors } from '@/../config/divisions.config';

type Props = {
  division: Division;
};

export default function DivisionOfficers({ division }: Props) {
  const directors = getDirectors(division);
  return (
    <div className="pt-12 text-[#CACACA]" id="directors">
      <h1 className="text-3xl md:text-4xl">meet the directors</h1>
      <div className="h-[1px] w-40 bg-[#cacacab0]" />

      <div className="flex flex-col gap-y-8 md:gap-y-12 pt-6 md:pt-10">
        {directors.map((director) => (
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left" key={director.name}>
            <Image
              src={director.image}
              alt="Projects Director"
              width="165"
              height="165"
              className="rounded-full object-cover w-[120px] h-[120px] md:w-[165px] md:h-[165px]"
            />
            <div className="md:pl-12 mt-4 md:mt-0">
              <h2 className="pb-3 md:pb-7 text-lg md:text-xl">{director.name}</h2>
              <p className="text-base md:text-lg">{director.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
