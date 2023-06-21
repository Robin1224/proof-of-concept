const button = document.getElementById("finish-button");

button.addEventListener("click", () => {
  const query = window.location.search
  window.location.href = `/finish/${query}`;
});