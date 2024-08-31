import OfficerGrid from '@/components/Officers/OfficerGrid';
import OfficerHeader from '@/components/Officers/OfficerHeader';
import Image from 'next/image';

function Apply() {
  return (
    <div className="relative h-full w-full bg-[url(/assets/officer/officer-bg.png)] bg-cover py-20">
      <div className="absolute right-20 top-28 hidden h-[105rem] w-0 flex-shrink-0 text-center text-[0.625rem] font-bold leading-[99.99%] tracking-[-0.01875rem] text-[#8A8A8A]">
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
      <div className="absolute right-24 top-72 hidden md:block">
        <Image src="/assets/officer/divisions.png" alt="Division" width={40} height={463} />
      </div>
      <OfficerHeader />
      <OfficerGrid type="board" />
      <OfficerGrid type="media" />
      <OfficerGrid type="research" />
      <OfficerGrid type="development" />
      <OfficerGrid type="projects" />
      <OfficerGrid type="education" />
      <OfficerGrid type="community" />
      <OfficerGrid type="hackutd" />
      <OfficerGrid type="industry" />
    </div>
  );
}

export default Apply;
