import Image from 'next/image';

const OfficerHeader = () => {
  return (
    <div className="flex flex-col-reverse justify-between px-8 md:flex-row md:px-[11.5rem] md:pt-20">
      <div className="text-[#cacaca]">
        <h1 className="text-3xl font-bold lg:text-[2.5rem]">meet the team</h1>
        <p className="w-80 pt-8 text-xl md:w-96 lg:w-[42rem] lg:text-[1.5rem]">
          8 divisions. One goal.
          <br /> Here are the students keeping ACM in motion.
        </p>
      </div>
      <div className="m-10 h-36 w-36 rounded-full bg-gradient-to-br from-[#F4A3CB] from-10% to-[#dfc84f2b] to-90% p-2 lg:h-[17rem] lg:w-[17rem]"></div>
    </div>
  );
};

export default OfficerHeader;
