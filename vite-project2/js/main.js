import "../styles/style.css";
const URL = `https://poetrydb.org/title/6/lines.json`;

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const everything = await response.json(); //makes the data into a json object u can use
    console.log(everything);
  } catch (error) {
    console.log(error);
  }
}
getData(URL);

function removeCard() {
  const cards = document.querySelectorAll(".Category");
  const cardsArray = Array.from(cards);
  cardsArray.forEach((cards) => {
    cards.remove();
  });
}
function makeCards(type) {
  removeCard();
  type.forEach((cookies) =>
    DOMselectors.everything.insertAdjacentHTML(
      "beforeend",
      `<div class="Category cards" >
    <h3>Type: ${idk1}</h3>
    <h3>Rarity: ${idk2}</h3>
    <h3>Useful In: ${idk3}</h3>
    <img class="images" src="${idk4}" alt="${idk5}">
    <h2>${idk6}</h2>
    </div>`
    )
  );
}
