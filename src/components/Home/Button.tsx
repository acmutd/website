import Link from 'next/link';

export function Button({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="content z-20 flex h-[2.30rem] w-fit items-center justify-center rounded-lg border border-primary/50 bg-gray-300/10 bg-acm-gradient px-4 py-2 text-base font-bold transition delay-75 duration-200 ease-in-out hover:scale-110 md:text-xl"
    >
      {text}
    </Link>
  );
}
