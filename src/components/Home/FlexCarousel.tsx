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

interface FlexCarouselProps {
  items: CarouselImage[]
}

export function FlexCarousel({ items }: FlexCarouselProps) {
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
    <div className="background-container relative mx-4 sm:mx-8 md:mx-3 lg:mx-auto flex w-full lg:max-w-[50vw] flex-col gap-y-4 sm:gap-y-6 rounded-2xl sm:rounded-3xl border border-primary/50 bg-amber-600/10 p-2 sm:p-3 pb-12 sm:pb-16 backdrop-blur-xl z-[100]">
      <div className="relative w-full">
        <Carousel className="w-full" setApi={setApi} opts={{ loop: true }}>
          <CarouselContent overflowHidden>
            {items.map((item, index) => (
              <CarouselItem key={index} className="basis-full">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative aspect-[16/9] cursor-pointer">
                      <Image
                        src={item.imageLink}
                        alt={item.title}
                        fill
                        className="object-cover rounded-[24px] sm:rounded-[36px] transition-transform"
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-[95vw] sm:w-[90vw] h-[95vh] sm:h-[90vh] p-0 bg-transparent border-none">
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
          <CarouselPrevious className="absolute left-0 bg-black/20 backdrop-blur-sm border-white/50 hover:bg-black/40 transition-colors h-8 w-8 sm:h-10 sm:w-10" />
          <CarouselNext className="absolute right-0 bg-black/20 backdrop-blur-sm border-white/50 hover:bg-black/40 transition-colors h-8 w-8 sm:h-10 sm:w-10" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center gap-1.5 sm:gap-2 py-1.5 sm:py-2 px-3 sm:px-4 bg-black/20 backdrop-blur-sm rounded-full">
            {items.map((_, index) => (
              <button
                key={index}
                className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white w-3 sm:w-4"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </Carousel>
      </div>
      <div className="absolute bottom-0 right-2 md:right-0 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-tl-xl border-t-2 border-l-2 border-white/50 z-10">
        <p className="text-sm sm:text-lg text-white font-sans">{items[currentIndex]?.title}</p>
      </div>
    </div>
  )
}
