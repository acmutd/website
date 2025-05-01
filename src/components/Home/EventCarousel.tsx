"use client"

import * as React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CarouselImage } from "../../../config/divisions.config"

interface EventCarouselProps {
  items: CarouselImage[]
}

export function EventCarousel({ items }: EventCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) return

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap())
    })
  }, [api])

  const scrollTo = React.useCallback((index: number) => {
    api?.scrollTo(index)
  }, [api])

  return (
    <div className="background-container relative mx-12 md:mx-3 lg:mx-auto flex w-full flex-col rounded-3xl border border-primary/50 bg-amber-600/10 p-3 pb-8 backdrop-blur-xl">
      <div className="relative w-full">
        <Carousel className="w-full" setApi={setApi} opts={{ loop: true }}>
          <CarouselContent overflowHidden>
            {items.map((item, index) => (
              <CarouselItem key={index} className="basis-full">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative w-[389px] h-[472px] mx-auto cursor-pointer">
                      <Image
                        src={item.imageLink}
                        alt={item.title}
                        width={389}
                        height={472}
                        className="rounded-[40px] transition-transform"
                        priority={index === 0}
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-[90vw] h-[90vh] p-0 bg-transparent border-none">
                    <div className="relative w-full h-full">
                      <Image
                        src={item.imageLink}
                        alt={item.title}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 bg-black/20 backdrop-blur-sm border-white/50 hover:bg-black/40 transition-colors" />
          <CarouselNext className="absolute right-0 bg-black/20 backdrop-blur-sm border-white/50 hover:bg-black/40 transition-colors" />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex justify-center gap-2 py-2 px-4 bg-black/20 backdrop-blur-sm rounded-full">
            {items.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white w-4"
                    : "bg-white/50 hover:bg-white/70 w-2"
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
      <div className="absolute bottom-0 right-0 bg-white/10 px-4 py-2 rounded-tl-xl border-t-2 border-l-2 border-white/50 z-10">
        <p className="text-lg text-white font-sans">
          {items[currentIndex]?.title}
        </p>
      </div>
    </div>
  )
}
