import Image from 'next/image';

export default function Side() {
  return (
    <div className="flex w-full flex-col gap-y-8 text-center text-primary md:w-1/2">
      <Image
        src={`/assets/contact/contact.png`}
        alt=""
        className="mx-auto mb-10 object-contain"
        width={500}
        height={500}
      />
    </div>
  );
}
