const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector("#cards");

getProphetData();

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
  }
  
getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let firstName = prophet.name;
        let lastName = prophet.lastname;
        let card = document.createElement("section");
        let bDay = document.createElement("p");
        let bPlace = document.createElement("p");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let firstAndLastName = `${firstName} ${lastName}`

        //Populate elements
        fullName.textContent = firstAndLastName;
        bDay.textContent = `Date of birth ${prophet.birthdate}`;
        bPlace.textContent = `Place of birth ${prophet.birthplace}`



        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${firstAndLastName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        

        card.appendChild(fullName);
        card.appendChild(bDay);
        card.appendChild(bPlace);
        card.appendChild(portrait);
        card.setAttribute('style', 'background-color:brown');

        cards.appendChild(card);

    });
}