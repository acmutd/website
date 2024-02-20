import Image from 'next/image';
type Quote = {
  quote: string;
  images: string[];
};

const Quotes: Record<'tip' | 'mentor', Quote[]> = {
  mentor: [
    {
      quote:
        'The first step is to fill out our application. Our application consists of general questions intended to give us insight into your previous development and leadership experience. From these applications, we select the most promising candidates for one-on-one interviews. The interview is the last step of the application process. Based on the application and interview, we select the very best candidates to create around 8 teams of 5 people.',
      images: [
        '/assets/divisions/shared/proj_faq_0.png',
        '/assets/divisions/shared/proj_faq_1.png',
      ],
    },
  ],
  tip: [
    {
      quote:
        'The first step is to fill out our application. Our application consists of general questions intended to give us insight into your previous development and leadership experience. From these applications, we select the most promising candidates for one-on-one interviews. The interview is the last step of the application process. Based on the application and interview, we select the very best candidates to create around 8 teams of 5 people.',
      images: [
        '/assets/divisions/shared/proj_faq_0.png',
        '/assets/divisions/shared/proj_faq_1.png',
      ],
    },
  ],
};

type Props = {
  sub: 'mentor' | 'tip';
};

export default function WorkShops({ sub }: Props) {
  const header = sub === 'mentor' ? 'workshops' : 'structure';
  const quotes = Quotes[sub];
  return (
    <div id={header} className="pt-12 text-[#CACACA]">
      <h1 className="text-4xl">{header}</h1>
      <div className="mb-20 h-[1px] w-40 bg-[#cacacab0]" />

      <div className="w-[50rem] text-[#CACACA]">
        {quotes.map((faq, i) => (
          <div className="space-y-2 pb-10" key={i}>
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
