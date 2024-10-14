import React, { useState } from 'react';
import { Map, Marker } from "@vis.gl/react-google-maps";
import '../../Allcss/map.css';

const Mapp = () => {
  const [markerLocation, setMarkerLocation] = useState({
    lat: 51.509865,
    lng: -0.118092,
  });

  return (
    <div className="map-container">
      <Map
        style={{ borderRadius: "20px", width: "100%", height: "500px" }} // You might want to set the height and width
        defaultZoom={13}
        defaultCenter={markerLocation}
        gestureHandling={"greedy"}
        disableDefaultUI
      >
        <Marker position={markerLocation} />
      </Map>
    </div>
  );
}

export default Mapp;