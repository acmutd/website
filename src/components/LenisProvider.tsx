'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

type LenisProviderProps = {
  children: React.ReactNode;
};

export default function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false,
    });

    let animationFrameId = 0;

    const animate = (time: number) => {
      lenis.raf(time);
      animationFrameId = window.requestAnimationFrame(animate);
    };

    animationFrameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}