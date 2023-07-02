/// Gán api key vào biến dưới đây
const API_KEY = "651daf0af47eb49a9b65a0007afcce53";
const DEFAULT_VALUE = '__';
const searchInput = document.getElementById("search-input");
const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector("weather-icon");
const temperature = document.querySelector(".temperature");

///////Section 2
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API_KEY}`)
  .then(response => response.json())
  .then((data) => {
    console.log(data); //// kết quả là gì?
  })