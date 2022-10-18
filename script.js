"use strict";
const cardContainer = document.querySelector(".card-container");

const cardArray = [
  {
    animal: "capybara",
    image: "assets/capybara.png",
    id: 1,
  },
  {
    animal: "llama",
    image: "assets/llama.png",
    id: 2,
  },
  {
    animal: "cockatoo",
    image: "assets/cockatoo.png",
    id: 3,
  },
  {
    animal: "bison",
    image: "assets/bison.png",
    id: 4,
  },
  {
    animal: "capybara",
    image: "assets/capybara.png",
    id: 5,
  },
  {
    animal: "llama",
    image: "assets/llama.png",
    id: 6,
  },
  {
    animal: "cockatoo",
    image: "assets/cockatoo.png",
    id: 7,
  },
  {
    animal: "bison",
    image: "assets/bison.png",
    id: 8,
  },
  {
    animal: "goose",
    image: "assets/goose.png",
    id: 9,
  },
  {
    animal: "grizzly",
    image: "assets/grizzly.png",
    id: 10,
  },
  {
    animal: "goose",
    image: "assets/goose.png",
    id: 11,
  },
  {
    animal: "grizzly",
    image: "assets/grizzly.png",
    id: 12,
  },
];

function shuffle(cardArray) {
  let m = cardArray.length,
    t,
    i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    t = cardArray[m];
    cardArray[m] = cardArray[i];
    cardArray[i] = t;
  }
  return cardArray;
}

console.log(shuffle(cardArray));
const shuffledCards = shuffle(cardArray);

for (let i = 0; i < cardArray.length; i++) {
  const flipCard = document.createElement("div");
  cardContainer.append(flipCard);
  flipCard.classList.add("flip-card");

  const flipCardInner = document.createElement("div");
  flipCard.append(flipCardInner);
  flipCardInner.classList.add("flip-card-inner");

  const flipCardFront = document.createElement("div");
  flipCardInner.append(flipCardFront);
  flipCardFront.classList.add("flip-card-front");
  flipCardFront.setAttribute("data-animal", shuffledCards[i].animal);
  // flipCardFront.style.backgroundImage = shuffledCards[i].image;

  const flipCardBack = document.createElement("div");
  flipCardInner.append(flipCardBack);
  flipCardBack.classList.add("flip-card-back");

  // Stuff for image if we end up needing it
  const cardImage = document.createElement("img");
  flipCardBack.append(cardImage);
  cardImage.src = shuffledCards[i].image;
  cardImage.alt = shuffledCards[i].animal;
  cardImage.classList.add("card-img");
}

let cardOne = null;
let cardTwo = null;
let started = false;
let score = 0;

cardContainer.addEventListener("click", (e) => {
  console.log(e.target.parentNode.parentNode);
  if (
    e.target.classList.contains("flip-card-front") &&
    (cardOne === null || cardTwo === null) &&
    started
  ) {
    e.target.parentNode.classList.add("flip");
    if (cardOne === null) {
      cardOne = e.target;
    } else {
      cardTwo = e.target;
      setTimeout(() => {
        cardOne.parentNode.classList.remove("flip");
        cardTwo.parentNode.classList.remove("flip");
        cardOne = null;
        cardTwo = null;
      }, 1300);

      if (
        cardOne.getAttribute("data-animal") ===
        cardTwo.getAttribute("data-animal")
      ) {
        setTimeout(() => {
          score++;
          cardTwo.parentNode.remove();
          cardOne.parentNode.remove();
        }, 1000);
      }
    }
  }
});

const startButton = document.querySelector(".start");
startButton.addEventListener("click", (e) => {
  started = true;
  startButton.style.backgroundColor = "white";
  startButton.style.color = "green";
  timer.style.backgroundColor = "white";
});

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", (e) => {
  window.location.reload();
});

const timer = document.querySelector(".timer");
const popup = document.querySelector(".popup");

let timeSeconds = 0;
let timeMinutes = 0;
const timerFunction = () => {
  if (started) {
    // console.log(`Timer: ${timeMinutes}:${timeSeconds}`);
    timeSeconds++;
    if (timeSeconds === 60) {
      timeSeconds = 0;
      timeMinutes++;
    }
    timer.textContent = `Timer: ${timeMinutes}:${timeSeconds}`;
    if (score === cardArray.length / 2) {
      started = false;
      popup.style.display = "block";
    }
  }
};
const myTimeout = setInterval(timerFunction, 1000);
