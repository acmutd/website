'use client';
import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  const scrollToWhyJoin = () => {
    const whyJoinSection = document.getElementById('why-join');
    if (whyJoinSection) {
      whyJoinSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <button
        onClick={scrollToWhyJoin}
        className="group flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/50 transition-all duration-300 animate-bounce hover:border-white/80 hover:bg-white/10 cursor-pointer"
        aria-label="Scroll to Why Join ACM section"
        style={{
          animationDuration: '1.5s',
        }}
      >
        <ChevronDown
          className="h-5 w-5 text-white/70 transition-colors duration-300 group-hover:text-white/90"
        />
      </button>
    </div>
  );
};

export default ScrollIndicator;
