import React from 'react';

const OpenWeatherTile = (props) => {

  return (
    <div className="callout weather-container">
      <h1>Weather for {props.weather.date}</h1>
      <ul>
        <li className='weather'><img src={`http://openweathermap.org/img/wn/${props.weather.icon}@2x.png`} alt= "current weather conditions"/></li>
        <li className='weather'>Conditions: {props.weather.conditions}</li>
        <li className='weather'>Current Temp: {Math.round(props.weather.currentTemp)}&deg;F</li>
        <li className='weather'>High Temp: {Math.round(props.weather.highTemp)}&deg;F</li>
        <li className='weather'>Low Temp: {Math.round(props.weather.lowTemp)}&deg;F</li>
        <li className='weather'>Humidity: {Math.round(props.weather.humidity)}%</li>
        <li className='weather'>Wind: {Math.round(props.weather.wind)}mph</li>
        
      </ul>
    </div>
  )
}

export default OpenWeatherTile

