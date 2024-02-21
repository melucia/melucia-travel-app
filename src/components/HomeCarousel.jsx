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
            <div className="flex flex-col justify-center ">
                <Carousel className="w-1/3 my-24 lg:w-full lg:max-w-lg">
                    <CarouselContent className="shadow-lg rounded-xl">
                        {places.slice(7, 12).map((place, index) => (
                            <CarouselItem key={place.id}  >
                                <div className="p-1">
                                    <Card className=" bg-green-100">
                                        <CardContent className="flex flex-col gap-8 aspect-square items-center justify-center">
                                            <span className="text-3xl font-semibold">{place.city}</span>
                                            <span className="text-xl">{place.country}</span>
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