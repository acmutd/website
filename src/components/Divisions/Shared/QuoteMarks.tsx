import { Division } from './divisionUtil';
import Image from 'next/image';

type Props = {
  division: Division;
  children: React.ReactNode;
};

export default function QuoteMarks(props: Props) {
  return (
    <div className="relative mx-2 my-4 md:m-5 flex min-h-[100px] md:h-[150px] w-full max-w-[60rem]">
      <Image
        src="/assets/divisions/shared/ACM Website Quote Left.png"
        className="absolute left-2 md:left-0 top-0 w-6 h-6 md:w-[55px] md:h-[55px]"
        width="55"
        height="55"
        alt="Quote Left"
      />
      <div className="mx-auto w-full max-w-[42rem] px-8 md:px-16">{props.children}</div>
      <Image
        src="/assets/divisions/shared/ACM Website Quote Left.png"
        className="absolute bottom-0 right-2 md:right-0 rotate-180 w-6 h-6 md:w-[55px] md:h-[55px]"
        width="55"
        height="55"
        alt="Quote Right"
      />
    </div>
  );
}

function QuoteSVG(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="55"
      height="55"
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <rect width="55" height="55" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1" />
        <image id="image0_691_324" width="100" height="100" />
      </defs>
    </svg>
  );
}
