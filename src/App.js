import Weather from './WeatherSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>
        <Weather city="Manchester" />
        <p>
          Coded by
          <a href="https://github.com/SaffronWilliamson"> Saffron </a>
          open sourced on{' '}
          <a href="https://github.com/SaffronWilliamson/weather-react">
            GitHub
          </a>
          , and hosted on
          <a href="https://weather-react-saffron.netlify.app/"> Netlify</a>
        </p>
      </header>
    </div>
  );
}

export default App;
