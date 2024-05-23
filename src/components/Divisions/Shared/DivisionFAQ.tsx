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
    <div id="faq" className="pt-12 text-[#CACACA]">
      <h1 className="text-4xl ">frequently asked questions</h1>
      <div className="mb-20 h-[1px] w-40 bg-[#cacacab0]" />

      <div className="w-[50rem] text-[#CACACA]">
        {questions.map((faq, i) => (
          <div className="space-y-2 pb-10" key={i}>
            <h1 className="text-2xl font-semibold">{faq.question}</h1>
            <p>{faq.answer}</p>
            {faq.images && (
              <div className="flex py-10">
                {faq.images.map((image, i) => (
                  <Image
                    alt={`${props.division}_${i}`}
                    src={image}
                    key={i}
                    height="178"
                    width="278"
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
