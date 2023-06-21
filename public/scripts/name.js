const form = document.getElementById("name-form");
const rememberCheckbox = document.getElementById("remember-name");
const nameInput = document.getElementById("name-input");
var nameValue = document.getElementById("name-input").value;

var nameInputHandlerDelay = false;
var nameInputHandlerDelayMs = 1000;

document.addEventListener("DOMContentLoaded", function() {
  const rememberName = localStorage.getItem("rememberName") === "true";

  if (rememberName) {
    const name = localStorage.getItem("name");
    if (name) {
      nameInput.value = name;
    }
  }

  document.getElementById("remember-name").checked = rememberName
});

const inputHandler = () => {
  if(nameInputHandlerDelay === true) {console.log("returned");return};
  nameInputHandlerDelay = true;

  setTimeout(function(){nameInputHandlerDelay = false;}, nameInputHandlerDelayMs);

  console.log("updated");
  const rememberName = localStorage.getItem("rememberName") === "true";

  (rememberName ? localStorage : sessionStorage).setItem("name", nameValue);
};

nameInput.addEventListener('input', inputHandler);
nameInput.addEventListener('propertychange', inputHandler); // for IE8

rememberCheckbox.addEventListener("change", function() {
  const rememberName = this.checked;
  localStorage.setItem("rememberName", rememberName);
});

function nameSubmit(event) {
  event.preventDefault();

  const nameValue = document.getElementById("name-input").value;
  const rememberName = localStorage.getItem("rememberName") === "true";

  (rememberName ? localStorage : sessionStorage).setItem("name", nameValue);

  window.location.href = `/options/?name=${nameValue}`;
}

form.addEventListener("submit", nameSubmit);

console.log("test");