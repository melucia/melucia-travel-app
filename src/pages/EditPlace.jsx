import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditPlace({ onUpdate }) {
  const API_URL = " https://melucia-travel-app.adaptable.app";

  const [image, setImage] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [activity, setActivity] = useState("");
  const [highlight, setHighlight] = useState("");

  const { placeId } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/places/${placeId}`)
      .then((response) => {
        setImage(response.data.image);
        setCity(response.data.city);
        setCountry(response.data.country);
        setDescription(response.data.description);
        setActivity(response.data.activity);
        setHighlight(response.data.highlight);
      })
      .catch((error) => {
        console.log("Error getting project details from the API...");
        console.log(error);
      });
  }, [placeId]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedPlace = {
      image: image,
      city: city,
      country: country,
      description: description,
      activity: activity,
      highlight: highlight,
    };

    axios
      .put(`${API_URL}/places/${placeId}`, updatedPlace)
      .then((response) => {
        console.log("Sending put request")
        onUpdate(); // update state on the parent component
      })
      .catch((error) => {
        console.log("Error getting details from the API...");
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="UpdatingForm py-12 flex flex-col items-center gap-6 lg:w-1/3">
      <div className="UpdateInput p-1">
        <label className="mx-6">Image: </label>
        <input
          type="url"
          name="image"
          placeholder={image}
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div className="UpdateInput p-1">
        <label className="mx-6">City: </label>
        <input
          type="text"
          name="city"
          required
          placeholder={city}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <div className="UpdateInput p-1">
        <label className="mx-6">Country: </label>
        <input
          type="text"
          name="country"
          required
          placeholder={country}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>


      <div className="UpdateInput p-1">
        <label className="mx-6">Activity:</label>
        <input
          type="text"
          name="activity"
          required
          placeholder={activity}
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
      </div>

      <div className="UpdateInput p-1">
        <label className="mx-6">Highlight: </label>
        <input
          type="text"
          name="highlight"
          required
          placeholder={highlight}
          value={highlight}
          onChange={(e) => setHighlight(e.target.value)}
        />
      </div>

      <div className="UpdateInput flex">
        <label className="mx-6">Description: </label>
        <textarea
          type="text"
          name="description"
          required
          placeholder={description}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="h-36 w-44"
        />
      </div>
      <div className="flex justify-center">
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold w-24 py-2 rounded">Save</button>
      </div>
    </form>
  );
}

export default EditPlace;
