import Image from 'next/image';
import { DivisionProps } from './divisionUtil';
import { getFAQ } from '@/../config/divisions.config';

export default function DivisionFAQ(props: DivisionProps) {
  const questions = getFAQ(props);

  return (
    <div id="faq" className="pt-12 text-[#CACACA] w-full max-w-4xl">
      <h1 className="text-3xl md:text-4xl">frequently asked questions</h1>
      <div className="mb-10 md:mb-20 h-[1px] w-40 bg-[#cacacab0]" />

      <div className="w-full max-w-4xl text-[#CACACA]">
        {questions.map((faq, i) => (
          <div className="space-y-3 pb-8 md:pb-12" key={i}>
            <h2 className="flex items-start text-lg md:text-xl text-white">
              <span className="mr-3 text-xl md:text-2xl">•</span>
              {faq.question}
            </h2>
            <p className="pl-6 text-base md:text-[#CACACA] leading-relaxed">{faq.answer}</p>
            {faq.images && (
              <div className="flex flex-col md:flex-row py-6 md:py-10 pl-6 gap-4 md:gap-0">
                {faq.images.map((image, i) => (
                  <Image
                    alt={`${props.division}_${i}`}
                    src={image}
                    key={i}
                    height="178"
                    width="278"
                    className="md:mr-4 w-full md:w-auto"
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
