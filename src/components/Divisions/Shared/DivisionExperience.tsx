import { getTestimony } from '@/../config/divisions.config';
import { DivisionProps } from './divisionUtil';
import QuoteMarks from './QuoteMarks';

export default function DivisionExperience(props: DivisionProps) {
  const quotes = getTestimony(props);
  return (
    <div id="experience" className="pt-12 text-[#CACACA]">
      <h1 className="text-3xl md:text-4xl mb-6 md:mb-8 underline underline-offset-8 decoration-1">experience</h1>

      <div className="flex flex-col space-y-2 md:space-y-3">
        {quotes.map((exp, i) => (
          <div className="relative flex flex-col" key={i}>
            <QuoteMarks division={props.division}>
              <p className="text-sm md:text-lg pl-2">{exp.quote}</p>
              {exp.name && <p className="text-right text-xs md:text-sm text-[#cacaca] mt-2">- {exp.name}</p>}
            </QuoteMarks>
          </div>
        ))}
      </div>
    </div>
  );
}
