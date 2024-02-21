import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddPlace from "./AddPlace";
import { FaTrashCan } from "react-icons/fa6";
import Search from "../components/Search";
import AllPlacesCard from "@/components/AllPlacesCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function AllPlaces() {
  const API_URL = "https://melucia-travel-app.adaptable.app";

  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const getAllPlaces = () => {
    axios
      .get(`${API_URL}/places`)
      .then((response) => {
        console.log(response.data);
        setPlaces(response.data);
        setFilteredPlaces(response.data);
      })
      .catch((error) => {
        console.log("Error getting places from the API...");
        console.log(error);
      });
  };

  useEffect(() => {
    getAllPlaces();
  }, []);

  const deletePlace = (placeId) => {
    axios.delete(`${API_URL}/places/${placeId}`)
      .then((response) => {
        const newPlaces = places.filter((placeObj) => placeObj.id !== placeId);
        setPlaces(newPlaces);
        setFilteredPlaces(newPlaces);
      })
      .catch((error) => {
        console.log("Error deleting place...");
        console.log(error);
      });
  }


  const handleAddPlace = (newPlace) => {
    setPlaces([newPlace, ...places]);
    setFilteredPlaces([newPlace, ...places]);
  };

  const handleChange = (value) => {

    if (value === "") {
      setFilteredPlaces(places);
    } else {
      const results = places.filter((place) => {
        return (
          place?.city?.toLowerCase().includes(value) ||
          place?.country?.toLowerCase().includes(value)
        );
      });

      setFilteredPlaces(results);
    }
  };
  return (
    <>

      <div className="flex flex-col items-center gap-y-6" >
        {/* items-center lg:flex-row lg:justify-center lg:gap-x-48 lg:gap-y-8" */}
        <AddPlace onAddPlace={handleAddPlace} />
        <Search onSearch={handleChange} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-6 lg:gap-x-0.5 lg:m-4 lg:ml-16">
        {filteredPlaces.length === 0 ? (
          <p className="shadow-xl border-solid border rounded-xl p-6 bg-green-100">
            Sorry, we can't find your place. Feel free to add it yourself!</p>
        ) : (
          filteredPlaces.map((place, index) => {
            return (
              <div key={place.id} className="flex w-full">
                <Card className="w-full lg:w-10/12 lg:h-80 m-2">
                  <CardContent className="flex flex-col lg:flex-row">
                    <img src={place.image} className="h-56 w-wull lg:h-56 lg:w-64 rounded-md self-center object-cover" />
                    <div className="flex flex-col ml-5 px-6 text-center">
                      <span className="text-xl lg:text-3xl font-semibold mt-4 py-2">{place.city}</span>
                      <span className="text-lg lg:text-xl">{place.country}</span>
                      <span className=" py-2">{place.description}</span>
                      <div className="flex flex-row justify-center h-28">
                        <Link to={`/places/${place.id}`}>
                          <button
                            className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold rounded text-sm
                    lg:text-base py-2 px-4 mt-12"
                          >
                            More details
                          </button>
                        </Link>

                        <button
                          className="self-center mt-6 trash h-10 bg-blue-950 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-8 w-12"
                          onClick={() => {
                            console.log("deleting");
                            deletePlace(place.id);
                          }}
                        >
                          <FaTrashCan />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
export default AllPlaces;
