"use strict";
const cardContainer = document.querySelector(".card-container");

for (let i = 0; i < 16; i++) {
  const newCard = document.createElement("div");
  cardContainer.append(newCard);
  newCard.classList.add("card");
  // TO DO: Add randomization of cards/images
  // newCard.setAttribute("data-id", i);
}
