import { useState } from "react";

function AddPlace({ onAddPlace }) {
  const [newPlace, setNewPlace] = useState({
    image: "",
    city: "",
    country: "",
    description: "",
    activity: "",
    highlight: "",
  });

  const handleValueChanges = (e) => {
    setNewPlace({
      ...newPlace,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPlace({
      id: Date.now(),
      image: newPlace.image,
      city: newPlace.city,
      country: newPlace.country,
      description: newPlace.description,
      activity: newPlace.activity,
      highlight: newPlace.highlight,
    });
    setNewPlace({
      image: "",
      city: "",
      country: "",
      description: "",
      activity: "",
      highlight: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new Place</h2>

      <div className="UpdateInput">
        <label>Image: </label>
        <input
          type="url"
          name="image"
          placeholder="Place Image"
          value={newPlace.image}
          onChange={handleValueChanges}
        />
      </div>

      <div className="UpdateInput">
        <label>City: </label>
        <input
          type="text"
          name="city"
          required
          placeholder="Copenhagen"
          value={newPlace.city}
          onChange={handleValueChanges}
        />
      </div>

      <div className="UpdateInput">
        <label>Country: </label>
        <input
          type="text"
          name="country"
          required
          placeholder="Denmark"
          value={newPlace.country}
          onChange={handleValueChanges}
        />
      </div>

      <div className="UpdateInput">
        <label>Description: </label>
        <input
          type="text"
          name="description"
          required
          placeholder="ABC"
          value={newPlace.description}
          onChange={handleValueChanges}
        />
      </div>

      <div className="UpdateInput">
        <label>Activity:</label>
        <input
          type="text"
          name="activity"
          required
          placeholder="Tivoli Gardens"
          value={newPlace.activity}
          onChange={handleValueChanges}
        />
      </div>

      <div className="UpdateInput">
        <label>Highlight: </label>
        <input
          type="text"
          name="highlight"
          required
          placeholder="ABC"
          value={newPlace.highlight}
          onChange={handleValueChanges}
        />
      </div>

      <button>Add</button>
    </form>
  );
}

export default AddPlace;
