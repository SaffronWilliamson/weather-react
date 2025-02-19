import Weather from './WeatherSearch';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>
        <Weather city="Manchester" />
      </header>
      
    </div>
  );
}

export default App;
