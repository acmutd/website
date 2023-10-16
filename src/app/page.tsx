import Link from "next/link";
import React from "react";

function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-primaryDark text-4xl font-bold md:text-6xl">
        ACM Chapter at UTD
      </h1>
      <Link
        href="https://portal.acmutd.co"
        className="text-primary bg-acm-gradient mt-6 flex h-12 w-80 items-center justify-center py-2 font-bold"
      >
        Join Us
      </Link>
    </div>
  );
}

export default Home;
