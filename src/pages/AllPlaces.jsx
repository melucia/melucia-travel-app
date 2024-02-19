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
      <Search onSearch={handleChange} />
      <AddPlace onAddPlace={handleAddPlace} />
      <div>
        {filteredPlaces.map((place, index) => {
          return (
            <div key={index}>
              <Link to={`/places/${place.id}`}>
                <img src={place.image} style={{ height: "20rem" }} />
              </Link>
              <h2>{place.city}</h2>
              <p>{place.country}</p>
              <p>{showTextPreview(place.description, 100)}</p>
              <Link to={`/places/${place.id}`}>
                <button>More details</button>
              </Link>

              <button
                className="trash"
                onClick={() => {
                  deletePlace(place.id);
                }}
              >
                <FaTrashCan />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default AllPlaces;
