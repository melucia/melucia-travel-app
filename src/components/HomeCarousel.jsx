import * as React from "react"
import { Link } from "react-router-dom"

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
            <div className="flex flex-col">
                <Carousel className="w-1/3 my-auto mx-auto lg:w-full lg:max-w-lg">
                    <CarouselContent className="shadow-lg rounded-xl">
                        {places.slice(7, 12).map((place, index) => (
                            <CarouselItem key={place.id} >
                                 <Link to={`/places/${place.id}`}>
                                <div className="p-1">
                                    <Card className=" bg-green-100">
                                        <CardContent className="flex flex-col gap-8 items-center justify-center">
                                            <span className="text-xl lg:text-3xl font-semibold">{place.city}</span>
                                            <span className="text-lg lg:text-xl">{place.country}</span>
                                            <img src={place.image} className="h-56 w-full rounded-md" />
                                        </CardContent>
                                    </Card>
                                </div>
                                </Link>
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