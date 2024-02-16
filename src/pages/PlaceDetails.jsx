import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PlaceDetails() {
  const API_URL = "https://melucia-travel-app.adaptable.app";

  const [place, setPlace] = useState(null);

  const { placeId } = useParams();

  const getPlace = () => {
    axios
      .get(`${API_URL}/places/${placeId}`)
      .then((response) => {
        setPlace(response.data);
      })
      .catch((error) => {
        console.log("Error getting place details from the API...");
        console.log(error);
      });
  };

  useEffect(() => {
    getPlace();
  }, []);

  return (
    <div>
      <div>
        {place && (
          <>
            <img src={place.image} style={{ height: "15rem" }} />
            <h2>{place.city}</h2>
            <p>{place.country}</p>
            <p>Activity: {place.activity}</p>
            <p>Highlight: {place.highlight}</p>
            <p>{place.description}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default PlaceDetails;
