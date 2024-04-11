
const btn = document.querySelector("#js-new-burger"); 
btn.addEventListener('click', getQuote); 

const btn2 = document.querySelector("#js-episode"); 
btn2.addEventListener('click', getAnswer); 

const answerText = document.querySelector("#js-episode-text");

let answer = ''; 
var i = 0;

function getRandomArbitrary(min, max) {
  const num = Math.random() * (max - min) + min;
  return num.toString()
}

async function getQuote() { 
  const id = getRandomArbitrary(1, 333).toString()
  const endpoint = 'https://bobsburgers-api.herokuapp.com/burgerOfTheDay/' + id;
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText)
    }
    const json = await response.json(); 
    console.log(json['name']);
    displayQuote(json['name']);
    answer1 = json['season'];
    answer2 = json['episode'];
    answerText.textContent = '';
  } catch (err) {
    console.log(err);
    alert('Failed to fetch new quote'); 
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector("#js-burger-text"); 
  quoteText.textContent = quote; 
}

function getAnswer() {
  answerText.textContent = 'Season ' + answer1 + ', Episode ' + answer2;
}

getQuote(); 