import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddPlace from "./AddPlace";
import { FaTrashCan } from "react-icons/fa6";
import Search from "../components/Search";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function AllPlaces() {
  const API_URL = "https://melucia-travel-app.adaptable.app";

  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(false);


  function toggleFormVisibility() {
    setIsFormVisible(!isFormVisible);
  }

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
      })
      .finally(() => {
        setLoading(false);
        console.log("we are spinning around the world");
      });
  };

  useEffect(() => {
    getAllPlaces();
  }, []);

  const deletePlace = (placeId) => {
    axios
      .delete(`${API_URL}/places/${placeId}`)
      .then((response) => {
        const newPlaces = places.filter((placeObj) => placeObj.id !== placeId);
        setPlaces(newPlaces);
        setFilteredPlaces(newPlaces);
      })
      .catch((error) => {
        console.log("Error deleting place...");
        console.log(error);
      });
  };

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

      <div className="flex flex-col items-center gap-y-6">
        {
          <div className="flex flex-col items-center">
            <Button onClick={toggleFormVisibility} variant="details">
              {isFormVisible ? "Add place" : "Add place"}
            </Button>
            {isFormVisible && <AddPlace onAddPlace={handleAddPlace} />}
          </div>
        }
      </div>

      <div className="flex justify-center">
        <Search onSearch={handleChange} />
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div
            class="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-indigo-600 rounded-full"
            role="status"
            aria-label="loading"
          >
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-6 lg:gap-x-0.5 lg:m-4">
          {filteredPlaces.length === 0 ? (
            <p className="shadow-xl border-solid border rounded-xl p-6 bg-green-100">
              Sorry, we can't find your place. Feel free to add it yourself!
            </p>
          ) : (
            filteredPlaces.map((place, index) => {
              return (
                <div key={place.id} className="flex w-full">
                  <Card className="w-full ">
                    <CardContent className="flex flex-col justify-start items-start gap-2 lg:flex-row">
                      <img
                        src={place.image}
                        className="h-56 w-full lg:h-56 lg:w-64 rounded-md object-cover"
                      />
                      <div className="flex flex-col justify-center items-center text-center gap-4">
                        <span className="text-xl lg:text-3xl font-semibold ">
                          {place.city}
                        </span>
                        <span className="text-lg lg:text-xl">
                          {place.country}
                        </span>
                        <span className="max-w-xs">{place.description}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-row justify-between items-center">
                      {place.tagOne || place.tagTwo ? (
                        <div className="flex justify-start gap-1">
                          {place.tagOne && (
                            <div className="border rounded-xl px-2 bg-emerald-300 text-md">
                              #{place.tagOne}
                            </div>
                          )}
                          {place.tagTwo && (
                            <div className="border rounded-xl px-2 bg-emerald-300 text-md">
                              #{place.tagTwo}
                            </div>
                          )}
                        </div>
                      ) : (
                        <h2></h2>
                      )}
                      <div className="flex flex-row justify-between">
                        <Link to={`/places/${place.id}`}>
                          <Button className="mx-2" variant="details">
                            See more
                          </Button>
                        </Link>

                        <Button
                          variant="melucia"
                          onClick={() => {
                            console.log("deleting");
                            deletePlace(place.id);
                          }}
                        >
                          <FaTrashCan className="text-md" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              );
            })
          )}
        </div>
      )}
    </>
  );
}
export default AllPlaces;
