import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Themes from './Colors'

const initialState = {
  light: null,
  theme: {},
  toggleTheme: () => {},
};
const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
  const [light, setTheme] = React.useState(true);
  const [theme, updateColors] = React.useState({})

  const toggleTheme = () => {
    setTheme(!light)
  };

  useEffect(() => {
    const browserThemeState = JSON.parse(localStorage.getItem('theme'));
    if(browserThemeState.textColor === '#000') {
      updateColors(Themes.light);
      setTheme(item => item)
    } else {
      updateColors(Themes.dark)
      setTheme(item => !item)
    }
  }, [])

  useEffect(() => {
    if(light) {
      updateColors(Themes.light)
      localStorage.setItem('theme', JSON.stringify(Themes.light));
    } else {
      updateColors(Themes.dark)
      localStorage.setItem('theme', JSON.stringify(Themes.dark));
    }
  }, [light])

  return (
    <ThemeContext.Provider
      value={{
        light,
        theme,
        toggleTheme,
      }} >
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.any,
};

export {
  ThemeProvider,
  ThemeContext,
};