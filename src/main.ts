import "./reset.css";
import "./cards.css";
import "./card-layout.css";
import "./styles.css";
import { CardSuit } from './CardSuit'
import internal from "stream";

const dndDatabaseUrl = "https://www.dnd5eapi.co/api/"


//API being used: D&D 5E API
//link to the API docs : https://5e-bits.github.io/docs/
// API Tutorials: https://5e-bits.github.io/docs/docs/tutorials

// Cards
const raceCard = document.querySelector("#Races #card_Type") as HTMLButtonElement;
const classCard = document.querySelector("#Classes #card_Type") as HTMLButtonElement;
const spellsCard = document.querySelector("#Spells #card_Type") as HTMLButtonElement;
const monstersCard = document.querySelector("#Monsters #card_Type") as HTMLButtonElement;


const cardHandler = async (e: MouseEvent) => {
  const apiQuery = (e.target as HTMLButtonElement).textContent?.toLowerCase() ?? '';

  // this is what you'll be changing to match your website's needs
  console.log(await SearchDndDatabase(apiQuery));
}

const setupCards = (): void => {
  raceCard.addEventListener('click', cardHandler);
  classCard.addEventListener('click', cardHandler);
  spellsCard.addEventListener('click', cardHandler);
  monstersCard.addEventListener('click', cardHandler);
}
setupCards();

// Dice related stuff
let diceAmount = document.querySelector('#dice-Amount') as HTMLInputElement;
let diceResult = document.querySelector('#dice-Result') as HTMLUListElement;
let diceType = document.querySelector("#dice-type") as HTMLSelectElement;
document.querySelector('#roll-Button')?.addEventListener('click', (e: Event) => RollDice());



function RollDice(): void {
  let amount = Math.min(Number(diceAmount?.value), 10000);
  let type = Number(diceType?.value);
  let diceList: number[] = [];

  // make sure the user knows that it's max 10000
  diceAmount.value = amount.toString();

  for (let i = 0; i < amount; i++) {
    diceList.push(Math.floor(Math.random() * type + 1));
    console.log(diceList[i]);
  }
  PrintDice(diceList);
}

function PrintDice(diceList: any[]): void {
  while (diceResult.firstChild) {
    diceResult.removeChild(diceResult.lastChild as Node);
  }
  diceList.forEach(element => {
    let node = document.createElement("li");

    node.appendChild(document.createTextNode(element));
    node.setAttribute("id", "book_Result");

    diceResult.appendChild(node);
  });
}



/**
 * Search DnD database
 * @param query search term such as "ability-scores/cha" for charisma
 * @returns Object in the format 
 * {
 * 'index': string, 
 * 'name': string,
 * 'full_name': string,
 * 'desc': string,
 * 'url': current url,
 * 'etc...': any
 *  }
 */
// {
//   "ability-scores": "/api/ability-scores",
//   "alignments": "/api/alignments",
//   "backgrounds": "/api/backgrounds",
//   "classes": "/api/classes",
//   "conditions": "/api/conditions",
//   "damage-types": "/api/damage-types",
//   "equipment": "/api/equipment",
//   "equipment-categories": "/api/equipment-categories",
//   "feats": "/api/feats",
//   "features": "/api/features",
//   "languages": "/api/languages",
//   "magic-items": "/api/magic-items",
//   "magic-schools": "/api/magic-schools",
//   "monsters": "/api/monsters",
//   "proficiencies": "/api/proficiencies",
//   "races": "/api/races",
//   "rule-sections": "/api/rule-sections",
//   "rules": "/api/rules",
//   "skills": "/api/skills",
//   "spells": "/api/spells",
//   "subclasses": "/api/subclasses",
//   "subraces": "/api/subraces",
//   "traits": "/api/traits",
//   "weapon-properties": "/api/weapon-properties"
// }
const SearchDndDatabase = async (query: string): Promise<object> => {
  let data = {};

  // This is optional, but we want to make sure we get JSON back
  let fetchData = {
    method: "GET",
    headers: {'Content-Type': 'application/json'}
  }
  let response = await fetch(`${dndDatabaseUrl}${query}`, fetchData);
  data = await response.json();
  return data;
}