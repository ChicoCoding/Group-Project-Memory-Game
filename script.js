"use strict";
const cardContainer = document.querySelector(".card-container");

const cardArray = [
  {
    animal: "capybara",
    image: "assets/capybara.jpg",
    id: 1,
  },
  {
    animal: "llama",
    image: "assets/llama.jpg",
    id: 2,
  },
  {
    animal: "cockatoo",
    image: "assets/cockatoo.jpg",
    id: 3,
  },
  {
    animal: "bison",
    image: "assets/bison.jpg",
    id: 4,
  },
  {
    animal: "capybara",
    image: "assets/capybara.jpg",
    id: 5,
  },
  {
    animal: "llama",
    image: "assets/llama.jpg",
    id: 6,
  },
  {
    animal: "cokatoo",
    image: "assets/cockatoo.jpg",
    id: 7,
  },
  {
    animal: "bison",
    image: "assets/bison.jpg",
    id: 8,
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
  // flipCardFront.style.backgroundImage = shuffledCards[i].image;

  const flipCardBack = document.createElement("div");
  flipCardInner.append(flipCardBack);
  flipCardBack.classList.add("flip-card-back");

  // Stuff for image if we end up needing it
  const cardImage = document.createElement("img");
  flipCardBack.append(cardImage);
  cardImage.src = shuffledCards[i].image;
  cardImage.alt = shuffledCards[i].animal;
  cardImage.style.width = "50px";
  cardImage.style.height = "100px";
  //  flipCardBack.classList.add("flip-card-back");
}

cardContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains(".flip-card"))
    // e.target.style.transition = "transform 2s";
    e.target.style.transform = "rotateY(180deg)";
});
