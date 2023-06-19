const form = document.getElementById("name-form");

function nameSubmit(event) {
  event.preventDefault();
  var nameValue = document.getElementById("name-input").value;
  window.location.href = `/options/?name=${nameValue}`;
}

form.addEventListener("submit", nameSubmit);

console.log("test");