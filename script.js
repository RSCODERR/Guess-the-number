"use strict";

let SecretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // no number input
  if (!guess) {
    displayMessage("🚫 No Number!");

    // player wins
  } else if (guess === SecretNumber) {
    displayMessage("Correct Number! 🎉");

    document.querySelector(".number").textContent = SecretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // guess is wrong
  } else if (guess !== SecretNumber) {
    if (score > 1) {
      displayMessage(guess > SecretNumber ? "Too High! 📈" : "Too low! 📉");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("you've lost the game 💥");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  SecretNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20;

  document.querySelector(".score").textContent = score;

  displayMessage("Start guessing...");

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
