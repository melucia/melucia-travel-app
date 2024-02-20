import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function HomeCarousel({ places }) {
    return (
        <>
            <div className=" flex flex-col justify-center ">
                <Carousel className="w-80 my-12 lg:w-full lg:max-w-lg">
                    <CarouselContent className="shadow-lg rounded-xl">
                        {places.slice(7, 12).map((place, index) => (
                            <CarouselItem key={place.id}  >
                                <div className="p-1">
                                    <Card className=" bg-green-50">
                                        <CardContent className="flex flex-col gap-8 aspect-square items-center justify-center">
                                            <span className="text-xl lg:text-3xl font-semibold">{place.city}</span>
                                            <span className="text-md lg:text-xl">{place.country}</span>
                                            <img src={place.image} className="h-1/2 w-1/2 rounded-md" />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div >

        </>
    )
}
export default HomeCarousel;