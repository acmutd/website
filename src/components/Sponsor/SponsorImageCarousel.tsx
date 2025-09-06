import React from "react"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function SponsorImageCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 15,
    },
  })

  const images = [
    "/assets/sponsor/brilliantly-boring.jpg",
    "/assets/sponsor/goldman-sachs.jpg",
    "/assets/sponsor/sponsor-speech.jpg",
    "/assets/sponsor/sponsor-talk.jpg",
    "/assets/sponsor/state-farm.jpg",
  ]

  return (
    <div className="w-full flex flex-col items-center">
     
      <div ref={sliderRef} className="keen-slider w-full ">
        {images.map((src, idx) => (
          <div key={idx} className="keen-slider__slide flex justify-center">
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-[400px] h-[250px] object-cover rounded-2xl border border-gray-600"
            />
          </div>
        ))}
      </div>

    
      <div className="flex gap-6 mt-8">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="p-2 rounded-full border text-white border-grey-300 hover:bg-gray-700/50"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="p-2 rounded-full border text-white border-grey-300 hover:bg-gray-700/50"
        >
          <ArrowRight />
        </button>
        
      </div>
    </div>
  )
}