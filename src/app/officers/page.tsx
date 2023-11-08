import OfficerGrid from '@/components/Officers/OfficerGrid';
import OfficerHeader from '@/components/Officers/OfficerHeader';
import Image from 'next/image';

function Apply() {
  return (
    <div className="relative h-screen w-full bg-cover bg-center py-20">
      <div className="absolute right-20 top-28 hidden h-[105rem] w-0 flex-shrink-0 text-center text-[0.625rem] font-bold leading-[99.99%] tracking-[-0.01875rem] text-[#8A8A8A] md:block">
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
      <OfficerGrid type="board" count={12} />
      <OfficerGrid type="media" count={6} />
      <OfficerGrid type="research" count={12} />
      <OfficerGrid type="development" count={12} />
      <OfficerGrid type="projects" count={12} />
      <OfficerGrid type="education" count={12} />
      <OfficerGrid type="community" count={12} />
      <OfficerGrid type="hackutd" count={21} />
      <OfficerGrid type="industry" count={12} />
    </div>
  );
}

export default Apply;
