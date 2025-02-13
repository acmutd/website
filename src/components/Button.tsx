import Link from 'next/link';

export function Button({ href, text, bgStyle }: { href: string; text: string; bgStyle: string }) {
  console.log(bgStyle);
  return (
    <Link
      href={href}
      className={`content z-20 flex h-[2.30rem] items-center justify-center rounded-lg border border-primary/50 bg-gray-300/10 bg-${bgStyle}-gradient px-4 py-2 text-base font-bold transition delay-75 duration-200 ease-in-out hover:scale-110 md:text-xl`}
    >
      {text}
    </Link>
  );
}
