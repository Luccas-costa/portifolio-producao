'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function ChatPage() {
  return (
    <Carousel className="max-w-screen h-full max-h-screen w-full">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="flex justify-center">
            <div className="h-[300px] w-[500px] rounded-lg border border-white bg-zinc-700">
              <span className="text-center text-2xl text-white">
                {index + 1}
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
