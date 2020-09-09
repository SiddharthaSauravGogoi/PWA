import React, { useContext, useEffect } from 'react';
import { ThemeContext } from './contexts/Theme/ThemeContext';
import ErrorBoundary from './components/ErrorBoundaries';
import WeatherCards from './components/WeatherCards';
import API from './services/dataService';
import './main.css';
import Navbar from './components/Navbar';

function App() {

  const { theme } = useContext(ThemeContext);

  const [weatherData, updateWeatherData] = React.useState({})

  useEffect(() => {
    const weatherResults = API.getWeatherData();
    weatherResults.then(data => {
      if(data) {
        updateWeatherData(data)
      }
    })
  }, [])
  
  return (
    <ErrorBoundary >
      <div className="container"
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.textColor
        }}>
        <Navbar />
        <div className="cards-wrapper">
          <WeatherCards data={weatherData} bgColors={theme.textColor}/>
        </div>
      </div>
    </ErrorBoundary>

  );
}

export default App;
