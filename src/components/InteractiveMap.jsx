import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const InteractiveMap = ({ latitude, longitude }) => {

    useEffect(() => {

        const mapContainer = L.DomUtil.get('map');
        if (mapContainer != null) {
            mapContainer._leaflet_id = null;
        }

        const map = L.map('map').setView([latitude, longitude], 11);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
    }, [latitude, longitude]);

    return (
        <div className="flex justify-center py-8">

            <div id="map" className="h-96 w-4/5 rounded-lg shadow-md"></div>

        </div>
    )
};

export default InteractiveMap;
