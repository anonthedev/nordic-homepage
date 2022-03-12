import vikingImgs from "./pics.mjs";
import vikingQuotes from "./quotes.mjs";

const quoteEl = document.getElementById("quote");
const quoteSourceEl = document.getElementById("quote-source");
const timeEl = document.getElementById("time");

function randomIndexes(array) {
  return Math.floor(Math.random() * array.length);
}

setInterval(() => {
  const date = new Date();
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();

  hours = hours.length == 1 ? 0 + hours.toString() : hours;
  minutes = minutes.length == 1 ? 0 + minutes : minutes;

  timeEl.innerHTML = hours + ":" + minutes;
}, 1);

let randomImageIndex = randomIndexes(vikingImgs);
let randomQuoteIndex = randomIndexes(vikingQuotes);

let randomImage = vikingImgs[randomImageIndex];
let randomQuote = vikingQuotes[randomQuoteIndex];

document.body.style.backgroundImage = `url('${randomImage}')`;
quoteEl.innerHTML = '"' + randomQuote.quote + '"';
quoteSourceEl.innerHTML = randomQuote.source;
