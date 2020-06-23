const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
})
  .then(function (jsonObject) {
    console.table(jsonObject);
    
    const towns = jsonObject['towns'];

    //loop through prophets arraylist creating elements for each relevant town.
    for(let i = 0; i < towns.length; i++ ) {

        if (towns[i]== towns[4] || towns[i] == towns[1] || towns[i] == towns[5]){

            let card = document.createElement('section');
            let name = document.createElement('h2');
            let motto = document.createElement('h4');
            let photo = document.createElement('img');
            let founded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            

      //Add the text and images to the cards.
            name.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            photo.setAttribute('src','./images/' + towns[i].photo);
            photo.setAttribute('alt', towns[i].name );
            founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
            population.textContent = 'Population: ' + towns[i].currentPopulation;
            rainfall.textContent = 'Annual Average Rainfall: ' + towns[i].averageRainfall;
            
      //title.textContent = prophets[i].name + ' ' + prophets[i].lastname;

      //add elements to arrayList
            card.appendChild(name);
            card.appendChild(motto);
            card.appendChild(photo);
            card.appendChild(founded);
            card.appendChild(population);
            card.appendChild(rainfall);
            
      //card.appendChild();

            document.querySelector('div.cards').appendChild(card);
        }
    }
});

/*
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const cities = jsonObject['towns'];

        for (let i = 0; i < cities.length; i++) {
            if (cities[i].name == "Preston" || cities[i].name == "Fish Haven" || cities[i].name == "Soda Springs") {
                let card = document.createElement('cities');
                card.setAttribute('class', 'city')
                let photo = document.createElement('img');
                let name = document.createElement('h1');
                let motto = document.createElement('h2');
                let yearFounded = document.createElement('h3');
                let currentPopulation = document.createElement('h4');
                let averageRainfall = document.createElement('h5');

                //Main
                photo.setAttribute('src', 'images/' + cities[i].photo);
                photo.setAttribute('alt', cities[i].name);
                name.textContent = cities[i].name;
                motto.textContent = cities[i].motto;
                yearFounded.textContent = 'Date of establishment: ' + cities[i].yearFounded;
                currentPopulation.textContent = "Population: " + cities[i].currentPopulation;
                averageRainfall.textContent = 'Annual rain rainfall: ' + cities[i].averageRainfall;

                card.appendChild(photo);
                card.appendChild(name);
                card.appendChild(motto);
                card.appendChild(yearFounded);
                card.appendChild(currentPopulation);
                card.appendChild(averageRainfall);
                document.querySelector('div.cards').appendChild(card);
            }
        }
    });*/