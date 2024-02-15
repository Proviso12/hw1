import "./reset.css";
import "./cards.css";
import "./card-layout.css";
import "./styles.css";
import { CardSuit } from './CardSuit'


//API being used: D&D 5E API
//link to the API docs : https://5e-bits.github.io/docs/
// API Tutorials: https://5e-bits.github.io/docs/docs/tutorials

const monsterInput = document.getElementById("monsterInput");
const searchButton = document.getElementById("searchButton");
const monsterResult = document.getElementById("monsterResult");

searchButton?.addEventListener("click", () => {
  const monsterName = monsterInput?.value.toLowerCase();
  if (monsterName) {
    searchMonster(monsterName);
  } else {
    monsterResult.innerHTML = "Please enter a monster name.";
  }
});

function searchMonster(monsterName) {
  monsterResult.innerHTML = "Searching...";

  axios
    .get(`https://www.dnd5eapi.co/api/monsters`)
    .then((response) => {
      const monsters = response.data.results;
      const matchedMonster = monsters.find(
        (monster) => monster.name.toLowerCase() === monsterName
      );

      if (matchedMonster) {
        axios
          .get(matchedMonster.url)
          .then((monsterResponse) => {
            const monsterData = monsterResponse.data;
            monsterResult.innerHTML = `
              <h2>${monsterData.name}</h2>
              <p><strong>Index:</strong> ${monsterData.index}</p>
              <!-- You can display more monster details here -->
            `;
          })
          .catch((error) => {
            monsterResult.innerHTML = "Error fetching monster details.";
          });
      } else {
        monsterResult.innerHTML = "Monster not found.";
      }
    })
    .catch((error) => {
      monsterResult.innerHTML = "Error fetching monsters.";
    });
}


// Defining a <card-suit> Custom Element : https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
customElements.define('card-suit', CardSuit)
// We're not doing anything with Custom Elements (yet!), other than using <card-suit> in our HTML.

// changes the className on section#cards from (fronts to backs) or (backs to fronts)
const flipCards = () => {
  const cards = document.querySelector<HTMLElement>('#cards')
  if (cards) {
    cards.className = cards.className === 'fronts' ? 'backs' : 'fronts'
  }
}

// a generalized click handler, that does something different depending on the className of the target
const handleButtonClick = (event: MouseEvent) => {
  const button = event.currentTarget as HTMLButtonElement
  if (button.className === 'flip') {
    flipCards()
  } else {
    document.body.className = button.className
  }
}