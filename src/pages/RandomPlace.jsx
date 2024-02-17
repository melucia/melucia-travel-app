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

    useEffect(()=> {
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
      <RandomButton onClick={handleClick} />

      {onePlace && (
        <>
          <img src={onePlace.image} style={{ height: "20rem" }} />
          <h2>{onePlace.city}</h2>
          <p>{onePlace.country}</p>
          <p>Activity: {onePlace.activity}</p>
          <p>Highlight: {onePlace.highlight}</p>
          <p>{onePlace.description}</p>
        </>
      )}
    </div>
  );
}

export default RandomPlace;
