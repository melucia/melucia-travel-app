import axios from "axios";
import { useEffect, useState } from "react";

function AllPlaces() {

    const API_URL = "https://melucia-travel-app.adaptable.app";

    const [places, setPlaces] = useState(null);


    const getAllPlaces = () => {
        axios
            .get(`${API_URL}/places`)
            .then((response) => {
                console.log(response.data)
                setPlaces(response.data);
            })
            .catch((error) => {
                console.log("Error getting places from the API...");
                console.log(error);
            });
    };

    useEffect(() => {
        getAllPlaces();
    }, [])

    return (

        <div>
            {places.map((place) => {
                return (
                    <div key={place.id}>
                        <h2>{place.city}</h2>

                    </div>
                )

            })
            }
        </div>
    )


}

export default AllPlaces;