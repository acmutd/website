import Image from 'next/image';

export default function Side() {
  return (
    <div className="flex flex-col gap-y-8 text-center text-primary">
      <h1 className="text-3xl font-semibold lg:text-4xl">contact us</h1>
      <Image
        src={`/assets/contact/contact-img.png`}
        alt=""
        className="mb-10 object-contain"
        width={500}
        height={500}
      />
      <div className="flex flex-col gap-y-2">
        <a href="mailto:contact@acmutd.co">contact@acmutd.co</a>
        <p>800 West Campbell Rd</p>
      </div>
    </div>
  );
}
