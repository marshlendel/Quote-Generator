const quoteButton = document.querySelector("#new-quote");
const twitterButton = document.querySelector("#twitter");
const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");
const loader = document.querySelector("#loader");
const quoteContainer = document.querySelector(".quote-container");

const fetchQuoteFromApi = async () => {
  showLoadingSpinner();
  apiKey = "6+9LdIYv6wItnOKehhMmqg==4E6KOAgDQB76II6z";
  url = "https://api.api-ninjas.com/v1/quotes?category=";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { "X-Api-Key": apiKey },
    });
    const apiQuote = await response.json();
    if (apiQuote[0].quote.length > 120) {
      quoteText.classList.add("long-quote");
    } else {
      quoteText.classList.remove("long-quote");
    }

    quoteText.textContent = apiQuote[0].quote;
    authorText.textContent = apiQuote[0].author ?? "Unknown";
    removeLoadingSpinner();
  } catch (err) {
    console.error(err);
  }
};

const tweetQuote = async () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text="${quoteText.textContent}" - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
};

const showLoadingSpinner = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
};

const removeLoadingSpinner = () => {
  loader.hidden = true;
  quoteContainer.hidden = false;
};

fetchQuoteFromApi();

quoteButton.addEventListener("click", fetchQuoteFromApi);
twitterButton.addEventListener("click", tweetQuote);
