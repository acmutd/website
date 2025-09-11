import { Division } from './divisionUtil';
import Image from 'next/image';

type Props = {
  division: Division;
  children: React.ReactNode;
};

export default function QuoteMarks(props: Props) {
  return (
    <div className="relative mx-2 my-4 md:m-5 flex flex-col min-h-[100px] md:h-[150px] w-full max-w-[60rem]">
      <Image
        src="/assets/divisions/shared/ACM Website Quote Left.png"
        className="left-2 md:left-0 top-0 w-6 h-6 md:w-[55px] md:h-[55px]"
        width="55"
        height="55"
        alt="Quote Left"
      />
      <div className="mx-auto w-full max-w-[42rem] px-8 md:px-16 font-bold">{props.children}</div>
      <Image
        src="/assets/divisions/shared/ACM Website Quote Left.png"
        className="bottom-0 right-2 md:right-0 rotate-180 w-6 h-6 md:w-[55px] md:h-[55px] self-end"
        width="55"
        height="55"
        alt="Quote Right"
      />
    </div>
  );
}
