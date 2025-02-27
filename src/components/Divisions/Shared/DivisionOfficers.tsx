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
      <h1 className="text-4xl">meet the directors</h1>
      <div className="h-[1px] w-40 bg-[#cacacab0]" />

      <div className="flex w-[50rem] flex-col gap-y-12 pt-10">
        {directors.map((director) => (
          <div className="flex items-center" key={director.name}>
            <Image
              src={director.image}
              alt="Projects Director"
              width="165"
              height="165"
              className="rounded-full object-cover w-[165px] h-[165px]"
            />
            <div className="pl-12">
              <h2 className="pb-7 text-xl">{director.name}</h2>
              <p className="text-lg">{director.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
