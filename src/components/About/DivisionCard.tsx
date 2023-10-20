import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Division, DivisionLink } from '../../../lib/types';

interface DivisionCardProps {
  data: Division;
}

export default function DivisionCard({ data }: DivisionCardProps) {
  return (
    <div
      className={`bg-[url(/assets/about/${data.section}/${data.section}-bg.png)] bg-cover bg-center bg-no-repeat`}
    >
      <div className="mx-auto w-full max-w-[120rem]">
        <div
          className={`flex flex-col-reverse items-center gap-x-4 gap-y-8  p-6 text-primary lg:flex-row lg:p-0`}
        >
          {/* Replace png with 'cover.png' */}
          <div className="h-fit w-full lg:max-w-max">
            <Image
              src="/assets/about/about.jpg"
              alt="ACM UTD"
              width={1000}
              height={1000}
              className="object-contain"
            />
          </div>
          <div className="flex w-full flex-col items-start md:items-center">
            <div className="relative h-36 w-full">
              <Image
                src={`/assets/divisions/${data.section}.png`}
                alt=""
                className="object-contain"
                fill
              />
            </div>
            <h1 className="max-w-lg text-start">{data.description}</h1>
            <div className="mt-4 grid w-full max-w-lg grid-cols-2 gap-4">
              {data.links.map((obj: DivisionLink, index: number) => {
                return (
                  <Link
                    href={`${obj.link.startsWith('/') ? obj.link : `https://${obj.link}`}`}
                    key={index}
                    className={`flex items-center justify-center bg-${data.section}-gradient h-[2.30rem] text-base font-bold md:text-xl`}
                  >
                    {obj.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
