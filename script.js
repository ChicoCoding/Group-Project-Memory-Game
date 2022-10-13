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

/*
for (let i = 0; i < 16; i++) {
  const newCard = document.createElement("div");
  cardContainer.append(newCard);
  newCard.classList.add("card");
  // TO DO: Add randomization of cards/images
  newCard.setAttribute("data-id", i);
}
*/
