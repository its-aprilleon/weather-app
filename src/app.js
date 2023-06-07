let cityCurrent = "Burma";

function formatDate(timestamp) {
  let date = new Date();
  let hours = date.getHours();
  if (hours < 10) return `0${hours}`;

  let minutes = date.getMinutes();
  if (minutes < 10) return `0${minutes}`;

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data);
  console.log(response.data.country);

  let cityElement = document.querySelector("#CurrentCity");
  cityElement.innerHTML = response.data.city;

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);

  let timeElement = document.querySelector("#time");
  timeElement.innerHTML = formatDate(response.data.time * 1000);

  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  iconElement.setAttribute("alt", response.data.condition.description);
}

let apiKey = "29baaftfaf333ad6ca3704ob80d346c8";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityCurrent}&key=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
