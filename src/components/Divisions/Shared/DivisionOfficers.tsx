import Image from 'next/image';
import { Division } from './divisionUtil';
import { directors as educationDirectors, type Director } from '@/../config/education.config';

type Props = {
  division: Division;
};

const directorMap: Record<Division, Array<Director>> = {
  education: educationDirectors,
  projects: [],
  research: [],
};

export default function DivisionOfficers({ division }: Props) {
  const directors = directorMap[division];
  return (
    <div className="pt-12 text-[#CACACA]" id="directors">
      <h1 className="text-4xl">meet the directors</h1>
      <div className="h-[1px] w-40 bg-[#cacacab0]" />

      <div className="flex w-[50rem] flex-col gap-y-12 pt-10">
        {directors.map((director) => (
          <div className="flex items-center" key={director.name}>
            <Image
              src="/assets/projects/projdir_1.jpeg"
              alt="Projects Director"
              width="165"
              height="165"
              className="rounded-full"
            />
            <div className="pl-12">
              <h2 className="pb-7 text-xl">{director.name}</h2>
              <p className="text-lg">{director.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
