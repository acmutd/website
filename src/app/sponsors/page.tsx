import React from "react";

const faqs = [
  {
    question: "What impact has ACM UTD had on the tech community?",
    answer:
      "ACM is the largest student-run tech organization on campus, driving innovation and industry engagement. We host HackUTD, the largest university hackathon in Texas, attracting 1,000+ participants and nationwide sponsor attention. We run technical and developmental workshops each semester, allowing companies to connect with the top motivated students. Our alumni have gone on to work at FAANG companies, launch startups, and contribute to open-source communities.",
  },
  {
    question: "What sponsorships opportunities are available?",
    answer: "ACM UTD offers four tiers of sponsorships(Bronze, Silver, Gold, Platinum). Some of the perks include logo placement on ACM’s website, accessed by 100s of UTD students and visitors everyday; exclusive access to ACM member resumes; social media spotlights across all our platforms reaching about 2000+ followers; industry event participation that connect sponsors with top UTD students, kickoff speaking opportunities to promote your company to new members, and ACM promotions of open opportunities."
  },
  {
    question: "How large is ACM UTD's reach?",
    answer: "ACM UTD is the largest student tech organization at UT Dallas, with over 2,000 members and a mailing list reaching thousands more. Our events usually draw 100+ students, giving sponsors access to a large and active student tech community."
  },
  {
    question: "What outcomes can we expect from sponsoring ACM UTD?",
    answer:
      "Sponsors have achieved direct recruiting success, strong brand recognition on campus, and meaningful engagement with future industry leaders. Many of our partners have reported internship hires and lasting relationships with students after collaborating with us.",
  },
  {
    question: "What types of students engage with ACM at UTD?",
    answer:
      "While most members are computer science majors, our events attract students from engineering, ITS, math, and other STEM fields. Members range from first-year students eager to learn to graduates with multiple internships and research experience, providing sponsors with access to a wide talent pool.",
  },
];

function Sponsor() {
  return (
    <div className="h-fit w-full py-20 flex flex-col items-center px-4 sm:px-6 md:px-8">
      {/* Sponsors Grid */}
      <div className="w-full max-w-5xl mx-auto rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md p-8 mb-12 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          our sponsors
        </h2>
        <p className="text-center text-lg md:text-xl text-white/80 mb-12">
          Our sponsors are at the heart of what we do. Through their support,
          we're able to provide students with top-tier resources, events, and
          opportunities that help them grow both professionally and personally.
        </p>
        <div className="flex flex-col gap-8 items-center">
          {/* Gold */}
          <div className="relative bg-yellow-400/20 rounded-xl p-6 w-full max-w-2xl flex flex-col items-center">
            <span className="mb-4 text-xs uppercase text-yellow-400 font-bold tracking-wide">
              gold
            </span>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-8 w-full mb-4">
              <img
                src="/assets/home/sponsors/statefarm.png"
                alt="StateFarm"
                className="h-12 w-full object-contain mx-auto"
              />
              <img
                src="/assets/home/sponsors/paycom.png"
                alt="Paycom"
                className="h-12 w-full object-contain mx-auto"
              />
              <img
                src="/assets/home/sponsors/CBRE.png"
                alt="CBRE"
                className="h-12 w-full object-contain mx-auto"
              />
              <img
                src="/assets/home/sponsors/eogresources.png"
                alt="EOG Resources"
                className="h-12 w-full object-contain mx-auto"
              />
              <div className="lg:col-span-2 flex justify-center">
                <img
                  src="/assets/home/sponsors/goldmansachs.png"
                  alt="Goldman Sachs"
                  className="h-20 max-w-[140px] w-full object-contain mx-auto"
                />
              </div>
            </div>
          </div>
          {/* Silver */}
          <div className="relative bg-gray-300/20 rounded-xl p-6 w-full max-w-2xl flex flex-col items-center space-y-4 mb-12">
            <span className="absolute top-4 left-1/2 -translate-x-1/2 text-xs uppercase text-gray-300 font-bold tracking-wide">
              silver
            </span>
            <div className="flex justify-center items-center w-full">
              <img
                src="/assets/home/sponsors/visa.png"
                alt="Visa"
                className="h-12 object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-center text-3xl sm:text-4xl font-bold pb-12 sm:pb-20">
        sponsor faq
      </h1>

      <div className="flex flex-col gap-y-12 w-full max-w-5xl">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="rounded-3xl border border-primary/50 bg-gray-600/10 px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10"
          >
            <h2 className="md:text-lg sm:text-xl font-bold mb-4">
              Q: {faq.question}
            </h2>
            <p className="md:text-l sm:text-base text-gray-300">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sponsor;