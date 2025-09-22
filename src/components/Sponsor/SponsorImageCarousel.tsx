import React, { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

export default function SponsorImageCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = useState(0)

  const images = [
    "/assets/sponsors/pics/state-farm.jpg",
    "/assets/sponsors/pics/paycom-sponsor.jpg",
    "/assets/sponsors/pics/a-guy.jpg",
    "/assets/sponsors/pics/sponsor-speech.jpg",
    "/assets/sponsors/pics/people-staring2.jpg",
    "/assets/sponsors/pics/twilight-tunes.jpg",
    "/assets/sponsors/pics/people-staring1.jpg",
    "/assets/sponsors/pics/people-staring3.jpg",
  ]

  // Lightbox modal state
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [lightboxCurrent, setLightboxCurrent] = useState(0)

  // Track current slide and count
  React.useEffect(() => {
    if (!api) {
      return
    }

    setCurrentSlide(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap())
    })
  }, [api])

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
      <Carousel
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent className="-ml-6">
          {images.map((src, idx) => (
            <CarouselItem
              key={idx}
              className="pl-6 md:basis-1/3 lg:basis-1/3 basis-full"
            >
              <div className="border-2 border-gray-500 rounded-lg">
                <Image
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  width={1980}
                  height={1080}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw"
                  className="aspect-video object-cover cursor-pointer hover:brightness-75 transition-all w-full rounded-md"
                  onClick={() => { setLightboxCurrent(idx); setLightboxOpen(true); }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots below carousel */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-white scale-110 shadow' : 'bg-white/40 hover:bg-white/70'}`}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => api?.scrollTo(idx)}
          />
        ))}
      </div>

      <div className="flex gap-6 mt-8">
        <button
          onClick={() => api?.scrollPrev()}
          className="p-2 rounded-full border text-white border-grey-300 hover:bg-gray-700/50"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => api?.scrollNext()}
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
            <Image
              src={images[lightboxCurrent]}
              alt={`Sponsor full ${lightboxCurrent + 1}`}
              width={1200}
              height={800}
              sizes="90vw"
              style={{ maxHeight: '80vh', maxWidth: '90vw', height: 'auto', width: 'auto' }}
            />
          </div>
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