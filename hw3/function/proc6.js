//Write the DigitCountSum (K, C, S) function that 
//finds the number C of digits of an integer positive 
//number K, as well as their sum S (K is input, 
//C and S are output parameters of integer type).

const k = 425;
let c = 1;
let s = 0;

function digitCountSum(k) {
    while(Math.floor(k / 10) != 0) {
        c++;
        s += k % 10;
        k = Math.floor(k / 10);
    }
    s += k % 10;
    return [c, s];
}

const array = digitCountSum(k);
console.log("Number of digits: " + array[0]);
console.log("Sum of digits: " + array[1]);
