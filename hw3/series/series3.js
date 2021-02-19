//Ten real numbers are given. Find their arithmetic mean.

const array = [2.4, 1.2, 4.6, 7.8, 5, 7.6, 9.8, 6.5, 3.2, 1.2];
let sum = 0;

function getMean(arr) {
    array.map(item => {
        sum += item;
    });
    return sum / arr.length;
}

console.log("Mean is: " + getMean(array).toFixed(3));