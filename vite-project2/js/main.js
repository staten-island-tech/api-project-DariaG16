//WAVE TOOL TO CHECK
import "../styles/style.css";
//let audio = new Audio("https://www.youtube.com/watch?v=PjX67xmthbg");
const DOMSelectors = {
  button: document.querySelector(".button"),
  form: document.querySelector("#form"),
  cards: document.querySelector(".cards"),
  author: document.querySelector("#Author"),
  contentsbtn: document.querySelector("#Contents"),
  titlebtn: document.querySelector("#Title"),
  randombtn: document.querySelector("#Random"),
  search: document.querySelector("#search"),
  searchtxt: document.querySelector("#query"),
};
DOMSelectors.author.addEventListener("click", function () {
  getData("author");
});
DOMSelectors.contentsbtn.addEventListener("click", function () {
  getData("lines");
});
DOMSelectors.titlebtn.addEventListener("click", function () {
  getData("title");
});
DOMSelectors.randombtn.addEventListener("click", function () {
  getDataRandom("random");
});
DOMSelectors.form.addEventListener("submit", function () {
  event.preventDefault();
  let input = DOMSelectors.searchtxt.value;
  console.log(input);
  getData2("author", input);
});

async function getData(filterBy) {
  try {
    const response = await fetch(`https://poetrydb.org/${filterBy}`);
    const everything = await response.json(); //makes the data into a json object u can use
    console.log(everything);
    removeCard();
    makeCards2(everything.titles);
  } catch (error) {
    console.log(error);
  }
}

async function getData2(filterBy, filter) {
  try {
    const response = await fetch(`https://poetrydb.org/${filterBy}/${filter}`);
    const everything = await response.json(); //makes the data into a json object u can use
    console.log(everything);
    removeCard();
    makeCards(everything);
  } catch (error) {
    console.log(error);
  }
}
//getData(`https://poetrydb.org/${filterBy}/${input}`);
async function getDataRandom(filterBy) {
  try {
    const response = await fetch(`https://poetrydb.org/${filterBy}`);
    const everything = await response.json(); //makes the data into a json object u can use
    console.log(everything);
    removeCard();
    makeCardsRandom(everything);
  } catch (error) {
    console.log(error);
  }
}

function makeCards(something) {
  something.forEach((name) =>
    DOMSelectors.cards.insertAdjacentHTML(
      "afterend",
      `<div class="Category cards" >
      <h2>${name.title}</h2>
      <p>
        ${name.lines}
      </p>

      <h3 class="author">${name.author}`
    )
  );
}
function makeCards2(something) {
  something.forEach((name) =>
    DOMSelectors.cards.insertAdjacentHTML(
      "afterend",
      `<div class="Category cards" >
      <h3>${name}</h3>`
    )
  );
}
function makeCardsRandom(something) {
  something.forEach((array) =>
    DOMSelectors.cards.insertAdjacentHTML(
      "afterend",
      `<div class="Category cards" >
      <h2>${array.title}</h2>
      <p>
        ${array.lines}
      </p>

      <h3 class="author">${array.author}</h3>`
    )
  );
}

function removeCard() {
  const cards = document.querySelectorAll(".Category");
  const cardsArray = Array.from(cards);
  cardsArray.forEach((cards) => {
    cards.remove();
  });
} //works
