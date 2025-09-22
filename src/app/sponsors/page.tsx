import React from "react";

import SponsorImageCarousel from "@/components/Sponsor/SponsorImageCarousel";
import SponsorGrid from "@/components/Sponsor/SponsorGrid";
import SponsorFAQ from "@/components/Sponsor/SponsorFAQ";

function Sponsor() {
  return (
    <div className="h-fit w-full bg-[url(/assets/projects/proj-bg.png)] bg-cover py-20 flex flex-col items-center px-4 sm:px-6 md:px-8">
      {/* Sponsors Grid */}
      <div className="w-full max-w-5xl mx-auto rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md p-8 mb-12 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          our sponsors
        </h2>
        <p className="text-center md:px-12 text-lg md:text-xl text-white/80 mb-12">
          Our sponsors are at the heart of what we do. Through their support,
          we&apos;re able to provide students with top-tier resources, events, and
          opportunities that help them grow both professionally and personally.
        </p>
        <SponsorGrid />
      </div>

      {/* Sponsor Image Carousel */}
      <div className="w-full max-w-5xl mb-20 ">
        <SponsorImageCarousel />
      </div>

      {/* Sponsor FAQ Section */}
      <SponsorFAQ />
    </div>
  );
}

export default Sponsor;