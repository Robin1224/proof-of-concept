import { constructGuestsQuery } from './queryHandler.js';

const form = document.getElementById("options-form");
const nameValue = window.location.search;

const optionsSubmit = event => {
  event.preventDefault();
  const URLquery = constructOptionsQuery();
  window.location.href = `/guests/${URLquery}`;
}

form.addEventListener("submit", optionsSubmit);

console.log(nameValue);