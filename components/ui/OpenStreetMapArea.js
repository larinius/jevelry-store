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

  // const MAPBOX_KEY=process.env.MAPBOX_KEY;

  return (
    <>
      <Container className="pb-5">
        <ReactMapGL
          {...viewport}
          mapboxAccessToken="pk.eyJ1IjoiZG1pdHJ5Z3J1bnQiLCJhIjoiY2w3d2pqa3RtMG05cjN4bWd6Z280MmZwdiJ9.RMnd54iZC7H8Jnmb1_jAAQ"
          style={{ width: "100%", height: 400 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </Container>
    </>
  );
};

export default OpenStreetMapArea;
