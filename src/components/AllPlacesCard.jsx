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
    <div className="m-8 w-5/12">
      {places.map((place, index) => (
        <Card key={place.id}>
          <CardContent className="flex">
            <img src={place.image} className="h-1/2 w-1/2 rounded-md" />
            <div className="flex flex-col ml-5">
              <span className="text-3xl font-semibold">{place.city}</span>
              <span className="text-xl">{place.country}</span>
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
      ))}
    </div>
  );
}
export default AllPlacesCard;
