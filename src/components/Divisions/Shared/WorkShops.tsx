import Image from 'next/image';
import { workshops } from '../../../../config/education.config';

type Props = {
  sub: 'mentor' | 'tip';
};

export default function WorkShops({ sub }: Props) {
  const header = sub === 'mentor' ? 'workshops' : 'structure';
  const quotes = workshops[sub];
  return (
    <div id={header} className="pt-12 text-[#CACACA]">
      <h1 className="text-3xl md:text-4xl">{header}</h1>
      <div className="mb-10 md:mb-20 h-[1px] w-40 bg-[#cacacab0]" />

      <div className="w-full md:w-[50rem] text-[#CACACA]">
        {quotes.map((faq, i) => (
          <div className="space-y-2" key={i}>
            <p className="text-base md:text-lg">{faq.quote}</p>
            {faq.images && (
              <div className="flex flex-col md:flex-row py-6 md:py-10 gap-4 md:gap-0">
                {faq.images.map((image, i) => (
                  <Image
                    alt={`${sub}_${i}`}
                    src={image}
                    key={i}
                    height="178"
                    width="278"
                    className="w-full md:w-auto"
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
