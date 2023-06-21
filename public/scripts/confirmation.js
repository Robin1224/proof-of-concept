const button = document.getElementById("finish-button");

const finishHandler = () => {
  const query = window.location.search
  window.location.href = `/finish/${query}`;
}

button.addEventListener("click", finishHandler());