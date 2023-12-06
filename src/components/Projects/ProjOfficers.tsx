import Image from 'next/image';

export default function ProjOfficers() {
  return (
    <div className="pt-12 text-[#CACACA]" id="#directors">
      <h1 className="text-4xl">meet the directors</h1>
      <div className="h-[1px] w-40 bg-gray-500" />

      <div className="flex flex-col gap-y-12 pt-10">
        <div className="flex items-center">
          <Image
            src="/assets/projects/projdir_1.jpeg"
            alt="Projects Director"
            width="165"
            height="165"
            className="rounded-full"
          />
          <div className="pl-12">
            <h2 className="pb-7 text-xl">Saksham Sangrula</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum
              dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
        <div className="flex">
          <Image
            src="/assets/projects/projdir_2.jpeg"
            alt="Projects Director"
            width="165"
            height="165"
            className="rounded-full"
          />
          <div className="pl-12">
            <h2 className="pb-7 text-xl">Saksham Sangrula</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum
              dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
