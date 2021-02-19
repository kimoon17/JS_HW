//***BEGIN***//

//You are given two numbers a and b. Find their arithmetic mean: "(a + b) / 2"
const a = 4;
const b = 6;
const mean = (a + b) / 2;
console.log("Mean: " + mean);

//Given the legs of a right-angled triangle a and b. Find its hypotenuse "C" and the perimeter "P": "C = a + b", "P = a + b + C".
const leg1 = 3;
const leg2 = 4;
const hypotenuse = Math.sqrt( (leg1 * leg1) + (leg2 * leg2) );
const perimeter = leg1 + leg2 + hypotenuse;
console.log("Hypotenuse: " + hypotenuse);
console.log("Perimeter: " + perimeter);

//Given variables A, B, C. Change their values ​​by moving the contents of "A" to "C", "C" to "B", "B" to "A", and display the new values ​​of variables "A", "B" , "C".
let a1 = 3; //4
let b1 = 4; //5
let c1 = 5; //3
console.log("Original a: " + a1);
console.log("Original b: " + b1);
console.log("Original c: " + c1);
const temp = a1; //3
a1 = b1; 
b1 = c1;
c1 = temp;
console.log("New a: " + a1);
console.log("New b: " + b1);
console.log("New c: " + c1);

//Find the value of the function "y = 3x − 6x − 7" for the given value of "x".
const x = 5;
console.log("Value of the function for x = " + x + ": " + ((3*x) - (6*x) - 7) );

//***INTEGER***//

//The mass "M" is given in kilograms. Using the integer division operation, find the number of full tons in it (1 ton = 1000 kg).
const mass = 65; //kg
console.log("Mass in kilograms: " + mass);
console.log("Kilograms converted to Tons: " + (mass / 1000) );

//The size of the file is given in bytes. Using the integer division operation, find the number of complete kilobytes this file occupies (1 kilobyte = 1024 bytes).
const fileSize = 7821; //bytes
console.log("File size in bytes: " + fileSize);
console.log("file size in kilobytes: " + ( (fileSize / 1024).toFixed(2) ) );

//A two-digit number is given. Find the sum and product of its numbers.
const twoDigitNumber = 37;
const left = Math.floor(twoDigitNumber / 10);
const right = twoDigitNumber % 10;
console.log("Number: " + twoDigitNumber);
console.log("Sum: " + (left + right) );
console.log("Product: " + (left * right) );

//A three-digit number is given. Cross out the first number on the right and assign it to the left. Print the new number.
const threeDigitNumber = 367;
const farRight = threeDigitNumber % 10;
const leftSide = Math.floor(threeDigitNumber / 10);
const newNumber = "" + farRight + leftSide;
console.log("Original number: " + threeDigitNumber);
console.log("New number: " + newNumber);

//***BOOLEAN***//

//An integer A is given. Check the truth of the statement: "The number A is even."
const intA = 46;
console.log("Number is even: " + (intA % 2 == 0) );

//Two integers are given: A, B. Check the truth of the statement: "The inequalities A> 2 and B ≤ 3 are true"
const int1 = 17;
const int2 = 3;
console.log("A is greater than 2 AND B is less than / equal to 3: " + ( int1 > 2 && int2 <= 3 ) );

//Two integers are given: A, B. Check the truth of the statement: "Each of the numbers A and B is odd."
const integerA = 7;
const integerB = 1;
console.log("A and B are both odd: " + ( !(integerA % 2 == 0) && !(integerB % 2 == 0) ) );

//A four-digit number is given. Check the truth of the statement: "This number is read the same from left to right and right to left."
const fourDigitNumber = 7227;
const leftPart = Math.floor(fourDigitNumber / 100);
const rightPart = fourDigitNumber % 100;
console.log("Same left -> right, and right -> left: "
+ ( fourDigitNumber == ("" + rightPart % 10 + Math.floor(rightPart / 10)
 + leftPart % 10 + Math.floor(leftPart / 10)) ));

//***IF***//

//An integer is given. If it is positive, then add 1 to it; if negative, 
//then subtract 2 from it; if zero, then replace it with 10. Print the resulting number.
let myInteger = 7; 
console.log("Number, before: " + myInteger);
if (myInteger > 0) {
    myInteger++;
} else if (myInteger < 0) {
    myInteger -= 2;
} else {
    myInteger = 10;
}
console.log("Number, after: " + myInteger);

