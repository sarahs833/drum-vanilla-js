// TODO: React to a click on the button!
const react = document.getElementById("clickme");
react.addEventListener("click", (event) => {
  console.log(event.currentTarget.disabled);
});

react.addEventListener("click", (event) => {
  console.log(event.currentTarget.innerText = "Bingo!");
});
