import { getTestimony } from '@/../config/divisions.config';
import { DivisionProps } from './divisionUtil';
import QuoteMarks from './QuoteMarks';

export default function DivisionExperience(props: DivisionProps) {
  const quotes = getTestimony(props);
  return (
    <div id="experience" className="pt-12 text-[#CACACA]">
      <h1 className="text-4xl">experience</h1>
      <div className="h-[1px] w-40 bg-[#cacacab0]" />

      <div className="flex flex-col space-y-3">
        {quotes.map((exp, i) => (
          <div className="relative flex flex-col space-y-5" key={i}>
            <QuoteMarks division={props.division}>
              <p className="text-lg">{exp.quote}</p>
              {exp.name && <p className="text-right text-sm text-[#cacaca]">- {exp.name}</p>}
            </QuoteMarks>
          </div>
        ))}
      </div>
    </div>
  );
}
