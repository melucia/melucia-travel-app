import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

function AddPlace({ onAddPlace }) {
  const [newPlace, setNewPlace] = useState({
    image: "",
    city: "",
    country: "",
    description: "",
    activity: "",
    highlight: "",
  });

  const API_URL = "https://melucia-travel-app.adaptable.app";

  const navigate = useNavigate();

  const handleValueChanges = (e) => {
    setNewPlace({
      ...newPlace,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API_URL}/places`, newPlace)
      .then((response) => {
        onAddPlace(response.data);
        setNewPlace({
          image: "",
          city: "",
          country: "",
          description: "",
          activity: "",
          highlight: "",
        });
        navigate("/places");
      })
      .catch((error) => {});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="self-center bg-green-100 shadow-lg border-solid border rounded-xl w-80 h-64 flex-col p-4"
    >
      <div className="flex justify-between p-1">
        <label className="text-sm">Image: </label>
        <input
          className="text-sm"
          type="url"
          name="image"
          placeholder="Place Image"
          value={newPlace.image}
          onChange={handleValueChanges}
        />
      </div>

      <div className="flex justify-between gap-16 p-1">
        <label className="text-sm">City: </label>
        <input
          className="text-sm"
          type="text"
          name="city"
          required
          placeholder="Copenhagen"
          value={newPlace.city}
          onChange={handleValueChanges}
        />
      </div>

      <div className="flex justify-between gap-10 p-1">
        <label className="text-sm">Country: </label>
        <input
          className="text-sm"
          type="text"
          name="country"
          required
          placeholder="Denmark"
          value={newPlace.country}
          onChange={handleValueChanges}
        />
      </div>

      <div className="flex justify-between gap-4 p-1">
        <label className="text-sm">Description: </label>
        <input
          className="text-sm"
          type="text"
          name="description"
          required
          placeholder="ABC"
          value={newPlace.description}
          onChange={handleValueChanges}
        />
      </div>

      <div className="flex justify-between gap-10 p-1">
        <label className="text-sm">Activity:</label>
        <input
          className="text-sm"
          type="text"
          name="activity"
          required
          placeholder="Tivoli Gardens"
          value={newPlace.activity}
          onChange={handleValueChanges}
        />
      </div>

      <div className="flex justify-between gap-8 p-1">
        <label className="text-sm">Highlight: </label>
        <input
          className="text-sm"
          type="text"
          name="highlight"
          required
          placeholder="ABC"
          value={newPlace.highlight}
          onChange={handleValueChanges}
        />
      </div>
      <div className="flex justify-center py-3">
        <Button variant="add" size="sm">
          Add
        </Button>
      </div>
    </form>
  );
}

export default AddPlace;
