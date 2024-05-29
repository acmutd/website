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
      <h1 className="text-4xl">{header}</h1>
      <div className="mb-20 h-[1px] w-40 bg-[#cacacab0]" />

      <div className="w-[50rem] text-[#CACACA]">
        {quotes.map((faq, i) => (
          <div className="space-y-2" key={i}>
            <p>{faq.quote}</p>
            {faq.images && (
              <div className="flex py-10">
                {faq.images.map((image, i) => (
                  <Image alt={`${sub}_${i}`} src={image} key={i} height="178" width="278" />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
