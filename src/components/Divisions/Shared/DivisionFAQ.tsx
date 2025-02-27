import Image from 'next/image';
import { Division } from './divisionUtil';
import { getFAQ } from '@/../config/divisions.config';

type Props =
  | {
      division: Exclude<Division, 'education'>;
    }
  | {
      division: 'education';
      sub: 'tip' | 'mentor';
    };

export default function DivisionFAQ(props: Props) {
  const questions = getFAQ(props);

  return (
    <div id="faq" className="pt-12 text-[#CACACA] max-w-4xl">
      <h1 className="text-4xl ">frequently asked questions</h1>
      <div className="mb-20 h-[1px] w-40 bg-[#cacacab0]" />

      <div className="max-w-4xl text-[#CACACA]">
        {questions.map((faq, i) => (
          <div className="space-y-3 pb-12" key={i}>
            <h2 className="flex items-start text-xl text-white">
              <span className="mr-3 text-2xl">•</span>
              {faq.question}
            </h2>
            <p className="pl-6 text-[#CACACA] leading-relaxed">{faq.answer}</p>
            {faq.images && (
              <div className="flex py-10 pl-6">
                {faq.images.map((image, i) => (
                  <Image
                    alt={`${props.division}_${i}`}
                    src={image}
                    key={i}
                    height="178"
                    width="278"
                    className="mr-4"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
