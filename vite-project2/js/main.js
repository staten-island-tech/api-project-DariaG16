//WAVE TOOL TO CHECK
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
  contentsbtn: document.querySelector("#Contents"),
  titlebtn: document.querySelector("#Title"),
  AOLbtn: document.querySelector("#AmountOfLines"),
  randombtn: document.querySelector("#Random"),
  search: document.querySelector("#search"),
  searchtxt: document.querySelector("#searchbartxt"),
  search: document.querySelector("#search"),
};
DOMSelectors.author.addEventListener("click", function () {
  let filterBy = "author";
  return filterBy;
  getData();
});
DOMSelectors.search.addEventListener("click", function () {
  let input = DOMSelectors.form.value;
  console.log(input);
});
async function getData() {
  try {
    const response = await fetch(
      `https://poetrydb.org/${filterBy}/edgar allan poe`
    );
    const everything = await response.json(); //makes the data into a json object u can use
    console.log(everything);
  } catch (error) {
    console.log(error);
  }
}
//getData(`https://poetrydb.org/${filterBy}/${input}`);

/* DOMSelectors.author.addEventListener("click", author);
function author() {
  console.log(`${URL}`);
  // DOMSelectors.form.insertAdjacentHTML("afterend");
}
 */
DOMSelectors.author.addEventListener("click", function () {
  //when the button clicks, do this function:
  // we get the value of whatever the user typed in the text box named "expression"
  //makeCards(input);
});
/* function crying() {
  document.getElementById("Author").innerHTML += "First function was executed!";
}
DOMSelectors.contents.addEventListener("click", crying());
 */
/* function removeCard() {
  const cards = document.querySelectorAll(".Category");
  const cardsArray = Array.from(cards);
  cardsArray.forEach((cards) => {
    cards.remove();
  });
}
function makeCards(type) {
  removeCard();
  type.forEach((author) =>
    DOMselectors.form.insertAdjacentHTML(
      "afterend",
      `<div class="Category cards" >
    <h3>Type: ${poems.author}</h3>
    </div>`
    )
  );
} */
