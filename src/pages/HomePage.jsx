import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeCarousel from "@/components/HomeCarousel";
import { Button } from "@/components/ui/button";

function HomePage() {
  const API_URL = "https://melucia-travel-app.adaptable.app";

  const [places, setPlaces] = useState([]);

  const getAllPlaces = () => {
    axios
      .get(`${API_URL}/places`)
      .then((response) => {
        setPlaces(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllPlaces();
  }, []);

  return (
    <div className="text-center w-screen">
      <div className="flex w-screen justify-center">
        <HomeCarousel places={places} />
      </div>
      <Link
        to="/places"
        className="font-semibold lg:text-xl hover:text-blue-800"
      >
        <Button className="mx-2" variant="details">
          Discover all destinations
        </Button>
      </Link>
    </div>
  );
}

export default HomePage;
