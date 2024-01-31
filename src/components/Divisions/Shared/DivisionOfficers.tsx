import Image from 'next/image';
import { Division } from './divisionUtil';

type Props = {
  division: Division;
};

export default function DivisionOfficers({}: Props) {
  const directors = ['Saksham Sangrula', 'Saksham Sangrula'];

  return (
    <div className="pt-12 text-[#CACACA]" id="directors">
      <h1 className="text-4xl">meet the directors</h1>
      <div className="h-[1px] w-40 bg-[#cacacab0]" />

      <div className="flex w-[50rem] flex-col gap-y-12 pt-10">
        {directors.map((director, i) => (
          <div className="flex items-center" key={i}>
            <Image
              src="/assets/projects/projdir_1.jpeg"
              alt="Projects Director"
              width="165"
              height="165"
              className="rounded-full"
            />
            <div className="pl-12">
              <h2 className="pb-7 text-xl">{director}</h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum
                dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
