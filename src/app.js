let cityCurrent = "Myanmar";

function displayTemperature(response) {
  console.log(response.data);
  console.log(response.data.country);

  let cityElement = document.querySelector(".CurrentCity");
  cityElement.innerHTML = response.data.city;

  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}

let apiKey = "29baaftfaf333ad6ca3704ob80d346c8";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityCurrent}&key=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
