'use client';

import { useState } from 'react';
import Image from 'next/image';

type OfficerImageWithFallbackProps = {
  src: string;
  fallbackSrc: string;
  alt: string;
  className: string;
};

export const OfficerImageWithFallback = (props: OfficerImageWithFallbackProps) => {
  const { src, fallbackSrc, alt, className } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
      height={80}
      width={80}
      className={className}
    />
  );
};
