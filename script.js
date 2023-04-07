let quote = document.getElementById("main-quote");
let author = document.getElementById("author");

let uri = "https://api.quotable.io/random";

function fetchQuote() {
  fetch(uri)
    .then((response) => response.json())
    .then((data) => {
      quote.innerHTML = data.content;
      author.innerHTML = data.author;
    });
}

function changeQuote() {
  fetchQuote(uri)
    .then((response) => response.json())
    .then((data) => {
      quote.innerHTML = data.content;
      author.innerHTML = data.author;
    });
}

fetchQuote();
