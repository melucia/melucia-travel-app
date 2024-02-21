<div
    key={index}
    className="shadow-xl border-solid border rounded-xl flex p-2 flex-row w-96 h-80 m-2
lg:p-6 lg:w-5/12 lg:flex-flow"
>
    <div className="object-contain w-96 h-80">
        <Link to={`/places/${place.id}`}>
            {/* <img src={place.image} className="h-72 w-full object-cover" /> */}
            <img src={place.image} className="w-full aspect-ratio: 1 / 1 shadow-lg border-solid border rounded-xl" />
        </Link>
    </div>
    <div className="ml-14">
        <h2 className="text-lg
  lg:text-3xl font-semibold">{place.city}</h2>
        <p className="text-md
  lg:text-xl pt-2">{place.country}</p>
        <p className="text-sm
  lg:text-base pt-6">
            {" "}
            {place.description}
        </p>
        <Link to={`/places/${place.id}`}>
            <button className="bg-cyan-600 hover:bg-cyan-800 text-white font-bold rounded text-sm
    lg:text-base py-2 px-4  mt-12">
                More details
            </button>
        </Link>

        <button
            className="trash bg-blue-950 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 ml-8"
            onClick={() => {
                console.log("deleting");
                deletePlace(place.id);
            }}
        >
            <FaTrashCan />
        </button>
    </div>
</div>