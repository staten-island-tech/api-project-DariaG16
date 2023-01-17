//WAVE TOOL TO CHECK
let filterBy = "author";
let input = "edgar allan poe";
import "../styles/style.css";
//let audio = new Audio("https://www.youtube.com/watch?v=PjX67xmthbg");
const DOMSelectors = {
  button: document.querySelector(".button"),
  form: document.querySelector("#form"),
  cards: document.querySelector(".cards"),
  author: document.querySelector("#Author"),
  contents: document.querySelector("#Contents"),
  title: document.querySelector("#Title"),
  amountOfLines: document.querySelector("#AmountOfLines"),
  random: document.querySelector("#Random"),
  search: document.querySelector("#search"),
};

async function getData() {
  try {
    const response = await fetch(`https://poetrydb.org/${filterBy}/${input}`);
    const everything = await response.json(); //makes the data into a json object u can use
    console.log(everything);
    makeCards(0);
  } catch (error) {
    console.log(error);
  }
}
getData(`https://poetrydb.org/${filterBy}/${input}`);

DOMSelectors.author.addEventListener("click", console.log("hi"));

function removeCard() {
  const cards = document.querySelectorAll(".Category");
  const cardsArray = Array.from(cards);
  cardsArray.forEach((cards) => {
    cards.remove();
  });
}
function makeCards(type) {
  removeCard();
  type.forEach((poems) =>
    DOMselectors.form.insertAdjacentHTML(
      "beforeend",
      `<div class="Category cards" >
    <h3>Type: ${poems.author}</h3>
    </div>`
    )
  );
}
