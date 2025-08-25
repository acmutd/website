import React from "react";

const faqs = [
  {
    question: "What impact has ACM UTD had on the tech community?",
    answer:
      "ACM is the largest student-run tech organization on campus, driving innovation and industry engagement. We host HackUTD, the largest university hackathon in Texas, attracting 1,000+ participants and nationwide sponsor attention. We run technical and developmental workshops each semester. Our alumni have gone on to work at FAANG companies, launch startups, and contribute to open-source communities.",
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