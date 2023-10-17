import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function DivisionCard({ data, titleImage }: any) {
  return (
    <div className="flex flex-row items-center text-primary">
      {/* Replace png with 'cover.png' */}
      <div className="relative h-[50rem] w-full">
        <Image src="/assets/about/about.png" alt="" className="object-contain" fill />
      </div>
      <div className="flex w-full flex-col items-center gap-y-8">
        <div className="relative h-36 w-full">
          <Image
            src={`/assets/about/${data.section}/${data.section}.png`}
            alt=""
            className="object-contain"
            fill
          />
        </div>
        <div className="max-w-xl">{data.description}</div>
        <div className="grid grid-cols-2 gap-4">
          {data.links.map((obj: any, index: number) => {
            return (
              <Link
                href={`${obj.link}`}
                key={index}
                className={`bg-${data.section}-gradient px-14 py-1 font-bold text-xl`}
              >
                {obj.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}