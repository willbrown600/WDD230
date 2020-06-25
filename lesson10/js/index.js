const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
})
  .then(function (jsonObject) {
    console.table(jsonObject);
    
    const towns = jsonObject['towns'];

    //loop through towns arraylist creating elements for each relevant town.
    for(let i = 0; i < towns.length; i++ ) {

        if (towns[i]== towns[4] || towns[i] == towns[1] || towns[i] == towns[5]){

            let card = document.createElement('section');
            let name = document.createElement('h2');
            let motto = document.createElement('h4');
            let photo = document.createElement('img');
            let founded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let div = document.createElement('div');
            

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
            div.appendChild(name);
            div.appendChild(motto);
            card.appendChild(photo);
            div.appendChild(founded);
            div.appendChild(population);
            div.appendChild(rainfall);
            card.appendChild(div);
            
      //card.appendChild();

            document.querySelector('div.cards').appendChild(card);
        }
    }
});

