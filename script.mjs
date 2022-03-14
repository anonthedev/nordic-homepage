//importing quotes and images
import vikingImgs from "./pics.mjs";
import vikingQuotes from "./quotes.mjs";

//settting up all the HTML elements
const quoteEl = document.getElementById("quote");
const quoteSourceEl = document.getElementById("quote-source");
const timeEl = document.getElementById("time");
const nameInputEl = document.getElementById("name-input");
const nameFormEl = document.getElementById("name-form");
const greetingEl = document.getElementById("greeting-h1");
const afterContentEl = document.getElementsByClassName("content-after")[0];
const nameArticleEl = document.getElementsByClassName("name-article")[0];
const linkNameEl = document.getElementById("link-name");
const linkUrlEl = document.getElementById("link-url");
const addLinkBtn = document.getElementById("add-link-btn");
const typedLinksDivEl = document.getElementById("typed-link");
const shortcutEl = document.getElementById("shortcuts-p");
const newLinkEl = document.getElementById("new-link-p");
const addNewLinkDivEl = document.getElementById("add-new-link");
const givenLinksEl = document.getElementById("given-links");

//declaring variables
let nameVal;
let linkName;
let linkUrl;
let createdLink;
let allCreatedLinks = [];

givenLinksEl.style.display = "none";
addNewLinkDivEl.style.display = "none";

//making a function that returns random item from given array
function randomIndexes(array) {
  return Math.floor(Math.random() * array.length);
}

//setting up the background image
let randomImageIndex = randomIndexes(vikingImgs);
let randomImage = vikingImgs[randomImageIndex];
document.body.style.backgroundImage = `url('${randomImage}')`;

//getting name from localStorage if available
let getPastName = localStorage.getItem("nameVal");

if (getPastName == undefined || getPastName == null) {
  //setting time & greeting article to display none at the beginning
  afterContentEl.style.display = "none";

  //adding Eventlistener for name
  nameFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    afterContentEl.style.display = "block";
    nameArticleEl.style.display = "none";

    showContentFirstTime();
  });
} else {
  nameArticleEl.style.display = "none";
  showContentAfter();
}

//setting up every innerHTMLs
function showContent() {
  setInterval(() => {
    const date = new Date();
    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString();

    hours = hours == 0 ? 12 : hours > 12 ? hours - 12 : hours;
    hours = hours.length == 1 ? 0 + hours.toString() : hours;
    minutes = minutes.length == 1 ? 0 + minutes : minutes;

    timeEl.innerHTML = hours + ":" + minutes;
  }, 1);

  //getting a random quote
  let randomQuoteIndex = randomIndexes(vikingQuotes);
  let randomQuote = vikingQuotes[randomQuoteIndex];

  //adding all the innerHTMLs
  greetingEl.innerHTML = "Hei, " + nameVal;
  quoteEl.innerHTML = '"' + randomQuote.quote + '"';
  quoteSourceEl.innerHTML = randomQuote.source;
  localStorage.setItem("nameVal", nameVal);
}

//showing the main content after user inputs name for the first time
function showContentFirstTime() {
  nameVal = nameInputEl.value;

  showContent();
}

//getting name from local storage
function showContentAfter() {
  nameVal = getPastName;

  showContent();
}

shortcutEl.addEventListener("click", () => {
  givenLinksEl.style.display = "block";
});

newLinkEl.addEventListener("click", () => {
  addNewLinkDivEl.style.display = "flex";
});

addLinkBtn.addEventListener("click", () => {
  linkName = linkNameEl.value;
  linkUrl = linkUrlEl.value;
  console.log(linkName);
  console.log(linkUrl);

  if (linkUrl == "" || linkName == "") {
  } else {
    createdLink = document.createElement("a");
    createdLink.href = "https://" + linkUrl;
    createdLink.innerHTML = linkName;
    createdLink.target = "blank";

    typedLinksDivEl.appendChild(createdLink);
  }
});
