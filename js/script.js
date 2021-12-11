/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//Creates quote objects with quote information
const quote1 = {
  quote: "What does not kill me makes me stronger" ,
  source: "Frederich Nietzsche" ,
  citation: "Twilight of Idols" ,
  year: 1888 ,
  tag: "Historic"
} ;
const quote2 = {
  quote: "Get busy living or get busy dying" ,
  source: "Stephen King" ,
  citation: "The Shawshank Redemption" ,
  year: 1994 ,
  tag: "Inspirational" 
} ;
const quote3 = {
  quote: "Whether you think you can, or you think you can't you're right" ,
  source: "Henry Ford" ,
  citation: "" ,
  year: 0 ,
  tag: "Inspirational" 
} ;
const quote4 = {
  quote: "The greatest glory of living lies not in never falling but in rising evertimem you fall." ,
  source: "Nelson Mandela" ,
  citation: "White House with Bill Clinton" ,
  year: 1998 ,
  tag: "Historic"
} ;
const quote5 = {
  quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success" ,
  source: "James Cameron" ,
  citation: "" ,
  year: 0 ,
  tag: "Insirational" 
} ;

//Creates an array named quotes containing the quote objects.
const quotes = [
  quote1 ,
  quote2 ,
  quote3 ,
  quote4 ,
  quote5 

] ;

/***
 * `getRandomQuote` function
***/

/*Creates a function called getRandomQuote that
  gets a random number and rounds down so it converts easily
  to index value, then multiplies it by my max index value by 
  using quotes.length. It ends by returning whichever index value 
  object it gets through randomNumber*/

function getRandomQuote() {
   let randomNumber = Math.floor( Math.random() * quotes.length ) ;
  return quotes[randomNumber];
  }

/*Creates function getRandomColor which uses Math.random on the 3 values 
in an rbg trio to change the style of the body elements background color
style to random numbers in the rbg range (0-255)*/

function getRandomColor() {
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() *255;

  document.body.style.backgroundColor = `rgb( ${r}, ${g}, ${b} )`
}

/***
 * `printQuote` function
***/

/* Sets interval for my function to 7 second autorefresh. Creates a function called printQuote which calls the getRandomQuote
function  to get a random quote object, then concatenates the 
different pieces into randomString. It then returns the concatenated string
onto the page via quote-box element*/
setInterval(printQuote,7000);

function printQuote() {
getRandomColor();
let randomQuote = getRandomQuote();
let randomString = `<p class="quote">${randomQuote.quote}</p>
                    <p class="source">${randomQuote.source}`;
  if ( randomQuote.citation != "" ) {
    randomString += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if ( randomQuote.year > 0 ) {
    randomString += `<span class="year"> ${randomQuote.year}</span>`;
  } 
  if ( randomQuote.tag != "" ) {
    randomString += `<span class="tag"> ${randomQuote.tag}</span>`
  }
  randomString += `</p>`;
return document.getElementById('quote-box').innerHTML = randomString;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//This portion adds the event listener to wait for a click which runs printQuote function

document.getElementById('load-quote').addEventListener("click", printQuote, false);