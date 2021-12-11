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
  quote: "1" ,
  source: "1" ,
  citation: "1" ,
  year: 1 ,
  tag: "1"
} ;
const quote2 = {
  quote: "2" ,
  source: "2" ,
  citation: "2" ,
  year: 2 ,
  tag: "2" 
} ;
const quote3 = {
  quote: "3" ,
  source: "3" ,
  citation: "3" ,
  year: 3 ,
  tag: "3" 
} ;
const quote4 = {
  quote: "4" ,
  source: "4" ,
  citation: "4" ,
  year: 4 ,
  tag: "4"
} ;
const quote5 = {
  quote: "5" ,
  source: "5" ,
  citation: "5" ,
  year: 5 ,
  tag: "5" 
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

/***
 * `printQuote` function
***/

/*Creates a function called printQuote which calls the getRandomQuote
function  to get a random quote object, then concatenates the 
different pieces into randomString. It then returns the concatenated string
onto the page via quote-box element*/

function printQuote() {
let randomQuote = getRandomQuote();
let randomString = `<p class="quote">${randomQuote.quote}</p>
                    <p class="source">${randomQuote.source}`;
  if ( randomString.citation != "" ) {
    randomString += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if ( randomString.year > 0 ) {
    randomString += `<span class="year">${randomQuote.year}</span>`;
  } 
  if ( randomString.tag != "" ) {
    randomString += `<span class="tag">${randomQuote.tag}</span>`
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