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
const quote1 = {
  quote: "" ,
  source: "" ,
  citation: "" ,
  year: 0 
} ;
const quote2 = {
  quote: "" ,
  source: "" ,
  citation: "" ,
  year: 0 
} ;
const quote3 = {
  quote: "" ,
  source: "" ,
  citation: "" ,
  year: 0 
} ;
const quote4 = {
  quote: "" ,
  source: "" ,
  citation: "" ,
  year: 0 ,
} ;
const quote5 = {
  quote: "" ,
  source: "" ,
  citation: "" ,
  year: 0 
} ;

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


function getRandomNumber() {
   let randomNumber = Math.floor(Math.random() * quotes.length ) ;
  return quotes[randomNumber];
  }

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);