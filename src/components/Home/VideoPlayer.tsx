import React, { useRef, useState } from "react";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [fade, setFade] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    setShowModal(true);
    setTimeout(() => setFade(true), 10);
  };

  const handleModalClose = () => {
    setFade(false);
    setTimeout(() => {
      setShowModal(false);
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }, 300);
  };

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleModalClose();
    }
  };

  return (
    <>
      <div
        className="group background-container relative flex w-full rounded-xl sm:rounded-3xl border border-primary/50 bg-amber-600/10 p-1.5 backdrop-blur-xl cursor-pointer"
        onClick={handleVideoClick}
      >
        <video
          className="p-3 rounded-3xl w-full group-hover:opacity-70 duration-300"
          src="/assets/videos/IMG_2919.mp4"
        />
        <div className="absolute inset-0 flex group-hover:scale-125 duration-300 items-center justify-center text-white text-5xl">
          ▶
        </div>
      </div>

      {showModal && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-opacity duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleBackdropClick}
        >
          <div className="relative bg-transparent rounded-2xl max-w-7xl w-full mx-4">
            <button
              className="absolute top-1 right-4 text-white text-5xl z-10 hover:scale-110 transition-transform duration-200"
              onClick={handleModalClose}
              aria-label="Close"
            >
              &times;
            </button>
            <video
              ref={videoRef}
              className="rounded-2xl w-full bg-black aspect-video border border-primary/50 border-2"
              controls
              autoPlay
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/assets/videos/IMG_2919.mp4" type="video/mp4" />
              Video not supported
            </video>
            <button
              className={`${isPlaying ? "" : "flex"} absolute inset-0 flex items-center justify-center text-white text-5xl pointer-events-none`}
              onClick={handlePlayPause}
              tabIndex={-1}
              aria-hidden="true"
            >
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPlayer;