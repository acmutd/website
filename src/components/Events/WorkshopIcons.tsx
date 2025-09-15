import { ReactNode } from 'react';
import type { WorkShopLink } from '../../../lib/types';
import Image from 'next/image';

const GitHubIcon = (
  <div className="relative w-6 h-6 md:w-7 md:h-7 transition-all duration-300 group-hover/link:scale-110">
    <Image
      src="/assets/events/GHLogo.png"
      alt="Github"
      fill
      className="object-contain filter brightness-0 invert transition-all duration-300 group-hover/link:brightness-100"
    />
  </div>
);

const VideoIcon = (
  <div className="relative w-6 h-6 md:w-7 md:h-7 transition-all duration-300 group-hover/link:scale-110">
    <Image
      src="/assets/events/VideoIcon.png"
      alt="Video"
      fill
      className="object-contain filter brightness-0 invert transition-all duration-300 group-hover/link:brightness-100"
    />
  </div>
);

export const IconMap: Record<WorkShopLink['type'], ReactNode> = {
  github: GitHubIcon,
  video: VideoIcon,
};
