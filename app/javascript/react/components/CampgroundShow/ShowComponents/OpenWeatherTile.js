import React, { useState, useEffect } from 'react';

const OpenWeatherTile = (props) => {

  return (
    <div className="callout weather-container">
      <h1>Current Weather on {props.weather.date}</h1>
      <ul>
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

