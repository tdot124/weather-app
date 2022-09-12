import React from "react";
import PropTypes from "prop-types";

function ForecastDetails(props) {
  const { forecast } = props;
  const { date, temperature, humidity, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <h2 className="forecast-details__date">{formattedDate}</h2>
      <div className="forecast-details__max-temperature">
        Max Temperature: {temperature.max}&deg;C
      </div>
      <div className="forecast-details__min-temperature">
        Min Temperature: {temperature.min}&deg;C
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}</div>
      <div className="forecast-details__wind">
        Wind: {wind.speed}mph {wind.direction}
      </div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
  }).isRequired,
}