//Three integers are given. Find the number of positive and the number of negative numbers in the original set.
var myIntegers = [5, -6, -7];

let positiveCount = 0;
let negativeCount = 0;

for (let i = 0; i < 3; i++) {
    myIntegers[i] >= 0 ? positiveCount++ : negativeCount++;
}

console.log("Positive count: " + positiveCount);
console.log("Negative count: " + negativeCount);

//Three numbers are given. Find the smallest one.
const myNumber1 = 3;
const myNumber2 = 2;
const myNumber3 = 1;

let smallest = myNumber1;

if (myNumber2 < smallest) 
    smallest = myNumber2;
if (myNumber3 < smallest) 
    smallest = myNumber3;

console.log("Smallest: " + smallest);

//Three integers are given, one of which is different from the other two, 
//equal to each other. Determine the ordinal number of a number different 
//from the rest. *
const integers1 = 3;
const integers2 = 6;
const integers3 = 6;
let pos = "";

if (integers1 < integers2) {
    pos = "behind";
} else if (integers1 > integers2) {
    pos = "ahead";
} else {
    pos = "same level";
}

console.log("Position: " + pos);

//***SWITCH***//

//An integer in the range 1–7 is given. Output a line - the name of the day of the 
//week corresponding to the given number (1 - "Monday", 2 - "Tuesday", etc.)
const dayOfWeek = 4;
switch(dayOfWeek) {
    case 1: 
        console.log("Monday");
        break;
    case 2: 
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thursday (today!) ");
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
        break;
    case 7: 
        console.log("Sunday");
        break;
}

//An integer in the range of 20–69 is given, indicating the age (in years). 
//Print a string describing the specified age, ensuring that the number 
//matches the word "year" correctly, for example: 20 - "twenty years", 
//32 - "thirty two years", 41 - "forty one years old".
const age = 41;
const ageLeft = Math.floor(age / 10);
const ageRight = age % 10;
let finalString = "< ";

switch(ageLeft) {
    case 2:
        finalString += "twenty "
        break;
    case 3:
        finalString += "thirty "
        break;
    case 4:
        finalString += "forty "
        break;
    case 5:
        finalString += "fifty "
        break;
    case 6:
        finalString += "sixty "
        break;
}

switch(ageRight) {
    case 1:
        finalString += "one ";
        break;
    case 2:
        finalString += "two ";
        break;
    case 3:
        finalString += "three ";
        break;
    case 4: 
        finalString += "four ";
        break;
    case 5: 
        finalString += "five ";
        break;
    case 6: 
        finalString += "six ";
        break;
    case 7: 
        finalString += "seven ";
        break;
    case 8: 
        finalString += "eight ";
        break;
    case 9: 
        finalString += "nine ";
        break;
}

finalString += "years old >"

console.log(finalString);

//***FOR***//

//You are given two integers A and B (A <B). Print in ascending order all 
//integers located between A and B (including the numbers A and B themselves), 
//as well as the number N of these numbers.

const lastA = 17;
const lastB = 31;
let counter = 1;

for (let i = lastA; i <= lastB; i++) {
    console.log("[" + counter + "]: " + i);
    counter++;
}

//A real number is given - the price of 1 kg of sweets. 
//Display the cost of 0.1, 0.2, ..., 1 kg of sweets.
let price1KG = 7.65; //1kg

for (let i = 1; i <= 10; i++) {
    console.log("Price for " + (i/10).toFixed(1) + " kg: " + ((price1KG * (i/10).toFixed(1)).toFixed(2)) );
}

//You are given two integers A and B (A <B). Find the product of all 
//integers from A to B, inclusive.
const lastIntegerA = 3;
const lastIntegerB = 5;
let productAll = lastIntegerA;

for (let i = lastIntegerA+1; i <= lastIntegerB; i++) {
    productAll *= i;
}

console.log("Product of all (inclusive) : " + productAll);

//An integer "N (> 0)" is given. 
//Find the sum "1 + 1/2 + 1/3 +.. + 1 / N" (real number).

const theFinalInteger = 7;
let sum = 0;

for (let i = 1; i <= theFinalInteger; i++) {
    sum += (1 / i);
}

console.log( ("Final sum: " + sum.toFixed(4)) );
