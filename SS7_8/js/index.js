/// Gán api key vào biến dưới đây
const API_KEY = "651daf0af47eb49a9b65a0007afcce53";
const DEFAULT_VALUE = '__';
const searchInput = document.getElementById("search-input");
const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");

///////Section 2
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");



searchInput.addEventListener("change", function (event) {
  console.log(event.target.value); ////?
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}&lang=vi&units=metric`)
    .then(response => response.json())
    .then((data) => {
      console.log(data); //// kết quả là gì?

      cityName.innerHTML = data.name;
      weatherState.innerHTML = data.weather[0].description;
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      console.log(weatherIcon.src);
      temperature.innerHTML = data.main.temp;


      // Code Hà Phương
      let sunriseTime = new Date((Number(data.sys.sunrise) * 1000));
      console.log("sunriseTime: ", sunriseTime);
      sunrise.innerHTML = `${sunriseTime.getHours()}:${sunriseTime.getMinutes()}`;

      let sunsetTime = new Date(Number(data.sys.sunset) * 1000)
      sunset.innerHTML = `${sunsetTime.getHours()}:${sunsetTime.getMinutes()}`

      humidity.innerHTML = data.main.humidity
      windSpeed.innerHTML = (data.wind.speed * 3.6).toFixed(3);
    });
})

