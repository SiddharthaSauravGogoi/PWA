import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/Theme/ThemeContext';
export default function Navbar() {

  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div className="navbar">
      <h3 className="brand"> Bangalore Weather </h3>
      <button onClick={toggleTheme} className="change-theme-btn">
        Change Theme
      </button>
    </div>
  )
}
