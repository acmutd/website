import React from 'react';
import VideoPlayer from '../VideoPlayer';


function AboutHeader() {
 return (
   <div className="relative min-h-[80vh] w-full overflow-hidden bg-[url(/assets/about/about-header-bg.png)] bg-cover bg-center bg-no-repeat">
     <div className="relative z-10 flex min-h-[80vh] items-center justify-center px-6 py-20 md:px-10">
       <div className="flex w-full flex-col-reverse items-center gap-8 lg:flex-row lg:gap-12 justify-between">


         <div className="relative w-full max-w-2xl lg:max-w-2xl xl:max-w-4xl">
           <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-white/10 to-white/5 p-4 shadow-2xl backdrop-blur-sm ">
             <VideoPlayer videoSrc="/assets/videos/ExecVideo.mov" thumbnailSrc= "/assets/about/about.jpg"/>
           </div>
         </div>


         <div className="flex w-full flex-col items-center text-center lg:items-start">
           <div className="mb-6">
             <h1 className="bg-gradient-to-r from-primary via-primary to-primaryDark bg-clip-text text-4xl font-bold text-transparent xl:text-7xl text-left">
               The world&apos;s largest international computing society, <br /> here at UT Dallas
             </h1>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
}


export default AboutHeader;



