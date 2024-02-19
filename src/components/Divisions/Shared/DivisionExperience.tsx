import { Division } from './divisionUtil';
import QuoteMarks from './QuoteMarks';

type Props = {
  division: Division;
};

type ExperienceMap = Record<Division, Array<string>>;

const EXPERIENCE_MAP: ExperienceMap = {
  education: [
    'It was an amazing experience and gave me all of the resources I needed to start full stack development.',
    'I not only learned so much in terms of technical skills, but I also met some wonderful people along the way',
  ],
  projects: [
    'It was an amazing experience and gave me all of the resources I needed to start full stack development.',
    'I not only learned so much in terms of technical skills, but I also met some wonderful people along the way',
  ],
  research: [],
};

export default function DivisionExperience({ division }: Props) {
  return (
    <div id="experience" className="pt-12 text-[#CACACA]">
      <h1 className="text-4xl">experience</h1>
      <div className="h-[1px] w-40 bg-[#cacacab0]" />

      <div className="flex flex-col space-y-3">
        {EXPERIENCE_MAP[division].map((exp, i) => (
          <div className="relative flex flex-col space-y-5" key={i}>
            <QuoteMarks division={division}>
              <p className="text-2xl">{exp}</p>
            </QuoteMarks>
          </div>
        ))}
      </div>
    </div>
  );
}
