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
        onUpdate(); // udate state om the parent component
      })
      .catch((error) => {
        console.log("Error getting details from the API...");
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="UpdatingForm">
      <div className="UpdateInput">
        <label>Image: </label>
        <input
          type="url"
          name="image"
          placeholder={image}
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div className="UpdateInput">
        <label>City: </label>
        <input
          type="text"
          name="city"
          required
          placeholder={city}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <div className="UpdateInput">
        <label>Country: </label>
        <input
          type="text"
          name="country"
          required
          placeholder={country}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>

      <div className="UpdateInput">
        <label>Description: </label>
        <textarea
          type="text"
          name="description"
          required
          placeholder={description}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="UpdateInput">
        <label>Activity:</label>
        <input
          type="text"
          name="activity"
          required
          placeholder={activity}
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
      </div>

      <div className="UpdateInput">
        <label>Highlight: </label>
        <input
          type="text"
          name="highlight"
          required
          placeholder={highlight}
          value={highlight}
          onChange={(e) => setHighlight(e.target.value)}
        />
      </div>

      <button type="submit">Save</button>
    </form>
  );
}

export default EditPlace;
