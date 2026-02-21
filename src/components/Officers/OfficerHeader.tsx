import Image from 'next/image';

const OfficerHeader = () => {
  return (
    <div className="relative flex items-center justify-center px-6 pt-28 md:px-10">
      <div className="relative z-10 flex w-full max-w-7xl flex-col-reverse items-center gap-8 lg:flex-row lg:justify-between lg:gap-16">
        <div className="flex flex-col items-center text-center lg:flex-1 lg:items-start lg:text-left">
          <div className="space-y-6">
            <h1 className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl xl:text-7xl">
              meet the team
            </h1>
            <p className="max-w-2xl text-lg font-medium leading-relaxed text-[#cacaca] md:text-xl lg:text-2xl">
              <span className="font-semibold text-white">8 divisions. One goal.</span>
              <br />
              <span className="text-gray-300">here are the students keeping ACM in motion.</span>
            </p>
          </div>
        </div>
        <div className="relative lg:flex-shrink-0">
          <div className="relative rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-2xl backdrop-blur-sm md:p-6">
            <Image
              src="/assets/3DPeechi.png"
              alt="Peechi"
              width={300}
              height={300}
              className="h-40 w-40 object-contain drop-shadow-2xl md:h-56 md:w-56 lg:h-72 lg:w-72"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficerHeader;
