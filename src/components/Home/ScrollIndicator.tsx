'use client';
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ScrollIndicator = () => {
  const router = useRouter();

  const scrollToNextSection = () => {
    const whyJoinSection = document.getElementById('why-join');
    if (whyJoinSection) {
      whyJoinSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      return;
    }

    router.push('#why-join');
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={scrollToNextSection}
        className="group flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/50 transition-all animate-[bounce_1.5s_ease-in-out_infinite] hover:border-white/80 hover:bg-white/10 cursor-pointer"
        aria-label="Scroll to next section"
      >
        <ChevronDown
          className="h-5 w-5 text-white/70 transition-colors duration-300 group-hover:text-white/90"
        />
      </button>
    </div>
  );
};

export default ScrollIndicator;
