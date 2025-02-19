import React from 'react';
import axios from 'axios';

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}ºC`
    );
  }
  let apiKey = '8944afa6845bd7c413a687258d3211ef';
  let units = 'metric';
  let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;

  axios.get(apiurl).then(handleResponse);
  return (
    <h2>Hello from react</h2>
  )
}
