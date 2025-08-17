import Image from 'next/image';
import { footerData } from '../../config/footer.config';
import Link from 'next/link';

export default function Footer() {
  const icons = Object.keys(footerData.community);
  const iconLinks = Object.values(footerData.community);

  return (
    <footer className="mt-16 grid grid-cols-1 gap-y-8 border-t-2 px-32 py-10 md:py-20 text-white md:grid-cols-2 lg:grid-cols-4"
            style={{
              borderTop: '1px solid transparent',
              borderImage: 'linear-gradient(90deg, #ADFF00 1.43%, #FFB900 9.58%, #EA7F01 19.25%, #FFC700 29.94%, #E10087 40.12%, #FE012E 50.3%, #BF01D3 60.48%, #9900E1 71.68%, #5200FF 81.86%, #008CF1 91.02%, #00ECEC 99.17%) 1'
            }}>
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
              <Link
                href={link.link}
                key={idx}
                className="text-primary hover:text-primary/80 transition-colors duration-200"
              >
                {link.text}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl">reach us at</h3>
        <a
          href={`mailto:${footerData.contact}`}
          className="text-primary hover:text-primary/80 transition-colors duration-200"
        >
          {footerData.contact}
        </a>
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
                  className="object-contain transition-transform duration-200 hover:scale-125"
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
