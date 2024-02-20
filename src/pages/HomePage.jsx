import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RandomButton from "../components/RandomButton";
import RandomPlace from "./RandomPlace";
import HomeCarousel from "@/components/HomeCarousel";



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
      <div className="flex flex-wrap justify-center">
        <HomeCarousel places={places} />
      </div>
    </div>
  );
}

export default HomePage;
