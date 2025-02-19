import React from 'react';
import './Weather.css';

export default function Weather() {
  let weatherData = {
    city: 'Rome',
    timeUpdated: 'Monday, 13:00',
    description: 'Cloudy',
    imgUrl: 'https://ssl.gstatic.com/onebox/weather/64/cloudy.png',
    humidity: 80,
    wind: 30,
    temp: 12,
  };

  return (
    <div className="Weather">
      <header>
        <form className="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="search-form-input"
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
      </header>
      <main>
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-city">{weatherData.city}</h1>
            <p className="weather-app-details">
              <ul>
                <li>Last updated: {weatherData.timeUpdated}</li>
                <li>Condition: {weatherData.description}</li>
              </ul>
              <br />
              Humidity: <strong>{weatherData.humidity}%</strong>, Wind:
              <strong> {weatherData.wind}km/h</strong>
            </p>
          </div>
          <div className="weather-app-temp-container">
            <div>
              <img src={weatherData.imgUrl} alt={weatherData.description} />
            </div>
            <div className="weather-app-unit">{weatherData.temp}°C</div>
          </div>
        </div>
      </main>
      <footer>
        <p>
          Coded by{' '}
          <a href="https://github.com/SaffronWilliamson">Saffron Williamson</a>,
          open sourced on{' '}
          <a href="https://github.com/SaffronWilliamson/weather-react">
            GitHub
          </a>
          , and hosted on{' '}
          <a href="https://weather-react-saffron.netlify.app/">Netlify.</a>
        </p>
      </footer>
    </div>
  );
}
