"use strict";
const cardContainer = document.querySelector(".card-container");

const cardArray = [
  {
    animal: "capybara",
    image: "path to image, as a string",
    id: 1,
  },
  {
    animal: "cat",
    image: "path to image, as a string",
    id: 2,
  },
  {
    animal: "dog",
    image: "path to image, as a string",
    id: 3,
  },
  {
    animal: "cockatoo",
    image: "path to image, as a string",
    id: 4,
  },
  {
    animal: "octopus",
    image: "path to image, as a string",
    id: 5,
  },
  {
    animal: "bumble bee",
    image: "path to image, as a string",
    id: 6,
  },
  {
    animal: "bison",
    image: "path to image, as a string",
    id: 7,
  },
  {
    animal: "llama",
    image: "path to image, as a string",
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

for (let i = 0; i < cardArray.length; i++) {
  const newCard = document.createElement("div");
  cardContainer.append(newCard);
  newCard.classList.add("card", "face-down");
}
