//Write the DigitCountSum (K, C, S) function that 
//finds the number C of digits of an integer positive 
//number K, as well as their sum S (K is input, 
//C and S are output parameters of integer type).

const k = 425;
let c = 1;
let s = 0;

function digitCountSum(k) {
    while(Math.floor(k / 10) !== 0) {
        c++;
        s += k % 10;
        k = Math.floor(k / 10);
    }
    s += k % 10;
    return [c, s];
}

const [numberOfDigits, sumOfDigits] = digitCountSum(k); // TODO: you can destructuring assignment data from return array
console.log("Number of digits: " + numberOfDigits);
console.log("Sum of digits: " + sumOfDigits);
