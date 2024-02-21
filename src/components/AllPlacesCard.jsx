import React from "react";
import { Link } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function AllPlacesCard({ places }) {
  return (
    <div className="lg:flex lg:flex-wrap">
      {places.map((place) => (
        <div key={place.id} className="lg:w-1/2 lg:px-2 lg:py-4">
          <Card className="h-full">
            <CardContent className="flex ">
              <img src={place.image} className="h-56 w-52 lg:h-56 lg:w-64 rounded-md self-center" />
              <div className="flex flex-col ml-5 px-6">
                <span className="text-xl lg:text-3xl font-semibold">{place.city}</span>
                <span className="text-lg lg:text-xl">{place.country}</span>
                <span className="">{place.description}</span>

                <Link to={`/places/${place.id}`}>
                  <button
                    className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold rounded text-sm
                  lg:text-base py-2 px-4 mt-12"
                  >
                    More details
                  </button>
                </Link>

                <button
                  className="trash bg-blue-950 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 ml-8 w-12"
                  onClick={() => {
                    console.log("deleting");
                    deletePlace(place.id);
                  }}
                >
                  <FaTrashCan />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
export default AllPlacesCard;
