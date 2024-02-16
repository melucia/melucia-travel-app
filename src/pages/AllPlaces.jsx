import axios from "axios";
import { useEffect, useState } from "react";

function AllPlaces() {

    const API_URL = "https://melucia-travel-app.adaptable.app";

    const [places, setPlaces] = useState([]);


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
                        <img src={place.image} style={{height: "15rem"}} />
                        <h2>{place.city}</h2>
                        <p>{place.country}</p>
                        <p>Activity: {place.activity}</p>
                        <p>Highlight: {place.highlight}</p>
                        <p>{place.description}</p>

                    </div>
                )

            })
            }
        </div>
    )


}

export default AllPlaces;