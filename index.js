/* function greet(name) {
  const greetPromise = new Promise(function (resolve, reject) {
    resolve(`Hello ${name}`);
  });
  return greetPromise;
}
const suzie = greet("suzie");
console.log(suzie);
 */
const axios = require("axios");

const options = {
  method: "POST",
  url: "https://paraphrasing-tool1.p.rapidapi.com/api/rewrite",
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "X-RapidAPI-Host": "paraphrasing-tool1.p.rapidapi.com",
  },
  data: '{"sourceText":"There are several major benefits to moving to plant-based nutrition, all supported by excellent science. "}',
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });