const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
})
  .then(function (jsonObject) {
    console.table(jsonObject);
    
    const prophets = jsonObject['prophets'];

    //loop through prophets arraylist creating elements for each prophet.
    for(let i = 0; i < prophets.length; i++ ) {
      let card = document.createElement('section');
      let title = document.createElement('h2');
      let birthdate = document.createElement('p');
      let bornAt = document.createElement('p');
      let photo = document.createElement('img');

      //Add the text and images to the cards.
      birthdate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
      bornAt.textContent = 'Place of Birth: ' + prophets[i].birthplace;
      photo.setAttribute('src', prophets[i].imageurl);
      photo.setAttribute('alt', prophets[i].name + prophets[i].lastname + " - " + prophets[i].order);
      title.textContent = prophets[i].name + ' ' + prophets[i].lastname;

      //add elements to arrayList
      card.appendChild(title);
      card.appendChild(birthdate);
      card.appendChild(bornAt);
      card.appendChild(photo);

      document.querySelector('div.cards').appendChild(card);
  }
});

  

