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
        className={`img peechi absolute right-[10%] top-[20rem] z-20 h-auto w-64 opacity-0 transition-transform duration-1000 ease-out md:w-96 md:opacity-100 lg:right-[40vw] lg:top-[1px]`}
        src={peechi}
        alt="image"
      />
      <Image
        className={`img orb1 absolute left-[20vw] top-[-15rem] z-10 transition-transform duration-1000 ease-out`}
        src={orb1}
        alt="image"
      />
      <Image
        className={`img orb2 absolute left-[12vw] top-[45rem] z-0 transition-transform duration-1000 ease-out lg:left-[35vw]`}
        src={orb2}
        alt="image"
      />
      <Image
        className={`img orb3 absolute left-[8vw] top-[25rem] z-0 transition-transform duration-1000 ease-out lg:left-[40%] lg:z-10`}
        src={orb3}
        alt="image"
      />
      <Image
        className={`img orb4 absolute left-[15rem] top-[30%] z-0 transition-transform duration-1000 ease-out lg:z-10`}
        src={orb4}
        alt="image"
      />
      <Image
        className={`img orb5 z-1 absolute left-[78vw] top-[1rem] transition-transform duration-1000 ease-out lg:left-[60vw]`}
        src={orb5}
        alt="image"
      />
      <Image
        className={`img orb6 absolute left-[15rem] top-[53rem] z-0 transition-transform duration-1000 ease-out`}
        src={orb6}
        alt="image"
      />
      <Image
        className={`img orb6 absolute left-[2rem] top-[3rem] z-0 transition-transform duration-1000 ease-out`}
        src={orb7}
        alt="image"
      />
      <Image
        className={`img orb6 absolute left-[10rem] top-[90rem] z-0 transition-transform duration-1000 ease-out`}
        src={orb2}
        alt="image"
      />
      <Image
        className={`img h-30 orb6 absolute left-[45rem] top-[80rem] z-0 w-36 transition-transform duration-1000 ease-out`}
        src={orb1}
        alt="image"
      />
      <Image
        className={`img orb6 absolute bottom-[80rem] right-[2rem] z-0 transition-transform duration-1000 ease-out`}
        src={orb3}
        alt="image"
      />
      <Image
        className={`img orb6 absolute bottom-[1rem] left-[35rem] z-10 transition-transform duration-1000 ease-out`}
        src={orb4}
        alt="image"
      />
      <Image
        className={`img orb6 absolute bottom-[25rem] right-[1rem] -z-10 transition-transform duration-1000 ease-out md:z-10`}
        src={orb7}
        alt="image"
      />

      <div className="absolute right-[-10vw] top-[10rem] h-96 w-96 rounded-full bg-[#8135DA] opacity-30 blur-[7rem]"></div>
      <div className="absolute right-[30vw] top-[5rem] h-52 w-52 rounded-full bg-[#3ADAB0] opacity-30 blur-[7rem]"></div>
      <div className="absolute right-[40vw] top-[10rem] h-36 w-36 rounded-full bg-[#FF0052] opacity-30 blur-[7rem]"></div>
      <div className="absolute right-[30vw] top-[50rem] h-64 w-64 rounded-full bg-[#E39E34] opacity-50 blur-[7rem]"></div>
      <div className="absolute left-[-5vw] top-[1rem] h-36 w-36 rounded-full bg-[#E39E34] opacity-50 blur-[7rem]"></div>
      <div className="absolute left-[-5vw] top-[45rem] h-36 w-36 rounded-full bg-[#E39E34] opacity-50 blur-[7rem]"></div>
      <div className="absolute bottom-[25rem] right-[15vw] h-36 w-36 rounded-full bg-[#3ADAB0] opacity-50 blur-[7rem]"></div>
    </>
  );
};

export default ParallaxImages;
