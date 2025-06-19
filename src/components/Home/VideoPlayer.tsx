import React, { useRef, useState } from "react";

const VideoPlayer: React.FC = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);


    const handleClick = () => {
        if (!videoRef.current) return;

        if(isPlaying === false){
            videoRef.current.play();
            setIsPlaying(!isPlaying);
        }
        else{
            videoRef.current.pause();
            setIsPlaying(!isPlaying);
        }
    };

    

return (
    <div className="background-container relative flex w-full rounded-xl sm:rounded-3xl border border-primary/50 bg-amber-600/10 p-1.5  backdrop-blur-xl">
        <video className="p-3 rounded-3xl w-full" 
         ref={videoRef}
         onPlay={() => setIsPlaying(true)}
         onPause={() => setIsPlaying(false)}
        
        >
        <source src="/assets/videos/IMG_2919.mp4" type="video/mp4" />
        Video not work
        </video>

        <button className="absolute inset-0 flex items-center justify-center text-white text-5xl"
        onClick = {handleClick}
        >
        
        {isPlaying ? '' : '▶'}
            
        </button>
    </div>

    );
};
export default VideoPlayer