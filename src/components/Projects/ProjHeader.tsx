import Image from 'next/image';
export function ProjHeader() {
  return (
    <div className="pl-28 pt-40 font-sans">
      <Image src="/assets/about/projects/projects.png" alt="ACM Projects" width={272} height={80} />
      <p className="w-[55rem] pt-5 text-2xl text-[#CACACA]">
        ACM Projects is a semester-long guided projects initiative for those new to software
        development, teaching collaborative tools, new technologies, and core development principles
        complimentary to curriculum.
      </p>

      <button className="mt-20 bg-gradient-to-r from-[#008CF1] from-[7.24%] to-[#00ECEC] px-5 py-2 text-xl text-white">
        apply today
      </button>
    </div>
  );
}
