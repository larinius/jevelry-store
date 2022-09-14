import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import ReactMapGL from "react-map-gl";

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
      <Container className="pb-5">
        <ReactMapGL
          {...viewport}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
          style={{ width: "100%", height: 400 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </Container>
    </>
  );
};

export default OpenStreetMapArea;
