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
  AOLbtn: document.querySelector("#AmountOfLines"),
  randombtn: document.querySelector("#Random"),
  search: document.querySelector("#search"),
  searchtxt: document.querySelector("#searchbartxt"),
};
DOMSelectors.author.addEventListener("click", function () {
  //let filterBy = "author";
  //return filterBy;
  getData();
});

DOMSelectors.search.addEventListener("click", function () {
  let input = DOMSelectors.form.value;
  console.log(input);
});
async function getData() {
  try {
    let filterBy = "author";
    const response = await fetch(`https://poetrydb.org/${filterBy}`);
    const everything = await response.json(); //makes the data into a json object u can use
    console.log(everything);
    makeCards(everything);
  } catch (error) {
    console.log(error);
  }
}
//getData(`https://poetrydb.org/${filterBy}/${input}`);

DOMSelectors.author.addEventListener("click", function () {
  //when the button clicks, do this function:
  // we get the value of whatever the user typed in the text box named "expression"
  //makeCards(input);
});

/* function removeCard() {
  const cards = document.querySelectorAll(".Category");
  const cardsArray = Array.from(cards);
  cardsArray.forEach((cards) => {
    cards.remove();
  });
}*/
function makeCards1(type) {
  type.forEach(() =>
    DOMSelectors.cards.insertAdjacentHTML(
      "afterend",
      `<div class="Category cards" >
    <h3>Type: YES</h3>
    </div>`
    )
  );
}
function makeCards(something) {
  DOMSelectors.cards.insertAdjacentHTML(
    "afterend",
    `<div class="Category cards" >
      <h3>list of authors${something.authors}</h3>
      </div>`
  );
}
function makeCardds(type) {
  removeCard();
  type.forEach((cookies) =>
    DOMselectors.everything.insertAdjacentHTML(
      "beforeend",
      `<div class="Category cards" >
    <h3>Type: ${cookies.type}</h3>
    <h3>Rarity: ${cookies.rarity}</h3>
    <h3>Useful In: ${cookies.usefulIn}</h3>
    <img class="images" src="${cookies.img}" alt="${cookies.name}">
    <h2>${cookies.name}</h2>
    </div>`
    )
  );
}
