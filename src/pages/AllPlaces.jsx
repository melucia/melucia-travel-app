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
  const [selectedTag, setSelectedTag] = useState(null);


  function toggleFormVisibility() {
    setIsFormVisible(!isFormVisible);
  }

  const getAllPlaces = () => {
    axios
      .get(`${API_URL}/places`)
      .then((response) => {
        setPlaces(response.data);
        setFilteredPlaces(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
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
        console.log(error);
      });
  };

  const handleAddPlace = (newPlace) => {
    setPlaces([newPlace, ...places]);
    setFilteredPlaces([newPlace, ...places]);
  };


  const handleChange = (value) => {
    const lowerCaseValue = value.toLowerCase();
    if (lowerCaseValue === "") {
      setFilteredPlaces(places);
    } else {
      const results = places.filter((place) => {
        return (
          place?.city?.toLowerCase().includes(lowerCaseValue) ||
          place?.country?.toLowerCase().includes(lowerCaseValue)
        );
      });

      setFilteredPlaces(results);
    }
  };

  // const handleFilter = (tagOne, tagTwo) => {
  //   setFilteredTags({ tagOne, tagTwo });
  //   if (tagOne === "All Tags" && tagTwo === "All Tags") {
  //     setFilteredPlaces(places);
  //   } else {
  //     const filtered = places.filter((place) => {
  //       return (
  //         (tagOne === "All Tags" || place.tagOne === tagOne) &&
  //         (tagTwo === "All Tags" || place.tagTwo === tagTwo)
  //       )
  //     })
  //     setFilteredPlaces(filtered)
  //   }
  // }


  const handleFilter = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag(null); 
      setFilteredPlaces(places);
    } else {
      setSelectedTag(tag);
      if (tag === "All Tags") {
        setFilteredPlaces(places);
      } else {
        const filtered = places.filter((place) => place.tag.includes(tag));
        setFilteredPlaces(filtered);
      }
    }
  };
  return (
    <>
      <div className="mt-5 mb-10 flex justify-center">
        <Button
          variant="details"
          className={`mt-4 md: mr-4 ${selectedTag === "Cityscape" && "bg-sky-900 text-yellow-500"
            }`}
          onClick={() => handleFilter("Cityscape")}
        >
          Cityscape
        </Button>

        <Button
          variant="details"
          className={`mt-4 md: mr-4 ${selectedTag === "Beach" && "bg-sky-900 text-yellow-500"
            }`}
          onClick={() => handleFilter("Beach")}
        >
          Beach
        </Button>

        <Button
          variant="details"
          className={`mt-4 md:  mr-4 ${selectedTag === "Mountain" && "bg-sky-900 text-yellow-500"
            }`}
          onClick={() => handleFilter("Mountain")}
        >
          Mountain
        </Button>
        <Button
          variant="details"
          className={`mt-4 md:  mr-4 ${selectedTag === "Historical" && "bg-sky-900 text-yellow-500"
            }`}
          onClick={() => handleFilter("Historical")}
        >
          Historical
        </Button>
        <Button
          variant="details"
          className={`mt-4 md:  mr-4 ${selectedTag === "Culinary" && "bg-sky-900 text-yellow-500"
            }`}
          onClick={() => handleFilter("Culinary")}
        >
          Culinary
        </Button>
        <Button
          variant="details"
          className={`mt-4 md:  mr-4 ${selectedTag === "Adventure" && "bg-sky-900 text-yellow-500"
            }`}
          onClick={() => handleFilter("Adventure")}
        >
          Adventure
        </Button>
        <Button
          variant="details"
          className={`mt-4 md:  mr-4 ${selectedTag === "Romantic" && "bg-sky-900 text-yellow-500"
            }`}
          onClick={() => handleFilter("Romantic")}
        >
          Romantic
        </Button>
        <Button
          variant="details"
          className={`mt-4 md:  mr-4 ${selectedTag === "Nightlife" && "bg-sky-900 text-yellow-500"
            }`}
          onClick={() => handleFilter("Nightlife")}
        >
          Nightlife
        </Button>
        <Button
          variant="details"
          className={`mt-4 md:  mr-4 ${selectedTag === "Cultural" && "bg-sky-900 text-yellow-500"
            }`}
          onClick={() => handleFilter("Cultural")}
        >
          Cultural
        </Button>
        <Button
          variant="details"
          className={`mt-4 md:  mr-4 ${selectedTag === "Art and Museums" && "bg-sky-900 text-yellow-500"
            }`}
          onClick={() => handleFilter("Art and Museums")}
        >
          Art and Museums
        </Button>
        <Button
          variant="details"
          className={`mt-4 md:  mr-4 ${selectedTag === "Island" && "bg-sky-900 text-yellow-500"
            }`}
          onClick={() => handleFilter("Island")}
        >
          Island
        </Button>


      </div>

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
        <div className="flex justify-center w-screen items-center h-screen">
          <div
            className="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-indigo-600 rounded-full"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 lg:gap-8  px-10">
          {filteredPlaces.length === 0 ? (
            <p className="shadow-xl border-solid border rounded-xl p-6 bg-green-100">
              Sorry, we can't find your place. Feel free to add it yourself!
            </p>
          ) : (


            filteredPlaces.map((place, index) => {
              return (
                <div key={place.id} className="flex w-full">
                  <Card className="w-96 mx-auto md:w-full">
                    <CardContent className="flex flex-col justify-start items-start lg:items-center gap-2 lg:flex-row">
                      <img
                        src={place.image}
                        className="h-56 w-full lg:h-56 lg:w-64 rounded-md object-cover"
                      />
                      <div className="flex flex-col justify-center items-center text-center lg:w-full gap-4">
                        <span className="text-xl lg:text-3xl font-semibold ">
                          {place.city}
                        </span>
                        <span className="text-lg lg:text-xl">
                          {place.country}
                        </span>
                        <span className="max-w-xs">{place.description}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-row justify-between items-center ">
                      {place.tag && place.tag.length > 0 ? (
                        <div className="flex justify-start gap-1">
                          {place.tag.map((tag, index) => (
                            <div
                              key={index}
                              className="border rounded-xl px-2 bg-emerald-300 text-md"
                            >
                              #{tag}
                            </div>
                          ))}
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
