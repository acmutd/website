"use client"
import React, { useRef, useState } from "react";


interface VideoPlayerProps {videoSrc: string;}


const VideoPlayer: React.FC<VideoPlayerProps> = ({videoSrc}) => {
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
        className="group relative w-full h-full aspect-video rounded-3xl bg-amber-600/10 backdrop-blur-xl cursor-pointer overflow-hidden"
       
       onClick={handleVideoClick}
     >
       <img
           src="/assets/about/about.jpg"
           alt="Video thumbnail"
           className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
       />
       <video
         className="absolute inset-0 w-full h-full object-cover group-hover:opacity-70 duration-300"
         src="/assets/videos/IMG_2919.mp4"
       />
       <div className="absolute inset-0 flex group-hover:scale-125 duration-300 items-center justify-center text-white text-5xl">
         ▶
       </div>
     </div>


     {showModal && (
       <div
         className={`fixed inset-0 z-50 flex items-center justify-center bg-transparent transition-opacity duration-300 ${
           fade ? "opacity-100" : "opacity-0"
         }`}
         onClick={handleBackdropClick}
       >
         <div className="relative bg-transparent rounded-xl w-full mx-4">
           <video
             ref={videoRef}
             className="rounded-2xl w-full bg-black aspect-video "
             controls
             autoPlay
             onPlay={() => setIsPlaying(true)}
             onPause={() => setIsPlaying(false)}
             onEnded={() => {
               setIsPlaying(false);
               setTimeout(() => handleModalClose(), 3000);
             }}
           >
             <source src={videoSrc}/>
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
