'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const WhyJoin: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const reasons = [
    {
      title: 'Meet Other Developers',
      description: 'Connect with a community of students who are into coding, building, and tech.'
    },
    {
      title: 'Learn By Doing',
      description: 'Workshops and coding events help you grow your skills outside the classroom.'
    },
    {
      title: 'Get Career Ready',
      description: 'Networking events and interview prep to set you up for success as internships and job odds.'
    },
    {
      title: 'Research Opportunities',
      description: 'Work with peers on real-world research in areas like AI, security, or systems.'
    },
    {
      title: 'Mentorship Access',
      description: 'Get advice from experienced students, alumni, and industry professionals.'
    },
    {
      title: "It's Fun",
      description: 'From social events to coding hangouts, it\'s a great place to meet people and have a good time.'
    }
  ];

  return (
    <section className="relative flex w-full flex-col items-center justify-center px-6 py-16 sm:px-12 md:px-16 lg:px-24">
      <div className="w-full max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Why Join ACM?
          </h2>
          <p className="mt-4 text-base text-gray-300 sm:text-lg md:text-xl">
            Unlock opportunities for growth, learning, and professional development in computing
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Show limited cards on mobile, all cards on desktop */}
          {reasons.map((reason, index) => {
            // On mobile, only show first 4 cards unless showAll is true
            // On desktop (md+), always show all cards
            const shouldShow = index < 3 || showAll;

            return (
              <div
                key={index}
                className={`flex flex-col items-center rounded-2xl border border-primary/30 bg-gray-600/10 p-4 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-primary/50 hover:bg-gray-600/20 ${shouldShow ? 'block md:flex' : 'hidden md:flex'}`}
              >
                <h3 className="mb-3 sm:mb-4 text-center text-base font-bold text-white sm:text-lg lg:text-xl">
                  {reason.title}
                </h3>
                <p className="text-center text-xs text-gray-300 sm:text-sm lg:text-base">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Show More/Less button - only visible on mobile when there are more cards */}
        {reasons.length > 4 && (
          <div className="mt-8 flex justify-center md:hidden">
            <button
              onClick={() => setShowAll(!showAll)}
              className="rounded-lg border border-primary/50 bg-gray-600/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-primary/70 hover:bg-gray-600/20"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyJoin;
