'use client';
import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const scrollToNextSection = () => {
    // First try to find the why-join section
    const whyJoinSection = document.getElementById('why-join');
    if (whyJoinSection) {
      whyJoinSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      return;
    }

    // Fallback: scroll down by viewport height
    const viewportHeight = window.innerHeight;
    window.scrollTo({
      top: viewportHeight,
      behavior: 'smooth'
    });
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
