import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RandomButton from "../components/RandomButton";
import RandomPlace from "./RandomPlace";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


function HomePage() {
  const API_URL = "https://melucia-travel-app.adaptable.app";

  const [places, setPlaces] = useState([]);

  const getAllPlaces = () => {
    axios
      .get(`${API_URL}/places`)
      .then((response) => {
        console.log(response.data);
        setPlaces(response.data);
      })
      .catch((error) => {
        console.log("Error getting places from the API...");
        console.log(error);
      });
  };

  useEffect(() => {
    getAllPlaces();
  }, []);

  const showTextPreview = (text, maxLength) => {
    if (text === undefined) {
      return "";
    }
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
        {places.slice(0, 3).map((place) => (
          <div key={place.id}
            className="shadow-lg border-solid border rounded-xl flex w-full  lg:w-1/3 md:w-1/3 p-4">
            <div className="object-contain w-96 h-80">
              <img src={place.image} className="aspect-ratio: auto" />
            </div>
            <div className="ml-14">
              <h2 className="text-3xl  font-semibold">{place.city}</h2>
              <p className="text-xl  pt-2">{place.country}</p>
              <p>{showTextPreview(place.description, 100)}</p>
              {/* <Link to={"/PlaceDetails"} >More Details </Link> */}
              <Link to={`/places/${place.id}`}>
                <button className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded mt-4">More details</button>
              </Link>
              <Link to={`/places/`}>
                <button className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded mt-4">See all places</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
