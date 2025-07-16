'use client';
import React from 'react';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="group flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/50 transition-all duration-300 animate-bounce"
        aria-label="Scroll to next section"
        style={{
          animationDuration: '1.5s',
        }}
      >
        <ChevronDown
          className="h-5 w-5 text-white/70 transition-colors duration-300"
        />
      </div>
    </div>
  );
};

export default ScrollIndicator;
