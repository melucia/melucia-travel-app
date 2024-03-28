import { useEffect, useState } from "react";
import axios from "axios";
import RandomButton from "../components/RandomButton";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

function RandomPlace() {
  const [randomPlaces, setRandomPlaces] = useState(null);
  const [onePlace, setOnePlace] = useState("");

  const fetchRandomPlace = async () => {
    try {
      const respone = await axios.get(
        "https://melucia-travel-app.adaptable.app/places"
      );
      const result = await respone.data;

      setRandomPlaces(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRandomPlace();
  }, []);

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
      <h2 className="text-center text-lg lg:text-2xl font-semibold mt-10">
        Explore the unknown: Random destination, activate!
      </h2>
      <RandomButton onClick={handleClick} />
      {!onePlace && (
        <div className="flex justify-center items-start h-96">
          <h2 className="text-semibold text-xl">Click the button to start!</h2>
        </div>
      )}
      {onePlace && (
        <div className="flex justify-center items-center">
          <Card className="w-3/5 lg:w-1/2 ">
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-col items-center">
                <span className="text-xl lg:text-3xl font-semibold">
                  {onePlace.city}
                </span>
                <img
                  src={onePlace.image}
                  className="h-full w-full md:w-3/5 xl:w-1/2  rounded-md object-cover mt-4"
                />
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-4">
                <span className="text-lg lg:text-xl">{onePlace.country}</span>
                <span className="text-sm lg:text-lg">
                  <b>Activity:</b> {onePlace.activity}
                </span>
                <span className="text-sm lg:text-lg">
                  <b>Highlight:</b> {onePlace.highlight}
                </span>
                <span className="text-sm lg:text-lg">
                  {onePlace.description}
                </span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-row justify-center items-center">
              <div className="flex justify-start gap-4 lg:gap-8 items-center text-center">
                <div className="border rounded-xl px-2 bg-emerald-300 text-sm  lg:text-md">
                  #{onePlace.tagOne}
                </div>
                <div className="border rounded-xl px-2 bg-emerald-300 text-sm lg:text-md">
                  #{onePlace.tagTwo}
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}

export default RandomPlace;
