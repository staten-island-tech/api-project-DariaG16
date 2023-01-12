import "../styles/style.css";
const URL = "https://valorant-api.com/v1/agents";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json(); //makes the data into a json object u can use
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
getData(URL);
