import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div>
      {places.slice(0, 3).map((place) => (
        <div key={place.id}>
          <img src={place.image} style={{ height: "15rem" }} />
          <h2>{place.city}</h2>
          <p>{place.country}</p>
          <p>{showTextPreview(place.description, 100)}</p>
          {/* <Link to={"/PlaceDetails"} >More Details </Link> */}
          <Link to={`/places/${place.id}`}>
                <button>More details</button>
              </Link>
              <Link to={`/places/`}>
                <button>See all places</button>
              </Link>
          
        </div>
      ))}
    </div>
  );
}

export default HomePage;
