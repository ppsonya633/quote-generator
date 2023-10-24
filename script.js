const quotecontainer = document.getElementById("quote-container");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newquote = document.getElementById("newquote");
const twitter = document.getElementById("twitter");
const loader = document.getElementById("loader");

let quotes = [];

// generate a random quotes
function randomquote() {
  loaderstart();
  const changequote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.textContent = changequote.text;
  if (!changequote.author) {
    author.textContent = "Unknown";
  } else {
    author.textContent = changequote.author;
    continueworking();
  }
}
// randomquote();

// Create a Loader
function loaderstart() {
  loader.hidden = false;
  quotecontainer.hidden = true;
}

function continueworking() {
  quotecontainer.hidden = false;
  loader.hidden = true;
}

// add twitter button.
function tweetquote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.textContent}-${author.textContent}`;
  window.open(twitterUrl, "_blank");
}

// event listener

newquote.addEventListener("click", randomquote);
twitter.addEventListener("click", tweetquote);
// favouratequote.addEventListener("click", randomquote);

// let quotes = [];

//get quotes from api.
getquotes();

async function getquotes() {
  loaderstart();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const url = await fetch(apiUrl);
    quotes = await url.json();
    console.log(quotes);

    randomquote();
  } catch (error) {}
}
