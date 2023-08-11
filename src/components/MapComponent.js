import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 36.73,
  lng: 10.3177,
};

function MapComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCV9K2uoVqlgPrLWgtjI_SSjPvwBEivoNg">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
