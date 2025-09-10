import React, { useState } from "react"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function SponsorImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 12 },
      },
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 8 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  const images = [
    "/assets/sponsors/pics/brilliantly-boring.jpg",
    "/assets/sponsors/pics/goldman-sachs.jpg",
    "/assets/sponsors/pics/sponsor-speech.jpg",
    "/assets/sponsors/pics/sponsor-talk.jpg",
    "/assets/sponsors/pics/state-farm.jpg",
  ]

  // Lightbox modal state
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [current, setCurrent] = useState(0)

  // Fade in/out logic
  React.useEffect(() => {
    if (lightboxOpen) {
      setShowModal(true)
    } else {
      const timeout = setTimeout(() => setShowModal(false), 300)
      return () => clearTimeout(timeout)
    }
  }, [lightboxOpen])

  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <div ref={sliderRef} className="keen-slider w-full">
        {images.map((src, idx) => (
          <div key={idx} className="keen-slider__slide flex justify-center border-2 border-gray-500 rounded-lg">
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="aspect-video object-cover cursor-pointer hover:brightness-75 transition-all"
              onClick={() => { setCurrent(idx); setLightboxOpen(true); }}
            />
          </div>
        ))}
      </div>

      {/* Dots below carousel */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-white scale-110 shadow' : 'bg-white/40 hover:bg-white/70'}`}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
          />
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
      {/* Lightbox modal */}
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/80 transition-opacity duration-300 ${showModal ? (lightboxOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none') : 'opacity-0 pointer-events-none'}`}
        onClick={() => setLightboxOpen(false)}
        aria-hidden={!lightboxOpen}
      >
        <div
          className="relative flex items-center justify-center rounded-lg border-2 border-gray-500"
          onClick={e => e.stopPropagation()}
        >
          <div className="relative overflow-hidden rounded-md">
            <img
              src={images[current]}
              alt={`Sponsor full ${current + 1}`}
              style={{ maxHeight: '80vh', maxWidth: '90vw', height: 'auto', width: 'auto' }}
            />
          </div>
          {/* Left/Right navigation in modal */}
          <button
            type="button"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 focus:outline-none"
            onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
            aria-label="Previous image"
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/60 rounded-full p-2 hover:bg-black/80 focus:outline-none"
            onClick={() => setCurrent((c) => (c + 1) % images.length)}
            aria-label="Next image"
          >
            <ArrowRight />
          </button>
          <button
            type="button"
            className="absolute top-3 right-3 text-white bg-black/60 rounded-full px-3 py-2 hover:bg-black/80 focus:outline-none"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close full view"
          >
            &#10005;
          </button>
        </div>
      </div>
    </div>
  )
}