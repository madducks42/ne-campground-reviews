import React, { useState, useEffect } from 'react';

import OpenWeatherTile from './OpenWeatherTile';

const OpenWeatherContainer = (props) => {
  const [weather, setWeather] = useState({
    name: "",
    conditions: "",
    realTemp: "",
    feelsTemp: "",
    humidity: "",
    icon: "",
    description: ""
  })

  useEffect(() => {
    debugger
    fetch(`/api/v1/campgrounds/1/weather?query=${props.zipCode}`)
    .then((response) => {
          if (response.ok) {
            return response
          } else {
            let errorMessage = `${response.status} (${response.statusText})`
            let error = new Error(errorMessage)
            throw(error)
          }
        })
        .then((response) => {
     return response.json()
    })
    .then((body) => {
      debugger
      setWeather({
        name: body.name,
        description: body.weather[0].description,
        icon: body.weather[0].icon,
        conditions: body.weather[0].main,
        actualTemp: body.main.temp,
        feelsTemp: body.main.feels_like,
        humidity: body.main.humidity
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  return (
    <div className="callout">
      <h1>Testing</h1>
      {/* <OpenWeatherTile weather={weather} /> */}
    </div>
  )
}

export default OpenWeatherContainer
