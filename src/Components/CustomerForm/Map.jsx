// GeocodeComponent.js
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import L from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const GeocodeComponent = () => {
  const [formData, setFormData] = useState ({
    shippingAddress: '',
  });

  const [coordinates, setCoordinates] = useState (null);
  const [reverseGeocodedAddress, setReverseGeocodedAddress] = useState ('');
  const [error, setError] = useState (null);

  const geocodeShippingAddress = async address => {
    try {
      const response = await axios.get (
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent (address)}&key=YOUR_OPENCAGE_API_KEY`
      );

      const {geometry} = response.data.results[0];
      setCoordinates (geometry);
      setError (null);
    } catch (err) {
      setError ('Error fetching geocoding data');
      setCoordinates (null);
    }
  };

  const reverseGeocode = async (lat, lng) => {
    try {
      const response = await axios.get (
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=YOUR_OPENCAGE_API_KEY`
      );

      const {formatted} = response.data.results[0];
      setReverseGeocodedAddress (formatted);
    } catch (err) {
      console.error ('Error fetching reverse geocoding data');
      setReverseGeocodedAddress ('');
    }
  };

  const handleInputChange = e => {
    const value = e.target.value;
    setFormData (prevData => ({
      ...prevData,
      shippingAddress: value,
    }));

    // Trigger geocoding on every keystroke
    geocodeShippingAddress (value);
  };

  const handleMarkerMove = e => {
    const newCoordinates = e.latlng;
    setCoordinates (newCoordinates);
    reverseGeocode (newCoordinates.lat, newCoordinates.lng);
  };

  useEffect (() => {
    // Initial geocoding when component mounts
    geocodeShippingAddress (formData.shippingAddress);
  }, []);

  const renderMap = coordinates => {
    const map = L.map ('map').setView ([coordinates.lat, coordinates.lng], 13);
    L.tileLayer ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo (
      map
    );

    const marker = L.marker ([coordinates.lat, coordinates.lng], {
      draggable: true,
    }).addTo (map);

    marker.on ('dragend', handleMarkerMove);
  };

  return (
    <div>
      <label>Shipping Address:</label>
      <input
        type="text"
        value={formData.shippingAddress}
        onChange={handleInputChange}
      />

      {coordinates &&
        <div>
          <p>Latitude: {coordinates.lat}</p>
          <p>Longitude: {coordinates.lng}</p>
          <div id="map" style={{height: '400px', width: '100%'}} />
        </div>}

      {reverseGeocodedAddress &&
        <div>
          <label>Reverse Geocoded Address:</label>
          <input type="text" value={reverseGeocodedAddress} readOnly />
        </div>}

      {error && <p>{error}</p>}
    </div>
  );
};

export default GeocodeComponent;
