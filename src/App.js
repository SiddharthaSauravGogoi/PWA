import React, { useContext } from 'react';
import { ThemeContext } from './contexts/Theme/ThemeContext';
import './main.css';
import ErrorBoundary from './components/ErrorBoundaries';

function App() {

  const { theme, toggleTheme } = useContext(ThemeContext);

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
