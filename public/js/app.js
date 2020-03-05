const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

function fetchWeather(location) {
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch(`/weather?address=${encodeURIComponent(location)}`)
    .then(response => {
      response.json().then((data) => {
        if (data.error) {
          messageTwo.textContent = data.error;
        } else {
          messageOne.textContent = data.location;
          messageTwo.textContent = data.forecast;
        }
      })
    })
}

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  fetchWeather(location);
});

