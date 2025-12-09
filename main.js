document.addEventListener("DOMContentLoaded", () => {
  const weatherEl = document.getElementById("weather");

  const apiKey = "6a0a3cbf0c8c2d1fd4a5dd9dedbc0c94";
  const lat = 45.5152;
  const lon = -122.6784;
  const units = "imperial";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${apiKey}`;

  fetch(url)
    .then(async (response) => {
      const data = await response.json();
      console.log("Status:", response.status, data);

      if (!response.ok) {
        throw new Error(
          data.message || `HTTP error! status: ${response.status}`
        );
      }

      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const unitSymbol = units === "metric" ? "°C" : "°F";

      weatherEl.innerHTML = `
  <span class="weather-label">Weather in Portland, OR</span><br />
  <span class="weather-temp">${temp.toFixed(1)}${unitSymbol}</span><br />
  <span class="weather-desc">${desc}</span>
`;
    })
    .catch((err) => {
      console.error(err);
      weatherEl.textContent = "Unable to load weather right now.";
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("email");
  const submittedMsg = document.getElementById("submitted-msg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (!name || !email) {
      submittedMsg.textContent = "Please enter both your name and email.";
      return;
    }
    submittedMsg.innerHTML = `
      Thank you for submitting your name and email!<br />
      <p>name: ${name} email: ${email}</p>
    `;
  });
});
