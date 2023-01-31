//WAVE TOOL TO CHECK
import "../styles/style.css";

let selector = "";

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
getDataRandom("random");
DOMSelectors.author.addEventListener("click", function () {
  getDataT("author", "everything.authors");
  selector = "author";
});
DOMSelectors.contentsbtn.addEventListener("click", function () {
  removeCard();
  selector = "lines";
  DOMSelectors.cards.insertAdjacentHTML(
    "beforebegin",
    `<div class="Category cards">
    <h2>Please enter a line or word from a poem in the text bar above!</h2>
    </div>`
  );
});
DOMSelectors.titlebtn.addEventListener("click", function () {
  getDataT("title", "everything.titles");
  selector = "title";
});
DOMSelectors.randombtn.addEventListener("click", function () {
  getDataRandom("random", "everything");
});
DOMSelectors.form.addEventListener("submit", function () {
  event.preventDefault();
  let input = DOMSelectors.searchtxt.value;
  console.log(input);
  getDataT(input, "everything"); //how do I make the "lines" part change when the user clicks the buttons listed above?
});

async function getDataT(filterBy, sendVar) {
  try {
    const response = await fetch(`https://poetrydb.org/${filterBy}`);
    const everything = await response.json();
    console.log(everything);
    removeCard();
    makeCards2(eval(sendVar), 2);
    //any way to shorten this function (make authors, random and titles interchangable yknow)
  } catch (error) {
    console.log(error);
  }
}
async function getData2(filter) {
  try {
    const response = await fetch(`https://poetrydb.org/${selector}/${filter}`);
    const everything = await response.json();
    console.log(everything);
    removeCard();
    makeCards(everything, 1);
  } catch (error) {
    console.log(error);
  }
}
async function getDataRandom(filterBy) {
  try {
    const response = await fetch(`https://poetrydb.org/${filterBy}`);
    const everything = await response.json();
    console.log(everything);
    removeCard();
    makeCardsRandom(everything);
  } catch (error) {
    console.log(error);
  }
}

function makeCards(something, which) {
  //works
  if (which === 1) {
    something.forEach((name) =>
      DOMSelectors.cards.insertAdjacentHTML(
        "afterend",
        `   <div class="Category cards">
      <h2>${name.title}</h2>
      <p>${name.lines}</p>
      <h3 class="author">${name.author}</h3>
    </div>`
      )
    );
  } else if (which === 2) {
    something.forEach((name) =>
      DOMSelectors.cards.insertAdjacentHTML(
        "afterend",
        `<div class="Category cards" >
      <h3>${name}</h3>`
      )
    );
  }
}

function makeCardsRandom(something) {
  something.forEach((name) =>
    DOMSelectors.cards.insertAdjacentHTML(
      "afterend",
      `   <div class="Category cards">
      <h2>${name.title}</h2>
      <p>${name.lines}</p>
      <h3 class="author">${name.author}</h3>
    </div>`
    )
  );
}

function removeCard() {
  const cards = document.querySelectorAll(".Category");
  cards.forEach((cards) => {
    cards.remove();
  });
}
