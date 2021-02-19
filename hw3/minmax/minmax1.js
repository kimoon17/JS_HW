//Given an integer N. Generate an array of N random integers. 
//Find the minimum and maximum of the elements of the given array 
//and print them in the specified order.

let randomArray = new Array(7);

for (let i = 0; i < randomArray.length; i++) {
    randomArray[i] = Math.floor(Math.random() * 100);
}

randomArray.sort(function compare(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
})

console.log(randomArray);
console.log("Min: " + randomArray[0]);
console.log("Max: " + randomArray[randomArray.length - 1]);