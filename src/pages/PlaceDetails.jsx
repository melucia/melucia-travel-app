import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditPlace from "./EditPlace";
import { Link } from "react-router-dom";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button";

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
      <div className="py-4 mx-8 lg:mx-24">
        <div className="flex flex-col items-center justify-center ">
          {place && (
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold lg:text-3xl py-4">
                {place.city}
              </h2>
              <img src={place.image} className="w-1/2 rounded-lg lg:w-1/3" />
              <p className="text-lg pb-2 lg:text-2xl lg:py-4">
                <LiaMapMarkedAltSolid className="inline text-xl" />
                {place.country}
              </p>
              <p className="text-lg font-medium lg:text-xl">
                Activity: {place.activity}
              </p>
              <p className="text-lg font-medium lg:text-xl">
                Highlight: {place.highlight}
              </p>
              <p className="text-lg text-center mx-12 my-4 lg:text-xl lg:mx-36">
                {place.description}
              </p>
              <p className="text-lg text-center mx-24 my-4 lg:text-xl lg:mx-36">
                {place.textDescription}
              </p>
            </div>
          )}
        </div>

        {place && (
          <div className="flex flex-col items-center">
            <Button onClick={toggleFormVisibility} variant="details">
              {isFormVisible ? "Hide Edit Form" : "Show Edit Form"}
            </Button>
            {isFormVisible && <EditPlace place={place} onUpdate={getPlace} />}
          </div>
        )}
      </div>
      <div className="flex justify-center my-12">
        <Link to="/places">
          {" "}
          <Button variant="details"> Back to All Places </Button>
        </Link>
      </div>
    </>
  );
}

export default PlaceDetails;
