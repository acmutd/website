import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { peechi, orb1, orb2, orb3, orb4, orb5, orb6, orb7 } from '../app/data';

const multipliers: { [key: string]: number } = {
  peechi: 0.05,
  orb1: 0.1,
  orb2: 0.07,
  orb3: 0.1,
  orb4: 0.08,
  orb5: 0.06,
  orb6: 0.09,
};

const ParallaxImages: React.FC = () => {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { width, height } = document.documentElement.getBoundingClientRect();
      const offX = e.clientX - (width * 0.5);
      const offY = e.clientY - (height * 0.1);

      const layers = document.querySelectorAll('.img');
      layers.forEach((layer) => {
        const imgClass = (layer as HTMLElement).classList[1]; // Assuming the class name is the image identifier
        const multiplier = multipliers[imgClass] || 0.02; // Default multiplier if not found

        const x = (offX * -multiplier); // Adjust multiplier for desired effect
        const y = (offY * -multiplier * 1.5); // Adjust multiplier for desired effect
        (layer as HTMLElement).style.transform = `translateX(${x}px) translateY(${y}px)`;
      });

      if (transition) {
        // Set transition state to false when mouse is moving
        setTransition(false);
      }
    };

    const handleMouseLeave = () => {
      setTransition(true); // Start transition when mouse leaves
      const layers = document.querySelectorAll('.img');
      layers.forEach((layer) => {
        (layer as HTMLElement).style.transform = `translateX(0) translateY(0)`;
      });
    };

    const handleMouseEnter = () => {
      setTransition(false); // Stop transition when mouse enters
    };

    document.body.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [transition]);

  return (
    <>
      <Image
        className={`absolute opacity-0 md:opacity-100 img peechi top-[20rem] right-[-1vw] z-10 transition-transform duration-1000 ease-out`}
        src={peechi}
        alt='image'
      />
      <Image
        className={`absolute img orb1 top-[-15rem] left-[20vw] z-10 transition-transform duration-1000 ease-out`}
        src={orb1}
        alt='image'
      />
      <Image
        className={`absolute img orb2 top-[45rem] left-[12vw] lg:left-[35vw] z-0 transition-transform duration-1000 ease-out`}
        src={orb2}
        alt='image'
      />
      <Image
        className={`absolute img orb3 top-[25rem] left-[38vw] lg:left-[46vw] z-10 transition-transform duration-1000 ease-out`}
        src={orb3}
        alt='image'
      />
      <Image
        className={`absolute img orb4 top-[37rem] left-[15rem] z-10 transition-transform duration-1000 ease-out`}
        src={orb4}
        alt='image'
      />
      <Image
        className={`absolute img orb5 top-[10rem] left-[78vw] lg:left-[73vw] z-10 transition-transform duration-1000 ease-out`}
        src={orb5}
        alt='image'
      />
      <Image
        className={`absolute img orb6 top-[53rem] left-[15rem] z-0 transition-transform duration-1000 ease-out`}
        src={orb6}
        alt='image'
      />
      <Image
        className={`absolute img orb6 top-[3rem] left-[2rem] z-0 transition-transform duration-1000 ease-out`}
        src={orb7}
        alt='image'
      />
      <Image
        className={`absolute img orb6 top-[90rem] left-[5rem] z-0 transition-transform duration-1000 ease-out`}
        src={orb2}
        alt='image'
      />
      <Image
        className={`absolute img h-30 w-36 orb6 top-[80rem] left-[45rem] z-0 transition-transform duration-1000 ease-out`}
        src={orb1}
        alt='image'
      />
      <Image
        className={`absolute img orb6 bottom-[80rem] right-[2rem] z-0 transition-transform duration-1000 ease-out`}
        src={orb3}
        alt='image'
      />
      <Image
        className={`absolute img orb6 bottom-[1rem] left-[35rem] z-10 transition-transform duration-1000 ease-out`}
        src={orb4}
        alt='image'
      />
      <Image
        className={`absolute img orb6 bottom-[25rem] right-[1rem] md:z-10 transition-transform duration-1000 ease-out -z-10`}
        src={orb7}
        alt='image'
      />

      <div className="absolute bg-[#8135DA] blur-[7rem] opacity-30 rounded-full h-96 w-96 top-[10rem] right-[-10vw]"></div>
      <div className="absolute bg-[#3ADAB0] blur-[7rem] opacity-30 rounded-full h-52 w-52 top-[5rem] right-[30vw]"></div>
      <div className="absolute bg-[#FF0052] blur-[7rem] opacity-30 rounded-full h-36 w-36 top-[10rem] right-[40vw]"></div>
      <div className="absolute bg-[#E39E34] blur-[7rem] opacity-50 rounded-full h-64 w-64 top-[50rem] right-[30vw]"></div>
      <div className="absolute bg-[#E39E34] blur-[7rem] opacity-50 rounded-full h-36 w-36 top-[1rem] left-[-5vw]"></div>
      <div className="absolute bg-[#E39E34] blur-[7rem] opacity-50 rounded-full h-36 w-36 top-[45rem] left-[-5vw]"></div>
      <div className="absolute bg-[#3ADAB0] blur-[7rem] opacity-50 rounded-full h-36 w-36 bottom-[25rem] right-[15vw]"></div>
    </>
    );
};

export default ParallaxImages;
