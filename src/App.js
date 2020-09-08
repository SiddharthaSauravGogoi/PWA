import React, { useContext, useEffect } from 'react';
import { ThemeContext } from './contexts/Theme/ThemeContext';
import './main.css';
import ErrorBoundary from './components/ErrorBoundaries';
import API from './services/dataService';

function App() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const weatherResults = API.getWeatherData();
    weatherResults.then( data => console.log(data))
  }, [])
  
  return (
    <ErrorBoundary >
      <div className="container"
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.textColor
        }}>
        <div> Weather App</div>
        <button onClick={toggleTheme}>
          Change Theme
      </button>
      </div>
    </ErrorBoundary>

  );
}

export default App;
