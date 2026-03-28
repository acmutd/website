import { Division } from './divisionUtil';
import Image from 'next/image';

type Props = {
  division: Division;
  children: React.ReactNode;
};

export default function QuoteMarks(props: Props) {
  return (
    <div className="relative mx-2 my-2 flex flex-col w-full max-w-[60rem] py-6 md:py-8">
      {/* opening quote */}
      <Image
        src="/assets/divisions/shared/ACM Website Quote Left.png"
        className="absolute left-2 md:left-0 top-0 w-6 h-6 md:w-10 md:h-10 opacity-60"
        width={40}
        height={40}
        alt="Quote Left"
      />
      <div className="mx-auto w-full max-w-[42rem] px-8 md:px-16 leading-relaxed">{props.children}</div>
      {/* closing quote */}
      <Image
        src="/assets/divisions/shared/ACM Website Quote Left.png"
        className="absolute bottom-0 right-2 md:right-0 rotate-180 w-6 h-6 md:w-10 md:h-10 opacity-60"
        width={40}
        height={40}
        alt="Quote Right"
      />
    </div>
  );
}
