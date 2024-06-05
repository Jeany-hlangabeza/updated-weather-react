import React from "react";

export default function DailyForecast(props) {
  function maxTemperature() {
    let temperature = Math.round(props.forecastData.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.forecastData.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.forecastData.dt * 1000);
    let day = date.getDate();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function icon() {
    let icon = `http://openweathermap.org/img/wn/${props.forecastData.weather[0].icon}@2x.png`;

    return icon;
  }

  return (
    <div>
      <div className="WeatherForcast-day">{day()}</div>
      <div>
        <img src={icon()} alt="weather-sunny" />
      </div>
      <div className="weather-forcast-temp">
        <span className="temp-max">
          <strong>{maxTemperature()}°</strong>
        </span>
        <span className="temp-min"> {minTemperature()}°</span>
      </div>
    </div>
  );
}
