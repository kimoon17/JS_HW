//An integer N and a set of N rectangles are given, 
//given by their sides - objects with pairs of random numbers {a, b}. 
//Find the minimum and maximum area of ​​rectangles from a given set. 
//An example of an array in JS: 
// " [{a: 4, b: 5}, {a: 1, b: 7}, {a: 1, b: 6}, {a: 2, b: 2}, {a: 1, b: 9}] "

const n = 7; //# of rectangles
const arrayOriginal = [{a: 4, b: 5}, {a: 1, b: 7}, {a: 1, b: 6}, {a: 2, b: 2}, {a: 1, b: 9}]; //a: side, b: side
const firstPos = arrayOriginal[0].a * arrayOriginal[0].b;
let min = firstPos;
let minIndex = 0;
let max = firstPos;
let maxIndex = 0;

for (let i = 0; i < arrayOriginal.length; i++) {
    let current = arrayOriginal[i].a * arrayOriginal[i].b;
    if (current < min) {
        min = current;
        minIndex = i;
    }
    if (current > max) {
        max = current;
        maxIndex = i;
    }
}

console.log("Min Area: [" + min + "] at position: [" + minIndex + "] of the array.");
console.log("Max Area: [" + max + "] at position: [" + maxIndex + "] of the array.");
