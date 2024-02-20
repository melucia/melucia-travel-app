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
    <form onSubmit={handleSubmit} className="self-center shadow-lg border-solid border rounded-xl w-80 h-64 flex-col p-4">
      <h2 className="text-center text-lg mb-1 -mt-0.5">Add a new Place</h2>

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

      <button className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold py-1 px-2 rounded ml-28 mt-1.5 text-sm">
        Add</button>
    </form>
  );
}

export default AddPlace;
