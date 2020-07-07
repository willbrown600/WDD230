/*------------------------------------- Fish Haven API -------------------------------------------------------------*/


const apiURL1 = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&APPID=e5b6156b8b34ff79f7a93c6716b2017b&units=imperial";

fetch(apiURL1)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject['list'][0]);
    console.log(jsObject['list'][0]['dt_txt']);
    console.log(jsObject['list'][0]['main']['temp']);
    console.log(jsObject['list'][0]['weather'][0]['icon']);

    var forecast = jsObject['list'];

    const cTemp = document.querySelector('.forecast');
    const icon = document.querySelector('img');

    

  

    
    for (i = 5; i < 10; i++)
    {	
      var imagesrc = 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png'; 
      var desc = forecast[i].weather[0].description; 
      document.getElementById('icon'+(i)).setAttribute('src', imagesrc); 
      document.getElementById('icon'+(i)).setAttribute('alt', desc);
      document.getElementById('d'+(i - 4)).textContent = forecast[i]['dt_txt'];
      document.getElementById('temp'+(i)).textContent = forecast[i]['main']['temp'];
    }
    
});