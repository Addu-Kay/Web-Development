let Counter;
let player1Image = document.querySelector("img");
let player2Image = document.querySelector("img").nextElementSibling;
let Heading = document.getElementById("title");

function refreshCounter() {
  Counter = parseInt(sessionStorage.getItem("reloadCounter")) || 0;
  Counter++;
  sessionStorage.setItem("reloadCounter", Counter.toString());
  if (Counter > 1) {
    let result = randomDice();
    player1Image.setAttribute("src", `./images/dice${result[0]}.png`);
    player2Image.setAttribute("src", `./images/dice${result[1]}.png`);
    if (result[0] > result[1]) {
      Heading.textContent = "🚩 Player 1 Wins!!";
    } else if (result[0] < result[1]) {
      Heading.textContent = "Player 2 Wins!! 🚩";
    } else {
      Heading.textContent = "DRAW!!";
    }
  }
}
window.onload = refreshCounter();

function randomDice() {
  let num1 = Math.floor(Math.random() * 6 + 1);
  let num2 = Math.floor(Math.random() * 6 + 1);
  return [num1, num2];
}
