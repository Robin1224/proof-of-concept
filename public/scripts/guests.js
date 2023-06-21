import { constructGuestsQuery } from './queryHandler.js';

const form = document.getElementById("guests-form");

const guestsSubmit = event => {
  event.preventDefault();
  const URLquery = constructGuestsQuery();
  window.location.href = `/confirmation/${URLquery}`;
};

form.addEventListener("submit", guestsSubmit);