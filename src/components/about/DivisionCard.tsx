import Link from 'next/link';
import React from 'react';

export default function DivisionCard({ data, titleImage }: any) {
  return (
    <div className="flex flex-row text-primary items-center">
      {/* Replace png with 'cover.png' */}
      <img
        src="/assets/about/about.png"
        alt=""
        className="h-auto w-2/5"
      />
      <div className="flex flex-col items-center w-full gap-y-8">
        <img src={`/assets/about/${data.section}/${data.section}.png`} alt="" className='h-auto w-2/5' />
        <div className='max-w-xl'>{data.description}</div>
        <div className='grid grid-cols-2 gap-4'>
          {data.links.map((obj: any, index: number) => {
            return (
              <Link
                href={`${obj.link}`}
                key={index}
                className={`bg-${data.section}-gradient px-14 py-1`}
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