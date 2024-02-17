import "./reset.css";
import "./cards.css";
import "./card-layout.css";
import "./styles.css";
import { CardSuit } from './CardSuit'
import internal from "stream";
import { json } from "stream/consumers";

//API being used: D&D 5E API
//link to the API docs : https://5e-bits.github.io/docs/
// API Tutorials: https://5e-bits.github.io/docs/docs/tutorials

const dndDatabaseUrl = "https://www.dnd5eapi.co/api/"

// Cards
const raceCard = document.querySelector("#Races #card_Type") as HTMLButtonElement;
const classCard = document.querySelector("#Classes #card_Type") as HTMLButtonElement;
const spellsCard = document.querySelector("#Spells #card_Type") as HTMLButtonElement;
const monstersCard = document.querySelector("#Monsters #card_Type") as HTMLButtonElement;
const cardList = document.querySelector("#card_List") as HTMLUListElement;

// Dice related stuff
const diceAmount = document.querySelector('#dice-Amount') as HTMLInputElement;
const diceType = document.querySelector("#dice-type") as HTMLSelectElement;
const diceResult = document.querySelector('#dice-Result') as HTMLUListElement;
document.querySelector('#roll-Button')?.addEventListener('click', (e: Event) => RollDice());

//sets up each card to have their own onclick handler
function setupCards(): void{
  raceCard.addEventListener('click', cardHandler);
  classCard.addEventListener('click', cardHandler);
  spellsCard.addEventListener('click', cardHandler);
  monstersCard.addEventListener('click', cardHandler);
}
setupCards();

//will respond to a button click by calling the api 
//search function with the information of the clicked card
async function cardHandler(e: MouseEvent) {
  const apiQuery = (e.target as HTMLButtonElement).textContent?.toLowerCase() ?? '';

  // this is what you'll be changing to match your website's needs
  console.log(await SearchDndDatabase(apiQuery));
  PrintCards(AddNamesToList(await SearchDndDatabase(apiQuery)));
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

function AddNamesToList(apiList: any): string[]
{
  let nameList:string[] = [];
  for (let name of apiList.results) {
   
     console.log(JSON.stringify(name));
     nameList.push(JSON.stringify(name));
   }
   return nameList;
}

function PrintCards(nameList: any): void {
  cardList.innerHTML = "";

  let node = document.createElement("li");
  let string ="I recommend using my good ol reliable for your next champaign: ";
  let recommend = nameList[Math.floor(Math.random()*9)];

  node.appendChild(document.createTextNode(string + recommend))
  cardList.appendChild(node);

  nameList.forEach(element => {
    node.appendChild(document.createTextNode(element));
  });
  cardList.appendChild(node);
}

//function which will gather the amount of dice that 
//the user wants to roll and the type. Then it will proceed to roll that many times.
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

//displays the results of the dice roll by adding it to an empty list element
function PrintDice(diceList: any[]): void {
  diceResult.innerHTML = "";

  diceList.forEach(element => {
    let node = document.createElement("li");

    node.appendChild(document.createTextNode(element));
    diceResult.appendChild(node);
  });
}
