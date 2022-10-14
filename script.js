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

for (let i = 0; i < cardArray.length; i++) {
  const newCard = document.createElement("div");
  cardContainer.append(newCard);
  newCard.classList.add("card", "face-down");
}
