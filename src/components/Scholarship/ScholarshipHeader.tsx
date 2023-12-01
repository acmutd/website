import Image from 'next/image';

export default function ScholarshipHeader() {
  return (
    <div className="relative overflow-hidden pl-60 pt-28">
      <h1 className="pb-2 pl-14 font-sans text-5xl font-bold text-white">acm scholarship</h1>
      <div className="flex w-screen items-center justify-between rounded-3xl border border-[#ffffff82] bg-slate-600 bg-opacity-5 bg-gradient-to-r from-[#ffffff1f] to-[#ffffff08] p-10 text-white backdrop:blur-xl">
        <div className="space-y-4">
          <p className="w-[33rem] text-lg">
            We started the &quot;Dr. Gopal Gupta Undergraduate Scholarship for Computer Science
            established by ACM 2020&quot; in honor of its namesake: Dr. Gopal Gupta served as the
            Computer Science (CS) department head at UT Dallas from 2009-2020.
          </p>
          <button className="bg-gradient-to-r from-[#008CF1] to-[#00ECEC] px-4 py-2 font-bold text-white">
            apply today
          </button>
        </div>
        <div className="hidden lg:block">
          <Image
            src="/assets/scholarship/ACM_Meeting.png"
            alt="Audience at ACM event"
            width={459}
            height={343}
            className="absolute right-40 top-0 hidden md:block"
          />
        </div>
      </div>
    </div>
  );
}
