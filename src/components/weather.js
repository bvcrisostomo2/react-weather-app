import React from "react";

export const Weather = props => {
  return (
    <div className="weather-body">
      {props.city && props.country && (
        <div>
          <p>
            Location:
            <span className="weather-body-span">
              {" "}
              {props.city}, {props.country}
            </span>
          </p>
          <hr />
        </div>
      )}
      {props.temperature && (
        <div>
          <p>
            Temperature:{" "}
            <span className="weather-body-span">{props.temperature} C</span>
          </p>
          <hr />
        </div>
      )}
      {props.humidity && (
        <div>
          <p>
            Humidity:{" "}
            <span className="weather-body-span">{props.humidity}</span>
          </p>
          <hr />
        </div>
      )}
      {props.description && (
        <div>
          <p>
            Condition:{" "}
            <span className="weather-body-span">{props.description}</span>
          </p>
        </div>
      )}
      {props.error && (
        <div>
          <p>
            <span className="weather-body-span">{props.error}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Weather;
