import React from "react";
import PropTypes from "prop-types";
import "../styles/location-details.css";

const LocationDetails = ({ city, country, errorMessage }) => {
  return (
    <h1 className="location-details">
      {errorMessage || `${city}, ${country}`}
    </h1>
  );
};

export default LocationDetails;

LocationDetails.defaultProps = {
  errorMessage: "",
};

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};
