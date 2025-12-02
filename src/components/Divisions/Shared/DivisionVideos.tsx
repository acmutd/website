"use client";

import VideoPlayer from "@/components/VideoPlayer";

type DivisionVideosProps = {
  videos?: { src: string; thumbnail: string }[];
};

export default function DivisionVideos({ videos }: DivisionVideosProps) {
  if (!videos || videos.length === 0) return null;

  return (
    <section className="w-full mt-20 mb-28">
      <div
        className="
          w-full sm:max-w-4xl max-w-[calc(100vw-1rem)] mx-auto px-4 sm:px-0
        "
      >
        {videos.map((video, index) => (
          <div
            key={index}
            className="
              relative overflow-hidden rounded-3xl
              border border-primary/30
              bg-gradient-to-br from-white/10 to-white/5
              p-4 shadow-2xl backdrop-blur-sm
            "
          >
            <VideoPlayer
              videoSrc={video.src}
              thumbnailSrc={video.thumbnail}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
