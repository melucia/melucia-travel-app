import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditPlace from "./EditPlace";
import { Link } from "react-router-dom";
import { LiaMapMarkedAltSolid } from "react-icons/lia";

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
    <>
      <div className="shadow-lg border-solid border rounded-xl py-8 mx-8 lg:mx-24">
        <div className="flex flex-col items-center justify-center ">
          {place && (
            <div className="flex flex-col items-center">
              <img src={place.image} className="w-1/2 rounded-lg lg:w-1/3" />
              <h2 className="text-xl font-bold pt-4 lg:text-3xl lg:pt-8">{place.city}</h2>
              <p className="text-lg pb-2 lg:text-2xl lg:py-4"><LiaMapMarkedAltSolid className="inline text-xl" />{place.country}</p>
              <p className="text-lg font-medium lg:text-xl">Activity: {place.activity}</p>
              <p className="text-lg font-medium lg:text-xl">Highlight: {place.highlight}</p>
              <p className="text-lg text-center mx-12 my-4 lg:text-xl lg:mx-36">{place.description}</p>
              <p className="text-lg text-center mx-24 my-4 lg:text-xl lg:mx-36">{place.textDescription}</p>
            </div>
          )}
        </div>

        {place && (
          <div className="flex flex-col items-center">
            <button onClick={toggleFormVisibility} className="w-40 h-12 bg-green-500 hover:bg-green-600 text-white font-bold py-1 rounded mt-4 lg:py-2">
              {isFormVisible ? "Hide Edit Form" : "Show Edit Form"}
            </button>
            {isFormVisible && (
              <EditPlace
                place={place}
                onUpdate={getPlace}
              />
            )}
          </div>
        )}
      </div>
      <div className="flex justify-center my-12">
        <Link to="/places" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-4 lg:py-2" >Back to All Places</Link>
      </div>
    </>
  );
}

export default PlaceDetails;
