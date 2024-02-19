import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditPlace from "./EditPlace";
import { Link } from "react-router-dom";


function PlaceDetails() {
  const API_URL = "https://melucia-travel-app.adaptable.app";

  const [place, setPlace] = useState(null);
  const { placeId } = useParams();
  const [isFormVisible, setIsFormVisible] = useState(false);

  function toggleFormVisibility() {
    setIsFormVisible(!isFormVisible);
  }

  const getPlace = () => {
    axios
      .get(`${API_URL}/places/${placeId}`)
      .then((response) => {
        console.log("Getting data");
        setPlace(response.data);
        console.log("Setting Place Correctly");
      })
      .catch((error) => {
        console.log("Error getting place details from the API...");
        console.log(error);
      });
  };

  const handlePlaceUpdate = (updatedPlace) => {
    console.log("update the place");
    setPlace(updatedPlace);
    toggleFormVisibility();
  };

  useEffect(() => {
    getPlace();
  }, [placeId]);

  return (
    <div>
      <div className="flex flex-row justify-center gap-x-12 gap-y-8 flex-grow">
        {place && (
          <>
            <img src={place.image} style={{ height: "20rem" }} />
            <h2>{place.city}</h2>
            <p>{place.country}</p>
            <p>Activity: {place.activity}</p>
            <p>Highlight: {place.highlight}</p>
            <p>{place.textDescription}</p>
          </>
        )}
      </div>

      {place && (
        <>
          <button onClick={toggleFormVisibility} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            {isFormVisible ? "Hide Edit Form" : "Show Edit Form"}
          </button>
          {isFormVisible && (
            <EditPlace
              place={place}
              onUpdate={getPlace}
            />
          )}
          <Link to="/places" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" >Back to All Places</Link>
        </>
      )}
    </div>
  );
}

export default PlaceDetails;
