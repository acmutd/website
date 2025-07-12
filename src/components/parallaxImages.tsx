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
      const offX = e.clientX - width * 0.5;
      const offY = e.clientY - height * 0.1;

      const layers = document.querySelectorAll('.img');
      layers.forEach((layer) => {
        const imgClass = (layer as HTMLElement).classList[1]; // Assuming the class name is the image identifier
        const multiplier = multipliers[imgClass] || 0.02; // Default multiplier if not found

        const x = offX * -multiplier; // Adjust multiplier for desired effect
        const y = offY * -multiplier * 1.5; // Adjust multiplier for desired effect
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
        className={`img peechi absolute right-[10%] top-[40rem] z-20 h-auto w-64 opacity-0 transition-transform duration-1000 ease-out md:w-96 md:opacity-100 lg:right-[5%] lg:top-[3rem]`}
        src={peechi}
        alt="image"
      />
      <Image
        className={`img orb2 absolute right-[8vw] top-[12rem] z-0 transition-transform duration-1000 ease-out`}
        src={orb2}
        alt="image"
      />
      <Image
        className={`img orb3 absolute left-[12vw] top-[18rem] z-0 transition-transform duration-1000 ease-out`}
        src={orb3}
        alt="image"
      />
      <Image
        className={`img orb4 absolute right-[15vw] top-[6rem] z-0 transition-transform duration-1000 ease-out`}
        src={orb4}
        alt="image"
      />
      <Image
        className={`img orb5 z-0 absolute left-[20vw] top-[4rem] transition-transform duration-1000 ease-out`}
        src={orb5}
        alt="image"
      />
      <Image
        className={`img orb6 absolute right-[25vw] top-[20rem] z-0 transition-transform duration-1000 ease-out`}
        src={orb6}
        alt="image"
      />
      <Image
        className={`img orb7 absolute left-[5vw] top-[25rem] z-0 transition-transform duration-1000 ease-out`}
        src={orb7}
        alt="image"
      />

      <div className="absolute right-[10vw] top-[25rem] h-96 w-96 rounded-full bg-[#8135DA] opacity-20 blur-[8rem]"></div>
      <div className="absolute left-[10vw] top-[15rem] h-52 w-52 rounded-full bg-[#3ADAB0] opacity-20 blur-[8rem]"></div>
      <div className="absolute right-[30vw] top-[8rem] h-36 w-36 rounded-full bg-[#FF0052] opacity-20 blur-[8rem]"></div>
      <div className="absolute left-[30vw] top-[22rem] h-64 w-64 rounded-full bg-[#E39E34] opacity-30 blur-[8rem]"></div>
      <div className="absolute right-[5vw] top-[18rem] h-48 w-48 rounded-full bg-[#8135DA] opacity-25 blur-[6rem]"></div>
    </>
  );
};

export default ParallaxImages;
