import { constructOptionsQuery } from './queryHandler.js';

const form = document.getElementById("options-form");
const nameValue = window.location.search;

const optionsSubmit = event => {
  event.preventDefault();
  const URLquery = constructOptionsQuery();
  window.location.href = `/options/${URLquery}`;
}

form.addEventListener("submit", optionsSubmit);

console.log(nameValue);