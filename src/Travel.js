import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    <h2>Travel.js : {destination}, {country}</h2>
    <img src={photo} alt={country} />
    <p>Distance:{distance} km</p>
  </figure>

)

export default Travel;