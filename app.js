const quoteButton = document.querySelector("#new-quote");
const twitterButton = document.querySelector("#twitter");
const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");

const getQuote = async () => {
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
    author.textContent = apiQuote[0].author ?? "Unknown";
  } catch (err) {
    console.error(err);
  }
};

const tweet = async () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text="${quoteText.textContent}" - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank')
};

getQuote();

quoteButton.addEventListener("click", getQuote);
twitterButton.addEventListener("click", tweet);
