import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Map, { Marker } from "react-map-gl";
import * as Icon from "react-bootstrap-icons";

const OpenStreetMapArea = () => {
  const [viewport, setViewport] = useState({
    longitude: 34.868,
    latitude: 32.3109,
    zoom: 14,
    width: "100vw",
    height: "100vh",
  });

  return (
    <>
      <div id="google-map">
        <Container className="pb-5">
          <Map
            {...viewport}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
            style={{ width: "100%", height: 400 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <Marker longitude={34.868} latitude={32.3109} anchor="bottom">
              <Icon.GeoAltFill size={42}/>
            </Marker>
          </Map>
        </Container>
      </div>
    </>
  );
};

export default OpenStreetMapArea;
