import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddPlace from "./AddPlace";
import { FaTrashCan } from "react-icons/fa6";
import Search from "../components/Search";


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

  const showTextPreview = (text, maxLength) => {
    if (text === undefined) {
      return "";
    }
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  const deletePlace = (placeId) => {
    const newList = places.filter((placeObj) => {
      return placeObj.id !== placeId;
    });
    setPlaces(newList);
  };
  const handleAddPlace = (newPlace) => {
    setPlaces([newPlace, ...places]);
    setFilteredPlaces([newPlace, ...places]);
  };

  const handleChange = (value) => {
    console.log(typeof value, "value");
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
      <div className="flex flex-row justify-center ">
        <AddPlace onAddPlace={handleAddPlace} />
        <Search onSearch={handleChange} />
      </div>
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
        {filteredPlaces.map((place, index) => {
          return (
            <div key={index} className="shadow-lg border-solid border rounded-xl flex w-full  lg:w-1/3 md:w-1/3 p-4">
              <div className="object-contain w-96 h-80">
                <Link to={`/places/${place.id}`}>
                  <img src={place.image} className="h-72 w-full object-cover" />
                </Link>
              </div>
              <div className="ml-14">
                <h2 className="text-3xl  font-semibold">{place.city}</h2>
                <p className="text-xl  pt-2">{place.country}</p>
                <p className="  pt-6">  {showTextPreview(place.description, 100)}</p>
                <Link to={`/places/${place.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-24">
                    More details
                  </button>
                </Link>

                <button
                  className="trash bg-blue-950 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 ml-16"
                  onClick={() => {
                    console.log("deleting")
                    deletePlace(place.id);
                  }}
                >
                  <FaTrashCan />
                </button>
              </div>
            </div >

          );
        })}
      </div >
    </>
  );
}
export default AllPlaces;
