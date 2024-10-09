"use strict";

let highscore = 0;
let score;
let secretNumber;

const setTextContent = (selector, text) => {
  document.querySelector(selector).textContent = text;
};

const start = () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  setTextContent(".number", "?");
};

start();

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    setTextContent(".message", "No number!");
  } else if (guess === secretNumber) {
    setTextContent(".message", "Correct Number!");
    setTextContent(".number", secretNumber);

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      setTextContent(".highscore", highscore);
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      setTextContent(
        ".message",
        guess > secretNumber ? "Too high!" : "Too low!"
      );
      score--;
      setTextContent(".score", score);
    } else {
      setTextContent(".message", "You lost the game!");
      setTextContent(".score", "0");
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  start();
  setTextContent(".message", "Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  setTextContent(".score", score);
});
