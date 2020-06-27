const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=e5b6156b8b34ff79f7a93c6716b2017b&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const currentTemp = document.querySelector('#current-temp');
    const icon = document.querySelector('img');

    currentTemp.textContent = jsObject.main.temp;

    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;

    
    icon.setAttribute('src', imagesrc);
    icon.setAttribute('alt', desc);
  });