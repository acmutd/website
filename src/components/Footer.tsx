import Image from 'next/image';
import { footerData } from '../../config/footer.config';
import Link from 'next/link';

export default function Footer() {
  const icons = Object.keys(footerData.community);
  const iconLinks = Object.values(footerData.community);

  return (
    <footer className="mt-16 grid grid-cols-1 gap-y-8 border-t-2 px-32 py-20 text-white md:grid-cols-2 lg:grid-cols-4">
      <Image
        src="/assets/footer/logo.png"
        alt=""
        className="object-contain"
        width={75}
        height={75}
      />
      <div className="flex flex-col gap-y-3">
        <h3 className="text-xl">acm at utd</h3>
        <div className="flex flex-col">
          {footerData.links.map((link, idx) => {
            return (
              <Link href={link.link} key={idx}>
                {link.text}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl">reach us at</h3>
        <a href={`mailto:${footerData.contact}`}>{footerData.contact}</a>
      </div>
      <div>
        <h3 className="text-xl">connect with us</h3>
        <div className="grid w-fit grid-cols-3 gap-x-6 gap-y-3">
          {icons.map((icon: string, idx: number) => {
            return (
              <a href={iconLinks[idx]} key={idx}>
                <Image
                  src={`/assets/home/icons/${icon}.png`}
                  alt=""
                  className="object-contain"
                  width={25}
                  height={25}
                />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
