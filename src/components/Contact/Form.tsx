'use client';

import Image from 'next/image';
import Link from 'next/link';
import { homePageData } from '../../../config/home.config';

export default function Form() {
  return (
    <div className="flex min-h-[700px] w-full flex-col gap-y-8 rounded-2xl border border-primary/50 bg-gray-300/10 p-12 text-primary md:w-1/2 md:rounded-l-2xl md:rounded-r-[0px] md:border-y md:border-l md:border-r-[0px]">
      <p className="text-2xl font-bold lg:text-3xl">connect with us!</p>
      <div className="my-auto flex h-3/5 flex-col gap-y-8">
        <Link href={homePageData.community.linkedin} passHref>
          <div className="flex cursor-pointer items-center gap-x-3 gap-y-1">
            <Image src="/assets/contact/linkedin.png" width={50} height={50} alt="LinkedIn" />
            <label className="cursor-pointer text-2xl font-semibold lg:text-3xl">LinkedIn</label>
          </div>
        </Link>
        <Link href={homePageData.community.instagram}>
          <div className="flex cursor-pointer items-center gap-x-3 gap-y-1">
            <Image src="/assets/contact/instagram.png" width={50} height={50} alt="Instagram" />
            <label className="cursor-pointer text-2xl font-semibold lg:text-3xl">Instagram</label>
          </div>
        </Link>
        <Link href={homePageData.community.discord}>
          <div className="flex cursor-pointer items-center gap-x-3 gap-y-1">
            <Image src="/assets/contact/discord.png" width={50} height={50} alt="Discord" />
            <label className="cursor-pointer text-2xl font-semibold lg:text-3xl">Discord</label>
          </div>
        </Link>
        <Link href="mailto:contact@acmutd.co">
          <div className="flex cursor-pointer items-center gap-x-3 gap-y-1">
            <Image src="/assets/contact/mail.png" width={50} height={50} alt="Mail" />
            <label className="cursor-pointer text-2xl font-semibold lg:text-3xl">
              contact@acmutd.co
            </label>
          </div>
        </Link>
      </div>
    </div>
  );
}
