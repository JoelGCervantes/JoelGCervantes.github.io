document.addEventListener("DOMContentLoaded", () => {
  const nameEl = document.getElementById("name");
  nameEl.textContent = "Joel Garcia-Cervantes";

  const weatherEl = document.getElementById("weather");

  const apiKey = "6a0a3cbf0c8c2d1fd4a5dd9dedbc0c94";
  const lat = 45.5152;
  const lon = -122.6784;
  const units = "imperial";
  const part = "minutely,hourly,daily";

  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=${part}&appid=${apiKey}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const unitSymbol = units === "metric" ? "°C" : "°F";

      weatherEl.textContent = `Current weather in ${city}: ${temp.toFixed(
        1
      )}${unitSymbol}, ${desc}`;
    })
    .catch((err) => {
      console.error(err);
      weatherEl.textContent = "Unable to load weather right now.";
    });
});
