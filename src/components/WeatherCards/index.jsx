import React from 'react';
import PropTypes from 'prop-types';

export default function WeatherCards(props) {

  const convertToCelsius = (temp) => {
    const newTemp = temp - 273.15
    return newTemp.toFixed(2)
  }
  return (
    <>
      {props.data.data
        ? props.data.data.list
          .map((item, index) => <div className="weather-cards" key={index} style={{ border: '1px solid', borderColor: props.bgColor }}>
            <div className="date">
              Date: {item.dt_txt}
            </div>
            <div className="temp">
              Temperature: {convertToCelsius(item.main.temp) + ' C'}
            </div>
            <div className="weather">
              Forecast: {item.weather[0].main}
            </div>
            <div className="weather">
              Description: {item.weather[0].description}
            </div>
            {/* <div>
              Details
            </div> */}
          </div>) : null
      }
    </>
  )
}

WeatherCards.propTypes = {
  weatherData: PropTypes.array,
  bgColor: PropTypes.string,
}