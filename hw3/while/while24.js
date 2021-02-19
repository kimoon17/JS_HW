//An integer N (> 1) is given. Check if N is a Fibonacci number. 
//If it is, then output TRUE, if not, output FALSE.

//The sequence of Fibonacci numbers (FK) is defined as follows: 
//"F [1] = 1, F [2] = 1, F [3] = F [1] + F [2], 
//F [4] = F [2] + F [3] ... 
//where the numbers themselves = 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ... "

//looked online --> for checking this. if it's a perfect square and one or both of these:

function isPerfectSquare(x) {
    const squareRoot = parseInt(Math.sqrt(x));
    return (squareRoot * squareRoot === x);
} 

function isFibbonacci(x) {
    return isPerfectSquare(5*x*x + 4) || isPerfectSquare(5*x*x - 4);
}

let numberToCheck = 21;

console.log(isFibbonacci(numberToCheck) ? numberToCheck + " is a Fibonacci number"
: numberToCheck + " is not a Fibonacci number.");
