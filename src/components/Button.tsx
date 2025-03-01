import Link from 'next/link';

export function Button({
  href,
  text,
  bgStyle,
  width = '',
  height = 'h-[2.30rem]',
  textStyles = 'text-base',
  addtitionalStyles = '',
}: {
  href: string;
  text: string;
  bgStyle: string;
  width?: string;
  height?: string;
  textStyles?: string;
  addtitionalStyles?: string;
}) {
  return (
    <Link
      href={href}
      className={`content z-20 flex ${height} items-center justify-center rounded-lg border border-primary/50 bg-gray-300/10 bg-${bgStyle}-gradient px-4 py-2 font-bold transition delay-75 duration-200 ease-in-out hover:scale-110 ${width} ${textStyles} ${addtitionalStyles}`}
    >
      {text}
    </Link>
  );
}
