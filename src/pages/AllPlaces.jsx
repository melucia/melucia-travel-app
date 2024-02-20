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
      <div className="flex justify-center gap-10 flex-wrap 
      lg:m-4 lg:ml-16">
        {filteredPlaces.length === 0 ? (
          <p className="shadow-xl border-solid border rounded-xl p-6 bg-green-100">
            Sorry, we can't find your place. Feel free to add it yourself!</p>
        ) : (
        filteredPlaces.map((place, index) => {
          return (
            <div
              key={index}
              className="shadow-xl border-solid border rounded-xl flex p-2 flex-row w-96 h-80 m-2
              lg:p-6 lg:w-5/12 lg:flex-flow"
            >
              <div className="object-contain w-96 h-80">
                <Link to={`/places/${place.id}`}>
                  {/* <img src={place.image} className="h-72 w-full object-cover" /> */}
                  <img src={place.image} className="w-full aspect-ratio: 1 / 1 shadow-lg border-solid border rounded-xl" />
                </Link>
              </div>
              <div className="ml-14">
                <h2 className="text-lg
                lg:text-3xl font-semibold">{place.city}</h2>
                <p className="text-md
                lg:text-xl pt-2">{place.country}</p>
                <p className="text-sm
                lg:text-base pt-6">
                  {" "}
                  {place.description}
                </p>
                <Link to={`/places/${place.id}`}>
                  <button className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold rounded text-sm
                  lg:text-base py-2 px-4  mt-12">
                    More details
                  </button>
                </Link>

                <button
                  className="trash bg-blue-950 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 ml-8"
                  onClick={() => {
                    console.log("deleting");
                    deletePlace(place.id);
                  }}
                >
                  <FaTrashCan />
                </button>
              </div>
            </div>
          );
        })
      )}
      </div>
    </>
  );
}
export default AllPlaces;
