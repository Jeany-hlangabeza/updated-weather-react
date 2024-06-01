import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control search-box"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <button type="submit" className="search-btn">
              Search
            </button>
          </div>
        </div>
      </form>
      <h1>New york</h1>
      <ul className="date-time">
        <li>Saturday 15:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny-clouds"
          />
          <span className="temperature">27</span>{" "}
          <span className="units">
            <a href="https://jeany.com">℃</a> |<a href="https://jeany.com">℉</a>
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation: 5%</li>
            <li>Humidity: 33%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
