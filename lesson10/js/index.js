const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=e5b6156b8b34ff79f7a93c6716b2017b&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const currentTemp = document.querySelector('p1');
    const highTemp = document.querySelector('p2');
    const humidity = document.querySelector('p4');
    const windchill = document.querySelector('p3');
    const windspeed = document.querySelector('p5')

    const icon = document.querySelector('img');

    currentTemp.textContent = jsObject.weather[0].description;
    highTemp.textContent = jsObject.main.temp_max;
    humidity.textContent = jsObject.main.humidity;
    windchill.textContent = jsObject.main.feels_like;
    windspeed.textContent = jsObject.wind.speed;



    
    const desc = jsObject.weather[0].description;

    
    
  });
