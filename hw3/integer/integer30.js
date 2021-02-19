//The number of some year is given (positive integer). 
//Determine the corresponding century number, given that, 
//for example, the beginning of the 20th century was 1901.

const theYear = 2020;
const firstTwo = Math.floor(theYear / 100);
console.log("We are in the: " + (firstTwo + 1) + " (th/st) century."); 
