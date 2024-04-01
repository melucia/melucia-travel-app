import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";

function EditPlace({ onUpdate }) {
  const API_URL = " https://melucia-travel-app.adaptable.app";

  const [image, setImage] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [textDescription, setTextDescription] = useState("");
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
        setTextDescription(response.data.textDescription);
      })
      .catch((error) => {
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
      textDescription: textDescription,
      activity: activity,
      highlight: highlight,
    };

    axios
      .put(`${API_URL}/places/${placeId}`, updatedPlace)
      .then((response) => {
        onUpdate();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="self-center bg-green-100 shadow-lg border-solid border rounded-xl w-80 h-80 flex-col p-4"
    >
      <div className="flex justify-between p-1">
        <label className="text-sm">Image: </label>
        <input
          className="text-sm"
          type="url"
          name="image"
          placeholder={image}
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <div className="flex justify-between p-1">
        <label className="text-sm">City: </label>
        <input
          className="text-sm"
          type="text"
          name="city"
          required
          placeholder={city}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <div className="flex justify-between p-1">
        <label className="text-sm">Country: </label>
        <input
          className="text-sm"
          type="text"
          name="country"
          required
          placeholder={country}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>

      <div className="flex justify-between p-1">
        <label className="text-sm">Activity:</label>
        <input
          className="text-sm"
          type="text"
          name="activity"
          required
          placeholder={activity}
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
      </div>

      <div className="flex justify-between p-1">
        <label className="text-sm">Highlight: </label>
        <input
          className="text-sm"
          type="text"
          name="highlight"
          required
          placeholder={highlight}
          value={highlight}
          onChange={(e) => setHighlight(e.target.value)}
        />
      </div>

      <div className="flex justify-between p-1">
        <label className="text-sm">Summary: </label>
        <textarea
          className="text-sm w-7/12 px-1"
          type="text"
          name="description"
          required
          placeholder={description}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="flex justify-between p-1">
        <label className="text-sm">Description: </label>
        <textarea
          className="text-sm w-7/12 px-1"
          type="text"
          name="description"
          required
          placeholder={textDescription}
          value={textDescription}
          onChange={(e) => setTextDescription(e.target.value)}
        />
      </div>
      <div className="flex justify-center mt-3">
        <Button type="submit" variant="details">
          Save
        </Button>
      </div>
    </form>
  );
}

export default EditPlace;
