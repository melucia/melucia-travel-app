import { useEffect, useState } from "react";
import axios from "axios";
import RandomButton from "../components/RandomButton";

function RandomPlace() {
  const [randomPlaces, setRandomPlaces] = useState(null);
  const [onePlace, setOnePlace] = useState("");


  const fetchRandomPlace = async () => {
    try {
      const respone = await axios.get(
        "https://melucia-travel-app.adaptable.app/places"
      );
      const result = await respone.data;
      console.log("getting data", respone.data);
      setRandomPlaces(result);
    } catch (error) {
      console.log("Error finding a place...");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRandomPlace();
  }, [])


  const handleClick = () => {
    fetchRandomPlace();
    if (randomPlaces && randomPlaces.length > 0) {
      const random =
        randomPlaces[Math.floor(Math.random() * randomPlaces.length)];
      setOnePlace(random);
    }
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold mt-12">Explore the unknown: Random destination, activate!</h2>

      <RandomButton onClick={handleClick} />

      {!onePlace && (
        <div className="flex justify-center items-center h-96">
          <h2 className="text-semibold text-2xl">Click the button to start!</h2>
        </div>
      )}

      {onePlace && (
        <div className="flex flex-col items-center shadow-lg border-solid border rounded-xl lg:mx-96">
          <h3 className="text-center text-2xl font-semibold pt-4">{onePlace.city}</h3>
          <h4 className="text-center text-xl">{onePlace.country}</h4>
          <div className="flex justify-center">
            <div>
              <img src={onePlace.image} className="h-80 w-96 my-12" />
            </div>
            <div className="flex flex-col w-96 ml-12 mt-8">
              <span className="pb-1 mt-4 text-center font-semibold">Activity:</span> <span className="text-center">{onePlace.activity}</span>
              <span className="py-1 text-center font-semibold">Highlight:</span> <span className="text-center">{onePlace.highlight}</span>
              <p className="py-4 mb-4 text-center">{onePlace.textDescription}</p>
            </div>
          </div>
        </div>
      )
      }
    </div >
  );
}

export default RandomPlace;
