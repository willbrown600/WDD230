const apiURL1 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=e5b6156b8b34ff79f7a93c6716b2017b&units=imperial";

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

    

  

    //icon
    /*const imagesrc1 = 'https://openweathermap.org/img/w/' + forecast[0].weather[0].icon + '.png'; 
    const desc1 = forecast[0].weather[0].description; 
    document.getElementById('icon1').setAttribute('src', imagesrc1); 
    document.getElementById('icon1').setAttribute('alt', desc1);
    //console.log('icon1 ='+ document.getElementById('icon1'));
    document.getElementById('day1').textContent = forecast[0]['dt_txt'];
    document.getElementById('high1').textContent = forecast[0]['main']['temp'];

    //Get icon2
    const imagesrc2 = 'https://openweathermap.org/img/w/' + forecast[1].weather[0].icon + '.png'; 
    const desc2 = forecast[1].weather[0].description; 
    document.getElementById('icon2').setAttribute('src', imagesrc2); 
    document.getElementById('icon2').setAttribute('alt', desc2);
    //console.log('icon2 ='+ document.getElementById('icon2'));
    document.getElementById('day2').textContent = forecast[1]['dt_txt'];
    document.getElementById('high2').textContent = forecast[1]['main']['temp'];

    //Get icon3
    const imagesrc3 = 'https://openweathermap.org/img/w/' + forecast[2].weather[0].icon + '.png'; 
    const desc3 = forecast[2].weather[0].description; 
    document.getElementById('icon3').setAttribute('src', imagesrc3); 
    document.getElementById('icon3').setAttribute('alt', desc3);
    //console.log('icon3 ='+ document.getElementById('icon3'));
    document.getElementById('day3').textContent = forecast[2]['dt_txt'];
    document.getElementById('high3').textContent = forecast[2]['main']['temp'];

    //Get icon4
    const imagesrc4 = 'https://openweathermap.org/img/w/' + forecast[3].weather[0].icon + '.png'; 
    const desc4 = forecast[3].weather[0].description; 
    document.getElementById('icon4').setAttribute('src', imagesrc4); 
    document.getElementById('icon4').setAttribute('alt', desc4);
    //console.log('icon4 ='+ document.getElementById('icon4'));
    document.getElementById('day4').textContent = forecast[3]['dt_txt'];
    document.getElementById('high4').textContent = forecast[3]['main']['temp'];

    //Get icon5
    const imagesrc5 = 'https://openweathermap.org/img/w/' + forecast[4].weather[0].icon + '.png'; 
    const desc5 = forecast[4].weather[0].description; 
    document.getElementById('icon5').setAttribute('src', imagesrc5); 
    document.getElementById('icon5').setAttribute('alt', desc5);
    console.log('icon5 ='+ document.getElementById('icon5'));
    document.getElementById('day5').textContent = forecast[4]['dt_txt'];
    document.getElementById('high5').textContent = forecast[4]['main']['temp'];*/

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
  