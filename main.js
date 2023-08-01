const apiKey = "8db11d4b44ed684cd7500400e4eb1dac";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const icon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(url + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      icon.src = "clouds.png";
    } else if (data.weather[0].main == "Clear") {
      icon.src = "clear.png";
    } else if (data.weather[0].main == "Rain") {
      icon.src = "rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      icon.src = "drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      icon.src = "mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
btn.addEventListener("click", () => {
  checkWeather(input.value);
});
checkWeather();
